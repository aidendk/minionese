import {
  AntDesign,
  Entypo,
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Pressable } from 'react-native';
import { Separator, XStack, View, YStack, Button } from 'tamagui';

import units from '../assets/data/units.json';

import { Container, WhiteText } from '~/tamagui.config';

// TODO: clean up this file, make separate components so this file less confusing

const TodayStudies = () => {
  // this state opens / closes accordion with grammar, kanji, vocab, and dialogue inside. activated by clicking on the area with "PHASE TWO" and "Unit 228"
  const [isUnitInfoOpen, setIsUnitInfoOpen] = useState(true);
  // opens / closes lesson summary for grammar
  const [grammarSummary, setGrammarSummary] = useState(false);
  // opens / closes vocabulary list for unit
  const [vocabSummary, setVocabSummary] = useState(false);
  // opens / closes dialogue for unit
  const [dialogueSummary, setDialogueSummary] = useState(false);

  // parses the json file for units, returns the first unit that sequentially has the "unitCompleted" value as false

  function getUnit() {
    const json = units;
    for (let i = 0; i < json.length; i++) {
      const unit = json[i];
      if (unit.unitCompleted) {
        continue;
      } else if (!unit.unitCompleted) {
        return unit;
      }
    }
  }

  const router = useRouter();

  const studies = getUnit();

  // edge case - what if all units are done?

  const Divider = () => {
    return (
      <View alignSelf="flex-start" borderColor="$gray9" height="$1" pl="$3.5">
        <Separator alignSelf="stretch" borderWidth="$0.75" borderColor="$gray10" vertical />
      </View>
    );
  };
  const SmallDivider = () => {
    return (
      <View alignSelf="flex-start" borderColor="$gray9" height={12} pl="$3.5" mt="$2">
        <Separator alignSelf="stretch" borderWidth="$0.75" borderColor="$gray10" vertical />
      </View>
    );
  };

  return (
    <Container flex={1} alignItems="center" rowGap="$2">
      <XStack alignItems="center" columnGap="$4">
        <AntDesign name="checkcircle" color="#66cc91" size={32} />
        <YStack flex={1}>
          <WhiteText fontSize="$2">Reviews completed and Days Studied updated</WhiteText>
        </YStack>
      </XStack>
      <Divider />

      {/* PHASE + UNIT NUMBER */}
      <Pressable
        style={{ flex: 1, alignItems: 'center' }}
        onPress={() => setIsUnitInfoOpen((value) => !value)}>
        <XStack alignItems="center" columnGap="$4">
          <FontAwesome5
            name="dot-circle"
            color={studies?.unitCompleted ? '#66cc91' : '#9d87b5'}
            size={32}
          />
          <YStack flex={1}>
            <WhiteText fontWeight="bold" fontSize={9} color="#a6a6bf">
              PHASE {studies?.phase.toUpperCase()}
            </WhiteText>
            <WhiteText fontSize="$5" fontWeight="bold">
              Unit {studies?.unit}
            </WhiteText>
          </YStack>
        </XStack>
      </Pressable>

      <Divider />
      {isUnitInfoOpen && (
        <>
          {/* GRAMMAR */}
          <Pressable
            style={{ flex: 1, alignItems: 'center' }}
            onPress={() => setGrammarSummary((value) => !value)}>
            <XStack alignItems="center" columnGap="$4">
              <Entypo
                name="book"
                size={32}
                color={studies?.unitInfo.grammar.grammarCompleted ? '#66cc91' : '#9d87b5'}
              />
              <YStack flex={1}>
                <WhiteText fontWeight="bold" fontSize={9}>
                  GRAMMAR
                </WhiteText>
                <WhiteText fontSize="$4">{studies?.unitInfo.grammar.grammarTitle}</WhiteText>
              </YStack>
            </XStack>
          </Pressable>
          {grammarSummary && (
            <>
              {/* GRAMMAR SUMMARY */}
              <SmallDivider />
              <XStack flex={1} alignSelf="flex-start">
                <YStack>
                  <WhiteText fontWeight="bold" fontSize={9} color="#a6a6bf" pt="$3" pb="$2">
                    LESSON SUMMARY
                  </WhiteText>
                  <View backgroundColor="#27273a" p="$3" borderRadius="$3">
                    <WhiteText>{studies?.unitInfo.grammar.grammarSummary}</WhiteText>
                  </View>
                </YStack>
              </XStack>
              <XStack>
                <YStack flex={1}>
                  <XStack pt="$2" pb="$3" alignSelf="flex-end">
                    <Button
                      size="$2"
                      backgroundColor="#f63c7e"
                      pressStyle={{ backgroundColor: '#ac2a58' }}
                      onPress={() =>
                        router.replace(`/(drawer)/(index)/(grammar)/${studies?.unit}`)
                      }>
                      <WhiteText fontSize="$1">View Lesson {`->`}</WhiteText>
                    </Button>
                  </XStack>
                  <Separator borderColor="gray" borderWidth={1} />
                </YStack>
              </XStack>
            </>
          )}
          <Divider />

          {/* VOCABULARY */}
          <Pressable
            style={{ flex: 1, alignItems: 'center' }}
            onPress={() => setVocabSummary((value) => !value)}>
            <XStack alignItems="center" columnGap="$4">
              <MaterialCommunityIcons
                name="format-letter-case"
                size={32}
                color={studies?.unitInfo.vocab.vocabCompleted ? '#66cc91' : '#9d87b5'}
              />
              <YStack flex={1}>
                <WhiteText fontWeight="bold" fontSize={9}>
                  VOCABULARY
                </WhiteText>
                <WhiteText fontSize="$4">
                  {studies?.unitInfo.vocab.vocabSummary?.length} new words
                </WhiteText>
              </YStack>
            </XStack>
          </Pressable>
          {vocabSummary && (
            <>
              {/* VOCABULARY LIST */}
              <SmallDivider />
              <XStack alignSelf="flex-start">
                <YStack flex={1}>
                  {studies?.unitInfo.vocab.vocabSummary?.map((vocab) => {
                    return (
                      <YStack rowGap="$2" py="$3" key={vocab.word}>
                        <View backgroundColor="#27273a" p="$3" my="$1" borderRadius="$3">
                          <WhiteText fontSize="$5">{vocab.word}</WhiteText>
                        </View>
                        <WhiteText pl="$3">{vocab.translation}</WhiteText>
                      </YStack>
                    );
                  })}
                </YStack>
              </XStack>
            </>
          )}
          <Divider />

          {/* DIALOGUE */}
          <Pressable
            style={{ flex: 1, alignItems: 'center' }}
            onPress={() => setDialogueSummary((value) => !value)}>
            <XStack alignItems="center" columnGap="$4">
              <MaterialCommunityIcons
                name="dots-horizontal-circle"
                size={32}
                color={studies?.unitInfo.dialogue.dialogueCompleted ? '#66cc91' : '#9d87b5'}
              />
              <YStack flex={1}>
                <WhiteText fontWeight="bold" fontSize={9}>
                  DIALOGUE
                </WhiteText>
                <WhiteText fontSize="$4">{studies?.unitInfo.dialogue.newDialogue}</WhiteText>
              </YStack>
            </XStack>
          </Pressable>
          {dialogueSummary && (
            <>
              {/* DIALOGUE SUMMARY */}
              <SmallDivider />
              <XStack>
                <YStack flex={1}>
                  <XStack py="$3">
                    <Button
                      size="$2"
                      backgroundColor="#f63c7e"
                      pressStyle={{ backgroundColor: '#ac2a58' }}
                      onPress={() =>
                        router.replace(`(drawer)/(index)/(dialogue)/${studies?.unit}`)
                      }>
                      <WhiteText fontSize="$1">View Dialogue {'->'}</WhiteText>
                    </Button>
                  </XStack>
                  <Separator borderColor="gray" borderWidth={1} />
                </YStack>
              </XStack>
            </>
          )}
          <Divider />
        </>
      )}
    </Container>
  );
};

export default TodayStudies;
