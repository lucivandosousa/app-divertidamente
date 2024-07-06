import { NativeBaseProvider, StatusBar } from "native-base";
import Routes from "./src/routes";

export default function App() {
  return (
    <NativeBaseProvider>
      <Routes />
      <StatusBar />
    </NativeBaseProvider>
  );
}

