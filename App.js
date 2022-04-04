import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={[styles.welcome, { flex: 5, backgroundColor: "pink" }]}>
        Hello react native!
      </Text>
      <Text style={[styles.welcome, { flex: 4, backgroundColor: "yellow" }]}>
        Hello react native!
      </Text>
      <Text style={[styles.welcome, { flex: 3, backgroundColor: "red" }]}>
        Hello react native!
      </Text>
      <Text style={[styles.welcome, { flex: 2, backgroundColor: "blue" }]}>
        Hello react native!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
    justifyContent: "space-around",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
});
