import { Box, NativeBaseProvider, StatusBar, Text } from "native-base";
import { ImageBackground } from "react-native";

import backgroundImage from '../assets/inside-out.jpeg'

export default function Home() {
  return (
    <NativeBaseProvider>
      <ImageBackground
        source={backgroundImage}
        style={{
          flex: 1,
          resizeMode: 'cover',
        }}
      >
        <Box flex={1} justifyContent="center" alignItems="center" mt={4} p={2}>
          <Text color="#fff" fontSize="6xl">{`</>`}</Text>
        </Box>
      </ImageBackground>
      <StatusBar />
    </NativeBaseProvider>
  );
}

