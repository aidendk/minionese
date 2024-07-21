import { Link, Stack, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, View, Text, YStack, Button, XStack } from 'tamagui';

import units from '../../../../assets/data/units.json';

import { getUnitById } from '~/src/assets/data/currentUnit';
import { Container, WhiteText } from '~/tamagui.config';

const DialogueItem = () => {
  const [showTranslation, setShowTranslation] = useState(false);

  const { id } = useLocalSearchParams();

  const studies = getUnitById(id?.toString());
  return (
    <>
      <Stack.Screen options={{ gestureEnabled: false }} />
      <ScrollView backgroundColor="#2c2c44">
        <Container pt="$4" backgroundColor="#2c2c44" px="$3">
          <WhiteText fontSize="$8" fontWeight="bold">
            {studies?.unitInfo.dialogue.newDialogue}
          </WhiteText>
        </Container>
        <Container backgroundColor="#3a3a58" px="$4">
          <YStack>
            {studies?.unitInfo.dialogue.dialogueData?.map((dial) => {
              return (
                <YStack rowGap="$2" py="$3" key={dial.sentence}>
                  <WhiteText fontWeight="bold" pl="$1" fontSize="$5">
                    {dial.speaker}
                  </WhiteText>
                  <View backgroundColor="#27273a" p="$3" my="$1" borderRadius="$3">
                    <WhiteText fontSize="$5">{dial.sentence}</WhiteText>
                    {showTranslation && <WhiteText pt="$2">{dial.translation}</WhiteText>}
                  </View>
                </YStack>
              );
            })}
          </YStack>
        </Container>
        <Container flexDirection="row" justifyContent="space-evenly">
          <Link href="" asChild>
            <Button size="$3" backgroundColor="#f63c7e" pressStyle={{ backgroundColor: '#ac2a58' }}>
              <WhiteText fontWeight="bold" fontSize="$2">
                Home
              </WhiteText>
            </Button>
          </Link>
          <Button
            size="$3"
            backgroundColor="#f63c7e"
            pressStyle={{ backgroundColor: '#ac2a58' }}
            onPress={() => setShowTranslation((value) => !value)}>
            <WhiteText fontWeight="bold" fontSize="$2">
              Show Translation
            </WhiteText>
          </Button>
        </Container>
      </ScrollView>
    </>
  );
};

export default DialogueItem;
