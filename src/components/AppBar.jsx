import { View, StyleSheet, Text, Pressable, ScrollView } from "react-native";
import { Link } from "react-router-native";
import Constants from 'expo-constants'

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
};

export default AppBar;
