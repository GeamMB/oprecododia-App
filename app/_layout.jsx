import { Stack} from "expo-router";

// sistema de rotas do aplicativo
export default function RootLayout() {
  return(
    <Stack>
      <Stack.Screen name="index" options={{headerShown: false}}></Stack.Screen>
    </Stack>
  )
}