import { View, StyleSheet, Text, Pressable } from "react-native";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: 'row'
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
      <View style={styles.appBar}>
        <Link to="/"><Text style={styles.appBarItem}>Repositories</Text></Link>
      </View>
      <View style={styles.appBar}>
        <Link to="/signin"><Text style={styles.appBarItem}>Sign In</Text></Link>
        
      </View>
    </View>
  );
};

export default AppBar;
