
import { FlatList, View, StyleSheet } from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';
import Text from './Text';

import RepositoryItem from './RepositoryItem';


const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network'
  });

  if(error){
    <View>
      <Text>Something went wrong while fetching repositories</Text>
    </View>
  }

  if(loading){
    return(
      <View>
        <Text>Fetching repositories</Text>
      </View>
    )
  }

  // Get the nodes from the edges array
  const repositoryNodes = data.repositories
    ? data.repositories.edges.map(edge => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <RepositoryItem item={item} />
      )}
    />
  );
};

export default RepositoryList;
