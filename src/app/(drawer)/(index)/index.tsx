import { Link, Stack } from 'expo-router';
import { Separator, Button, View, ScrollView } from 'tamagui';

import Activity from '../../../components/Activity';
import CoreStudies from '../../../components/CoreStudies';
import ExtraCredit from '../../../components/ExtraCredit';
import MyPath from '../../../components/MyPath';
import StatsCard from '../../../components/StatsCard';
import TodayStudies from '../../../components/TodayStudies';

import { getCurrentUnit } from '~/src/assets/data/currentUnit';
import { Container, WhiteText } from '~/tamagui.config';

// home screen, this is where all components are put together to display full page content

const Home = () => {
  const studies = getCurrentUnit();

  return (
    <>
      <Stack.Screen />
      <ScrollView backgroundColor="#2c2c44">
        <Container pt="$6" backgroundColor="#2c2c44" px="$3">
          <View rowGap="$1">
            <WhiteText color="#a6a6bf" fontWeight="bold">
              {new Date().toDateString()}
            </WhiteText>
            <WhiteText fontSize="$9" fontWeight="bold">
              Today's Studies
            </WhiteText>
          </View>
          <View mt="$3">
            {/* This redirects to the [id].tsx for grammar if it isn't completed, then dialogue if dialogue isn't completed. It will not link to anything if both are completed. It uses the current unit as a href marker*/}
            <Link
              href={`${studies?.unitInfo.grammar.grammarCompleted ? (studies?.unitInfo.dialogue.dialogueCompleted ? '' : `/(drawer)/(index)/(dialogue)/${studies?.unit}`) : `/(drawer)/(index)/(grammar)/${studies?.unit}`}`}
              asChild>
              <Button
                size="$3"
                backgroundColor="#f63c7e"
                pressStyle={{ backgroundColor: '#ac2a58' }}>
                <WhiteText fontWeight="bold" fontSize="$2">
                  Study Now
                </WhiteText>
              </Button>
            </Link>
          </View>
          <Separator borderColor="gray" borderRadius="$1" marginVertical={15} />

          <TodayStudies />

          <CoreStudies />
          <View pt={24}>
            <WhiteText fontWeight="bold" fontSize="$5">
              Extra Credit
            </WhiteText>
          </View>
          <ExtraCredit />
          <View pt={24}>
            <WhiteText fontWeight="bold" fontSize="$5">
              Activity
            </WhiteText>
          </View>
          <Activity />
          <View pt={24}>
            <WhiteText fontWeight="bold" fontSize="$5">
              Stats
            </WhiteText>
          </View>
          <StatsCard />
          <View pt={24}>
            <WhiteText fontWeight="bold" fontSize="$5">
              My Path
            </WhiteText>
          </View>
          <MyPath />
        </Container>
      </ScrollView>
    </>
  );
};

export default Home;
