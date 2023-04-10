import { Stack,useRouter,Tabs} from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { Alert } from "react-native";


export default () => {
    const router = useRouter();
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#FFE030",
        },
        headerTintColor: "#000A4E",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerRight: () => (
          <AntDesign
            onPress={() => 
             router.push("/modal")
            }
            name="infocirlceo"
            color="black"
            size={22}
            style={{marginRight:2}}
          />
        ),
      }}
    >
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="modal" options={{ presentation: "modal",headerStyle: {
          backgroundColor: "white",
        },
        headerTintColor: "#000A4E", }} />
      <Stack.Screen name="home" options={{headerShown:false}}/>
    </Stack>
  );
};
