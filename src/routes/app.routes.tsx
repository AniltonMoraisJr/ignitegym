import React from "react";
import { Platform } from "react-native";
import { useTheme } from "native-base";
import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";

import HomeSvg from "@assets/home.svg";
import HistorySvg from "@assets/history.svg";
import ProfileeSvg from "@assets/profile.svg";

import Home from "@screens/Home";
import Profile from "@screens/Profile";
import Exercise from "@screens/Exercise";
import History from "@screens/History";

type AppRoutes = {
  home: undefined;
  exercise: undefined;
  profile: undefined;
  history: undefined;
};

export type AppNavigationRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

const AppRoutes: React.FC = () => {
  const { sizes, colors } = useTheme();
  const iconSize = sizes[6];
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.green[500],
        tabBarInactiveTintColor: colors.gray[200],
        tabBarStyle: {
          backgroundColor: colors.gray[600],
          borderTopWidth: 0,
          height: Platform.OS === "android" ? "auto" : 96,
          paddingBottom: sizes[10],
          paddingTop: sizes[6],
        },
      }}
    >
      <Screen
        name="home"
        options={{
          tabBarIcon: ({ color }) => (
            <HomeSvg fill={color} width={iconSize} height={iconSize} />
          ),
        }}
        component={Home}
      />
      <Screen
        name="exercise"
        options={{
          tabBarButton: () => null,
        }}
        component={Exercise}
      />
      <Screen
        name="history"
        options={{
          tabBarIcon: ({ color }) => (
            <HistorySvg fill={color} width={iconSize} height={iconSize} />
          ),
        }}
        component={History}
      />
      <Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => (
            <ProfileeSvg fill={color} width={iconSize} height={iconSize} />
          ),
        }}
        component={Profile}
      />
    </Navigator>
  );
};

export default AppRoutes;
