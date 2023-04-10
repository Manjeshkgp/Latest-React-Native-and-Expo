import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

export default () => (
  <Tabs screenOptions={{ tabBarShowLabel: false }}>
    <Tabs.Screen
      name="feed"
      options={{
        tabBarIcon: () => <FontAwesome name="home" size={24} color={"black"} />,
        title:"Feed"
      }}
    ></Tabs.Screen>
    <Tabs.Screen
      name="search"
      options={{
        tabBarIcon: () => <FontAwesome name="search" size={24} color={"black"} />,
        title:"Search"
      }}
    ></Tabs.Screen>
    <Tabs.Screen
      name="messages"
      options={{
        tabBarIcon: () => <FontAwesome name="envelope" size={24} color={"black"} />,
        title:"Messages"
      }}
    ></Tabs.Screen>
  </Tabs>
);
