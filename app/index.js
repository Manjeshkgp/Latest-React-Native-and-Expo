import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Hello World</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
        <Link
          href="/Manjesh"
          style={styles.link}
        >
          Open Manjesh's Profile
        </Link>
        <Link
          href={{
            pathname: "/Ayush",
            params: { name: "Ayush Kumar", surname: "Sharma" },
          }}
          style={styles.link}
        >
          Open Ayush's Profile
        </Link>
        <Link style={styles.link} href="/home"> {/* This will redirect to home/feed since in _layout.js feed is at No.1 */}
          Home/
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  link: {
    fontSize: 20,
    marginVertical: 10,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});
