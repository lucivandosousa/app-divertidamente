import React from 'react';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Box, Text, VStack, Image } from 'native-base';

import avatar from '../assets/riley.jpeg';

export default function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <Box flex={1} bg={"#021520"} safeArea>
        <Box p="4" bg="primary.500" alignItems="center">
          <Box p={2} borderRadius={'full'} borderWidth={1} borderColor={'gray.800'}>
          <Image
            source={avatar}
            resizeMode='cover'
            alt='avatar'
            style={{
              height: 120,
              width: 120,
              borderRadius: 999
            }}
          />
          </Box>
          <Text mt="2" fontSize="xl" color="white">
            Riley
          </Text>
          <Text fontSize="md" color="gray.200">
            Divertida Mente
          </Text>
        </Box>
        <VStack space="2" px="4">
          <DrawerItemList {...props} />
        </VStack>
      </Box>
    </DrawerContentScrollView>
  )
}
