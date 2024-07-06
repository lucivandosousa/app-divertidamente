import { Box, NativeBaseProvider, StatusBar, Text } from "native-base";
import { ImageBackground } from "react-native";

import backgroundImage from '../assets/joy.jpeg'

export default function Joy() {
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
          <Text fontSize="2xl">Implementar uma funcionalidade complexa que vinha tentando resolver há semanas. </Text>
        </Box>
      </ImageBackground>
      <StatusBar />
    </NativeBaseProvider>
  );
}

