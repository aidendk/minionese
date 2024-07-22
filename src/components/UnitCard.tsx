import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { Pressable } from 'react-native';
import { Text, View, XStack, YStack, Separator } from 'tamagui';

import { UnitCardProps } from '~/src/app/types/UnitDataTypes';
import { WhiteText } from '~/tamagui.config';

const UnitCard = ({ item }: { item: UnitCardProps }) => {
  // state that checks if card is expanded or not, if expanded will show the grammar lesson title and the dialogue title
  const [cardOpen, setCardOpen] = useState(false);

  const SmallDivider = () => {
    return (
      <View alignSelf="flex-start" borderColor="$gray9" height={12} pl="$3" my="$2">
        <Separator alignSelf="stretch" borderWidth="$0.75" borderColor="$gray10" vertical />
      </View>
    );
  };
  return (
    <YStack backgroundColor="#3a3a59" borderRadius="$3">
      <Pressable onPress={() => setCardOpen((value) => !value)}>
        <XStack p="$3" justifyContent="space-between" alignItems="center">
          <XStack alignItems="center" columnGap="$3">
            <Text
              color={item.unitCompleted ? '#66cc91' : '#a6a6bf'}
              fontWeight="bold"
              fontSize="$5">
              Unit {item.unit}
            </Text>
            {!cardOpen && (
              <>
                <Entypo
                  name="book"
                  size={24}
                  color={item.unitInfo.grammar.grammarCompleted ? '#66cc91' : '#9d87b5'}
                />
                <MaterialCommunityIcons
                  name="dots-horizontal-circle"
                  size={24}
                  color={item.unitInfo.dialogue.dialogueCompleted ? '#66cc91' : '#9d87b5'}
                />
              </>
            )}
          </XStack>
          <XStack>
            <Text
              color={item.unitCompleted ? '#66cc91' : '#a6a6bf'}
              fontWeight="bold"
              fontSize={10}>
              {item.unitCompleted
                ? 'Completed'
                : item.unitInfo.grammar.grammarCompleted && item.unitCompleted === false
                  ? 'In Progress'
                  : 'Upcoming'}
            </Text>
          </XStack>
        </XStack>
      </Pressable>
      {cardOpen && (
        <YStack p="$3">
          <Pressable style={{ flex: 1, alignItems: 'center' }}>
            <XStack alignItems="center" columnGap="$4">
              <Entypo
                name="book"
                size={24}
                color={item.unitInfo.grammar.grammarCompleted ? '#66cc91' : '#9d87b5'}
              />
              <YStack flex={1}>
                {/* This redirects to the [id].tsx for grammar and uses the current unit as a href marker*/}
                <Link href={`/(drawer)/(index)/(grammar)/${item.unit}`} asChild>
                  <WhiteText
                    fontSize="$4"
                    fontWeight="bold"
                    maxWidth="$20"
                    color={item.unitInfo.grammar.grammarCompleted ? '#66cc91' : '#fff'}
                    pressStyle={{ color: '#f63c7e' }}>
                    {item.unitInfo.grammar.grammarTitle}
                  </WhiteText>
                </Link>
              </YStack>
            </XStack>
          </Pressable>

          <SmallDivider />
          <Pressable style={{ flex: 1, alignItems: 'flex-start' }}>
            <XStack alignItems="center" columnGap="$4">
              <MaterialCommunityIcons
                name="dots-horizontal-circle"
                size={24}
                color={item.unitInfo.dialogue.dialogueCompleted ? '#66cc91' : '#9d87b5'}
              />

              {/* This redirects to the [id].tsx for dialogue and uses the current unit as a href marker*/}
              <Link href={`/(drawer)/(index)/(dialogue)/${item.unit}`} asChild>
                <WhiteText
                  fontSize="$4"
                  fontWeight="bold"
                  maxWidth="$20"
                  color={item.unitInfo.dialogue.dialogueCompleted ? '#66cc91' : '#fff'}
                  pressStyle={{ color: '#f63c7e' }}>
                  {item.unitInfo.dialogue.newDialogue}
                </WhiteText>
              </Link>
            </XStack>
          </Pressable>
        </YStack>
      )}
    </YStack>
  );
};

export default UnitCard;
