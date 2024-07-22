import React from 'react';
import { XStack, YStack, Text } from 'tamagui';

import { Container, WhiteText } from '~/tamagui.config';

const CoreStudies = () => {
  return (
    <Container
      flex={1}
      flexDirection="column"
      alignItems="center"
      borderColor="#3a3a59"
      borderRadius="$5"
      borderWidth={2}
      backgroundColor="#2c2c44"
      mx={2}
      p={0}>
      <YStack py={12} rowGap={4}>
        <WhiteText color="#a6a6bf" fontWeight="bold" fontSize="$2">
          Complete today's studies
        </WhiteText>
        <WhiteText fontSize="$2">Learn new Minionese to continue your study journey.</WhiteText>
      </YStack>
      <XStack backgroundColor="#3a3a59" p={12}>
        <YStack rowGap="$1" flex={1}>
          <XStack>
            <WhiteText fontWeight="bold" fontSize="$2">
              Tomorrow's Reviews:
            </WhiteText>
            <Text color="#59b27f" fontSize="$2">
              {'  '}
              79
            </Text>
            <WhiteText fontSize="$2"> / 100</WhiteText>
          </XStack>
          <XStack>
            <XStack>
              <WhiteText fontSize={10} fontStyle="italic" letterSpacing="$3">
                You're under your review threshold for {`\n`}tomorrow. Feel free to study new Units.
              </WhiteText>
            </XStack>
          </XStack>
        </YStack>
        <YStack alignSelf="center">
          <WhiteText textAlign="center" fontSize="$2">
            Adjust {'\n'}Threshold
          </WhiteText>
        </YStack>
      </XStack>
    </Container>
  );
};

export default CoreStudies;
