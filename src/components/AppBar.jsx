import { View, StyleSheet, Text, ScrollView, Pressable } from "react-native";
import { Link } from "react-router-native";
import Constants from 'expo-constants'
import { useApolloClient, useQuery } from "@apollo/client";
import { GET_ME } from '../graphql/queries';
import useAuthStorage from '../hooks/useAuthStorage';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    display: "flex",
    flexDirection: 'row'
  },
  scrollView: {
    backgroundColor: 'black'
  },
  appBar: {
    paddingLeft: 5,
    flexGrow: 1,
    backgroundColor: "black",
    alignItems: "flex-start",
    padding: 20
  },
  appBarItem: {
    fontSize: 20,
    color: "white",
  },
});

const AppBar = () => {

  const { data, error, loading } = useQuery(GET_ME, {
    fetchPolicy: "cache-and-network"
  })
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  if(loading){
    return(<Text>Loading...</Text>)
  }

  console.log(data)


  const handlePress = () => {
    authStorage.removeAccessToken();
    apolloClient.resetStore();
  }

  if(data.me === null){
    return (
      <View style={styles.container}>
        <ScrollView horizontal style={styles.scrollView}>
          <View style={styles.appBar}>
            <Link to="/"><Text style={styles.appBarItem}>Repositories</Text></Link>
          </View>
          <View style={styles.appBar}>
            <Link to="/signin"><Text style={styles.appBarItem}>Sign In</Text></Link>
          </View>
        </ScrollView>
      </View>
    );
  }
  return(
      <View style={styles.container}>
      <ScrollView horizontal style={styles.scrollView}>
        <View style={styles.appBar}>
          <Link to="/"><Text style={styles.appBarItem}>Repositories</Text></Link>
        </View>
        <View style={styles.appBar}>
          <Pressable onPress={handlePress}><Text style={styles.appBarItem}>Sign Out</Text></Pressable>
        </View>
      </ScrollView>
    </View>
    )
};

export default AppBar;
