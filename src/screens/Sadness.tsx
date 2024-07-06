import { Box, NativeBaseProvider, StatusBar, Text } from "native-base";
import { ImageBackground } from "react-native";

import backgroundImage from '../assets/sadness.jpeg'

export default function Sadness() {
  return (
    <NativeBaseProvider>
      <ImageBackground
        source={backgroundImage}
        style={{
          flex: 1,
          resizeMode: 'cover',
        }}
      >
        <Box flex={1} justifyContent="flex-start" alignItems="center" mt={4} p={2}>
          <Text color="#fff" fontSize="2xl">Fazer um update sem "where" na base de produção.</Text>
        </Box>
      </ImageBackground>
      <StatusBar />
    </NativeBaseProvider>
  );
}

