import { Stack } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';

const index = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="StatsModal"
        options={{
          presentation: 'modal',
          headerShown: true,
          headerShadowVisible: true,
          headerTitle: 'Stats',
          headerStyle: { backgroundColor: '#3a3a59' },
          headerTintColor: '#fff',
        }}
      />
    </Stack>
  );
};

export default index;
