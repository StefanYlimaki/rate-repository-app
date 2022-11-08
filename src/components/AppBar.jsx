import { View, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    display: 'flex'
  },
  appBar: {
    paddingLeft: 5,
    flexGrow: 1,
    backgroundColor: 'black',
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: 70
  },
  appBarItem: {
    fontSize: 20,
    color: 'white'
  }
});

const AppBar = () => {
  return(
    <View style={styles.container}>
      <View style={styles.appBar}>
        <Text style={styles.appBarItem}>Repositories</Text>
      </View>
    </View>
  )
  
};

export default AppBar;
