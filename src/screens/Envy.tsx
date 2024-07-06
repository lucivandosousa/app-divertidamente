import { Box, NativeBaseProvider, StatusBar, Text } from "native-base";
import { ImageBackground } from "react-native";

import backgroundImage from '../assets/envy.jpeg'

export default function Envy() {
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
          <Text fontSize="2xl">Receber o salário do CTO da empresa.</Text>
        </Box>
      </ImageBackground>
      <StatusBar />
    </NativeBaseProvider>
  );
}

