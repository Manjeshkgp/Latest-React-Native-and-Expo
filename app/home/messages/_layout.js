import { Stack } from "expo-router";
import { useSearchParams } from "expo-router";

export default () => {
  const { id } = useSearchParams();

  return (
    <Stack>
        <Stack.Screen name="Test"/>
      <Stack.Screen name="[id]" options={{ title: id }} />
    </Stack>
  );
};
