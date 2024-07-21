import { Link, useRouter } from 'expo-router';
import React from 'react';
import { Pressable } from 'react-native';
import { YStack, View, Text, XStack, Button } from 'tamagui';

import { Container, WhiteText } from '~/tamagui.config';

// hard coded for now, could be updated when times / specific users added

const StatsCard = () => {
  return (
    <Container flex={1} rowGap="$4" mt={12} backgroundColor="#3a3a59" borderRadius="$5" mx={2}>
      <YStack alignItems="center">
        <View py="$4" flexShrink={1} alignItems="center" rowGap="$2">
          <WhiteText fontSize="$6" fontWeight="bold">
            537
          </WhiteText>
          <WhiteText fontSize={10} color="#a6a6bf" fontWeight="bold">
            Days Studied (Freeze Ray)
          </WhiteText>
        </View>
        <View py="$4" flexShrink={1} alignItems="center" rowGap="$2">
          <XStack columnGap="$3">
            <WhiteText fontSize="$6" fontWeight="bold">
              12<Text color="#a6a6bf">d</Text>
            </WhiteText>
            <WhiteText fontSize="$6" fontWeight="bold">
              23<Text color="#a6a6bf">h</Text>
            </WhiteText>
            <WhiteText fontSize="$6" fontWeight="bold">
              31<Text color="#a6a6bf">m</Text>
            </WhiteText>
          </XStack>
          <WhiteText fontSize={10} color="#a6a6bf" fontWeight="bold">
            Time Spent
          </WhiteText>
        </View>
        <View py="$4" flexShrink={1} alignItems="center" rowGap="$2">
          <XStack columnGap="$3">
            <WhiteText fontSize="$6" fontWeight="bold">
              34<Text color="#a6a6bf">m</Text>
            </WhiteText>
            <WhiteText fontSize="$6" fontWeight="bold">
              48<Text color="#a6a6bf">s</Text>
            </WhiteText>
          </XStack>
          <WhiteText fontSize={10} color="#a6a6bf" fontWeight="bold">
            Average Per Day
          </WhiteText>
        </View>
        <View py="$4" flexShrink={1} alignItems="center" rowGap="$2">
          <Link href="/(drawer)/(index)/StatsModal" asChild>
            <Button size="$3" backgroundColor="#f63c7e" pressStyle={{ backgroundColor: '#ac2a58' }}>
              <WhiteText fontWeight="bold" fontSize="$2">
                More Stats
              </WhiteText>
            </Button>
          </Link>
        </View>
      </YStack>
    </Container>
  );
};

export default StatsCard;
