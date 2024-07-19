import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { YStack } from 'tamagui';

import UnitCard from './UnitCard';
import units from '../assets/data/units.json';

// maps each unit following structure in UnitCard.tsx

const MyPath = () => {
  return (
    <YStack flex={1} mt={12} mx={2}>
      <FlatList
        data={units}
        scrollEnabled={false}
        contentContainerStyle={{ gap: 14 }}
        keyExtractor={(item) => item.unit}
        renderItem={({ item }) => <UnitCard item={item} />}
      />
    </YStack>
  );
};

export default MyPath;
