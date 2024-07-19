import { Stack, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';

const GrammarItem = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Stack.Screen options={{}} />
      <Text>{id}</Text>
    </View>
  );
};

export default GrammarItem;
