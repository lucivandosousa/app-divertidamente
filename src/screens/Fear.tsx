import { Box, NativeBaseProvider, StatusBar, Text } from "native-base";
import { ImageBackground } from "react-native";

import backgroundImage from '../assets/fear.jpeg'

export default function Fear() {
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
          <Text color="#fff" fontSize="2xl">Fazer deploy na sexta-feira.</Text>
        </Box>
      </ImageBackground>
      <StatusBar />
    </NativeBaseProvider>
  );
}

