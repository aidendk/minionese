import { Stack, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { ScrollView, View, Text } from 'tamagui';

import units from '../../../../assets/data/units.json';

import { Container, WhiteText } from '~/tamagui.config';

const GrammarItem = () => {
  const { id } = useLocalSearchParams();

  function getUnit() {
    const json = units;
    for (let i = 0; i < json.length; i++) {
      const unit = json[i];
      const item = id;
      if (item?.toString() !== unit.unit.toString()) {
        continue;
      } else if (item.toString() == unit.unit.toString()) {
        return unit;
      }
    }
  }

  const studies = getUnit();

  return (
    <>
      <Stack.Screen options={{}} />
      <ScrollView backgroundColor="#2c2c44">
        <Container pt="$4" backgroundColor="#2c2c44" px="$3">
          <View>
            <WhiteText fontSize="$8" fontWeight="bold">
              {studies?.unitInfo.grammar.grammarTitle}
            </WhiteText>
          </View>
        </Container>
      </ScrollView>
    </>
  );
};

export default GrammarItem;
