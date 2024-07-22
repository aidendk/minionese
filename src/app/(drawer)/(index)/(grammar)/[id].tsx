import { Link, Stack, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Button, ScrollView, View } from 'tamagui';

import { getUnitById } from '~/src/assets/data/currentUnit';
import { Container, WhiteText } from '~/tamagui.config';

const GrammarItem = () => {
  // this looks for the id of this page
  const { id } = useLocalSearchParams();

  // this compares the id of the page to the unit number.
  // if the id and unit number match, then the data for that unit is returned.
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
          <WhiteText letterSpacing="$2" fontSize="$5">
            {studies?.unitInfo.grammar.grammarData}
          </WhiteText>
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
