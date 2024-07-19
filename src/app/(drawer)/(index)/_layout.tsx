import { Stack } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';

const index = () => {
  return <Stack screenOptions={{ headerShown: false, gestureEnabled: false }} />;
};

export default index;
