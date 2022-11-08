
import { View, Text, Image, StyleSheet } from 'react-native';

const RepositoryItem = ({ item }) => {

  const styles = StyleSheet.create({
    entry: {
      borderBottomWidth: 5,
      padding: 10,
      borderBottomColor: 'grey'
    },
    flexContainterRow: {
      flexDirection: 'row',
      display: 'flex',
      flexGrow: 1
    },
    flexContainterColumn: {
      flexDirection: 'column',
      display: 'flex',
      padding: 5,
      flexGrow: 1
    },
    avatar: {
      width: 70,
      height: 70,
      borderRadius: 10
    },
    fullName: {
      fontWeight: '700'
    },
    description: {
      fontWeight: '400',
      color: 'grey',
      fontSize: 15
    },
    language: {
      backgroundColor: '#0366d6',
      color: 'white',
      borderRadius: 5,
      padding: 3
    },
    stat: {
      fontWeight: '700',
      alignSelf: 'center'
    },
    explanation: {
      color: 'grey',
      alignSelf: 'center',
      flexGrow: 1
    }
  })


    return(
      <View>
        <View style={styles.entry}>
          <View style={styles.flexContainterRow}>
            <Image style={styles.avatar} source={{uri: item.ownerAvatarUrl}}/>
            <View style={styles.flexContainterColumn}>
              <Text style={styles.fullName}>{item.fullName}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <View style={styles.flexContainterRow}><Text style={styles.language}>{item.language}</Text></View>
            </View>
          </View>
          <View style={styles.flexContainterRow}>
            <View style={styles.flexContainterColumn}>
              <Text style={styles.stat}>{item.stargazersCount}</Text>
              <Text style={styles.explanation}>Stars</Text>
            </View>
            <View style={styles.flexContainterColumn}>
              <Text style={styles.stat}>{item.forksCount}</Text>
              <Text style={styles.explanation}>Forks</Text>
            </View>
            <View style={styles.flexContainterColumn}>
              <Text style={styles.stat}>{item.reviewCount}</Text>
              <Text style={styles.explanation}>Reviews</Text>
            </View>
            <View style={styles.flexContainterColumn}>
              <Text style={styles.stat}>{item.ratingAverage}</Text>
              <Text style={styles.explanation}>Rating</Text>
            </View>
          </View>
        </View>
      </View>
    )
}

export default RepositoryItem