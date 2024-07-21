import { Link, Stack, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform } from 'react-native';
import { View, Text, ScrollView, XStack } from 'tamagui';

import { Container, WhiteText } from '~/tamagui.config';

export default function StatsModal() {
  return (
    <ScrollView backgroundColor="#2c2c44">
      <Container pt="$4" backgroundColor="#2c2c44" px="$3">
        <View rowGap="$1">
          <WhiteText fontSize="$8" fontWeight="bold">
            Current Stats
          </WhiteText>
        </View>

        <Container flex={1} rowGap="$4" mt={12} backgroundColor="#3a3a59" borderRadius="$5" mx={2}>
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
        </Container>

        <Container flex={1} rowGap="$4" mt={12} backgroundColor="#3a3a59" borderRadius="$5" mx={2}>
          <XStack>
            <View>
              <WhiteText fontSize="$5" fontWeight="bold">
                Flashcard Heatmap
              </WhiteText>
            </View>
          </XStack>
        </Container>
      </Container>
    </ScrollView>
  );
}
