import { AntDesign, Feather } from '@expo/vector-icons';
import React from 'react';
import { Separator, XStack, YStack } from 'tamagui';

import { Container, WhiteText } from '~/tamagui.config';

// Hard coded, no links currently

const ExtraCredit = () => {
  return (
    <Container flex={1} rowGap="$4" mt={12} backgroundColor="#3a3a59" borderRadius="$5" mx={2}>
      <YStack>
        <XStack columnGap="$2" justifyContent="space-between" pt="$2" pb="$4">
          <XStack alignItems="center" columnGap="$2" flexShrink={1}>
            <AntDesign name="star" size={24} color="white" />
            <YStack px={6} rowGap="$1.5" flexShrink={1}>
              <WhiteText fontSize="$5">Custom Flashcards</WhiteText>
              <WhiteText color="#a6a6bf" fontSize="$3">
                Click here to start reviewing your custom flashcards.
              </WhiteText>
            </YStack>
          </XStack>
          <XStack alignItems="center">
            <Feather name="arrow-up-right" size={20} color="white" />
          </XStack>
        </XStack>

        <Separator borderColor="gray" borderRadius="$1" />
        <XStack columnGap="$2" py="$4" justifyContent="space-between">
          <XStack alignItems="center" columnGap="$2" flexShrink={1}>
            <AntDesign name="star" size={24} color="white" />
            <YStack px={6} rowGap="$1.5" flexShrink={1}>
              <WhiteText fontSize="$5">
                Native Materials{'  '}
                <WhiteText fontSize="$2" fontStyle="italic" color="#a6a6bf">
                  (not enabled)
                </WhiteText>
              </WhiteText>
              <WhiteText color="#a6a6bf" fontSize="$3">
                Click here to set a native materials goal.
              </WhiteText>
            </YStack>
          </XStack>
          <XStack alignItems="center">
            <Feather name="arrow-up-right" size={20} color="white" />
          </XStack>
        </XStack>

        <Separator borderColor="gray" borderRadius="$1" />
        <XStack columnGap="$2" py="$4" justifyContent="space-between">
          <XStack alignItems="center" columnGap="$2" flexShrink={1}>
            <AntDesign name="star" size={24} color="white" />
            <YStack px={6} rowGap="$1.5" flexShrink={1}>
              <WhiteText fontSize="$5">Shadowing</WhiteText>
              <WhiteText color="#a6a6bf" fontSize="$3">
                You have{' '}
                <WhiteText color="#a6a6bf" fontWeight="bold">
                  15 minutes
                </WhiteText>{' '}
                remaining.
              </WhiteText>
            </YStack>
          </XStack>
          <XStack alignItems="center">
            <Feather name="arrow-up-right" size={20} color="white" />
          </XStack>
        </XStack>

        <Separator borderColor="gray" borderRadius="$1" />
        <XStack columnGap="$2" justifyContent="space-between" pt="$4" pb="$2">
          <XStack alignItems="center" columnGap="$2" flexShrink={1}>
            <AntDesign name="star" size={24} color="white" />
            <YStack px={6} rowGap="$1.5" flexShrink={1}>
              <WhiteText fontSize="$5">
                Speaking Practice{'  '}
                <WhiteText fontSize="$2" fontStyle="italic" color="#a6a6bf">
                  (not enabled)
                </WhiteText>
              </WhiteText>
              <WhiteText color="#a6a6bf" fontSize="$3">
                Click here to set a speaking practice goal.
              </WhiteText>
            </YStack>
          </XStack>
          <XStack alignItems="center">
            <Feather name="arrow-up-right" size={20} color="white" />
          </XStack>
        </XStack>
      </YStack>
    </Container>
  );
};

export default ExtraCredit;
