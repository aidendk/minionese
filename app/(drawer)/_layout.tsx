import { Ionicons, MaterialIcons, AntDesign } from '@expo/vector-icons';
import { DrawerToggleButton } from '@react-navigation/drawer';
import { Link } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import { Pressable } from 'react-native';
import { Button, View, XStack } from 'tamagui';

import { WhiteText } from '~/tamagui.config';

const DrawerLayout = () => (
  <Drawer
    screenOptions={{
      headerStyle: { backgroundColor: '#3a3a59' },
      drawerPosition: 'right',
      drawerStyle: { backgroundColor: '#3a3a59' },
      headerShadowVisible: false,
      headerLeft: () => (
        <Link href="/" style={{ paddingLeft: 16 }}>
          <WhiteText fontWeight="bold" fontSize={18}>
            Minionese 
          </WhiteText>
        </Link>
      ),
      headerRight: () => (
        <XStack flex={1} alignItems="center">
          <Button transparent disabled size="$3">
            <AntDesign name="search1" color="white" style={{ fontSize: 18 }} />
          </Button>
          <DrawerToggleButton tintColor="#fff" />
        </XStack>
      ),
      swipeEnabled: false,
    }}>
    <Drawer.Screen
      name="index"
      options={{
        headerTitle: '',
        headerTitleStyle: { color: 'white' },
        drawerLabelStyle: { color: 'white' },
        drawerLabel: 'Home',
        drawerIcon: ({ size, color }) => <Ionicons name="home-outline" size={size} color="white" />,
      }}
    />
    <Drawer.Screen
      name="(flashcards)"
      options={{
        headerTitle: 'Flashcards',
        headerTitleStyle: { color: 'white' },
        drawerLabelStyle: { color: 'white' },
        drawerLabel: 'Flashcards',
        drawerIcon: ({ size, color }) => (
          <MaterialIcons name="border-bottom" size={size} color="white" />
        ),
        // headerRight: () => (
        //   <Link href="/modal" asChild>
        //     <HeaderButton />
        //   </Link>
        // ),
      }}
    />
  </Drawer>
);

export default DrawerLayout;
