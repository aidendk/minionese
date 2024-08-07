import React from 'react';
import { XStack, YStack, View, Separator, ScrollView } from 'tamagui';

import { Container, WhiteText } from '~/tamagui.config';

// Static for now

const Activity = () => {
  return (
    <Container flex={1} rowGap="$4" mt={12} backgroundColor="#3a3a59" borderRadius="$5" mx={2}>
      <YStack px="$2">
        <View pt="$2">
          <WhiteText fontWeight="bold">Recently Studied</WhiteText>
        </View>
        <ScrollView maxHeight={250} my="$2">
          <XStack columnGap="$2" py="$4" justifyContent="space-between">
            <XStack alignItems="center" columnGap="$3" flexShrink={1}>
              <View
                backgroundColor="#66cc91"
                p="$1.5"
                borderRadius="$1"
                alignItems="center"
                width={75}>
                <WhiteText fontSize={10} fontWeight="bold">
                  Dialogue
                </WhiteText>
              </View>
              <YStack flexShrink={1}>
                <WhiteText fontSize="$1">Minions conversing with each other.</WhiteText>
              </YStack>
            </XStack>
            <XStack alignItems="center">
              <WhiteText fontSize="$1" color="#a6a6bf" fontStyle="italic">
                2 hours ago
              </WhiteText>
            </XStack>
          </XStack>
          <Separator borderColor="gray" borderWidth={0.5} />
          <XStack columnGap="$2" py="$4" justifyContent="space-between">
            <XStack alignItems="center" columnGap="$3">
              <View
                backgroundColor="#375e97"
                p="$1.5"
                borderRadius="$1"
                alignItems="center"
                width={75}>
                <WhiteText fontSize={10} fontWeight="bold">
                  Flashcard
                </WhiteText>
              </View>
              <YStack flexShrink={1}>
                <WhiteText fontSize="$1">You reviewed 96 flashcards.</WhiteText>
              </YStack>
            </XStack>
            <XStack alignItems="center">
              <WhiteText fontSize="$1" color="#a6a6bf" fontStyle="italic">
                2 hours ago
              </WhiteText>
            </XStack>
          </XStack>
          <Separator borderColor="gray" borderWidth={0.5} />
          <XStack columnGap="$2" py="$4" justifyContent="space-between">
            <XStack
              alignItems="center"
              columnGap="$3"
              flexShrink={1}
              justifyContent="space-between">
              <View
                backgroundColor="#e5428b"
                p="$1.5"
                borderRadius="$1"
                alignItems="center"
                width={75}>
                <WhiteText fontSize={10} fontWeight="bold">
                  Lesson
                </WhiteText>
              </View>
              <YStack flexShrink={1}>
                <WhiteText fontSize="$1">An introduction to Minionese.</WhiteText>
              </YStack>
            </XStack>
            <XStack alignItems="center">
              <WhiteText fontSize="$1" color="#a6a6bf" fontStyle="italic">
                2 hours ago
              </WhiteText>
            </XStack>
          </XStack>
          <Separator borderColor="gray" borderWidth={0.5} />
        </ScrollView>
      </YStack>
    </Container>
  );
};

export default Activity;
