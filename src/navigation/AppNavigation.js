import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeScreen from "../screen/HomeScreen";
import Details from "../screen/Details";
import SavedHome from "../screen/SavedHome";
import Search from "../screen/Search/Search";
import Profile from "../screen/Profile";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{}}>
      <Tab.Screen
        name="HomeS"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            // <MaterialCommunityIcons name="bell" color={color} size={size} />
            <AntDesign name="home" color={color} size={size} />
          ),

          // tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ color, size }) => (
            // <MaterialCommunityIcons name="bell" color={color} size={size} />
            <Ionicons name="search-outline" color={color} size={size} />
          ),
          // tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Save"
        component={SavedHome}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="profile" color={color} size={size} />
          ),
          // tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" color={color} size={size} />
          ),
          // tabBarBadge: 3,
        }}
      />
    </Tab.Navigator>
  );
}

const AppNavigation = () => {
  return (
    <NavigationContainer>
      {/* <Drawer.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="HomeScreen"
      > */}

      <Drawer.Navigator
        screenOptions={{ headerShown: false }}
        // initialRouteName="HomeScreen"
      >
        <Drawer.Screen name="All Category" component={MyTabs} />
        <Drawer.Screen name="Top Deals" component={Details} />
        <Drawer.Screen name="Make Product Request" component={SavedHome} />
        <Drawer.Screen name="Coupons" component={Search} />
      </Drawer.Navigator>
      {/* </Drawer.Navigator> */}
    </NavigationContainer>
  );
};

export default AppNavigation;
