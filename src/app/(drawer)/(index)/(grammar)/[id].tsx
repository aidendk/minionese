import { Link, Stack, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Button, ScrollView, View } from 'tamagui';

import units from '../../../../assets/data/units.json';

import { getUnitById } from '~/src/assets/data/currentUnit';
import { Container, WhiteText } from '~/tamagui.config';

const GrammarItem = () => {
  const { id } = useLocalSearchParams();

  const studies = getUnitById(id?.toString());

  return (
    <>
      <Stack.Screen options={{ gestureEnabled: false }} />
      <ScrollView backgroundColor="#2c2c44">
        <Container pt="$4" backgroundColor="#2c2c44" px="$3">
          <View>
            <WhiteText fontSize="$8" fontWeight="bold">
              {studies?.unitInfo.grammar.grammarTitle}
            </WhiteText>
          </View>
        </Container>
        <Container backgroundColor="#3a3a58" mx="$4">
          <View>
            <WhiteText>{studies?.unitInfo.grammar.grammarData}</WhiteText>
          </View>
        </Container>
        <Container flexDirection="row" justifyContent="space-evenly">
          <Link href="" asChild>
            <Button size="$3" backgroundColor="#f63c7e" pressStyle={{ backgroundColor: '#ac2a58' }}>
              <WhiteText fontWeight="bold" fontSize="$2">
                Home
              </WhiteText>
            </Button>
          </Link>
          <Link href={`/(drawer)/(index)/(dialogue)/${studies?.unit}`} asChild>
            <Button size="$3" backgroundColor="#f63c7e" pressStyle={{ backgroundColor: '#ac2a58' }}>
              <WhiteText fontWeight="bold" fontSize="$2">
                Continue to Dialogue
              </WhiteText>
            </Button>
          </Link>
        </Container>
      </ScrollView>
    </>
  );
};

export default GrammarItem;
