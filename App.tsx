import Loading from "@components/Loading";
import { StatusBar, View } from "react-native";
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import { NativeBaseProvider } from "native-base";
import { THEME } from "./src/theme";
import SignUp from "@screens/SignUp";

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        translucent
        backgroundColor={"transparent"}
        barStyle={"light-content"}
      />
      {!fontsLoaded ? <Loading /> : <SignUp />}
    </NativeBaseProvider>
  );
}
