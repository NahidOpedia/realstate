import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeScreen from "../screen/HomeScreen";
import Login from "../screen/Login";
import Details from "../screen/Details";
import SavedHome from "../screen/History";
import Search from "../screen/Search/Search";
import Profile from "../screen/Profile";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Cart from "../screen/Cart";
import Chat from "../screen/Chat";
import EmptyCard from "../screen/EmptyCard";
import MyCoupons from "../screen/MyCoupons";
import MyCards from "../screen/MyCards";
import OrderSumery from "../screen/OrderSumery";
import UserProfile from "../screen/UserProfile";
import TrackOrder from "../screen/TrackOrder";
import History from "../screen/History";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

// function Mystack() {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerShown: false,
//       }}
//       initialRouteName="HomeScreen"
//     >
//       <Stack.Screen name="HomeScreen" component={MyTabs} />
//       {/* <Stack.Screen name="HomeScreen" component={CustomeDrawer} /> */}
//       <Stack.Screen name="details1" component={Details} />
//       <Stack.Screen name="saved" component={SavedHome} />
//       <Stack.Screen name="search" component={Search} />
//       {/* <Stack.Screen name="SignIn" component={SignIn} />
//     <Stack.Screen name="Register" component={Register} />
//     <Stack.Screen name="SubScreen" component={SubScreen} />
//     <Stack.Screen name="DetailsScreen" component={DetailsScreen} /> */}
//     </Stack.Navigator>
//   );
// }

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeS" component={HomeScreen} />
      <HomeStack.Screen name="details1" component={Details} />
    </HomeStack.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="HomeS"
        component={HomeStackScreen}
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
        name="History"
        component={History}
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
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Top Deals" component={Details} />
        <Drawer.Screen name="Make Product Request" component={SavedHome} />
        <Drawer.Screen name="Coupons" component={Search} />
        <Drawer.Screen name="Track  Your Order" component={TrackOrder} />
        <Drawer.Screen name="Cart" component={Cart} />
        <Drawer.Screen name="Chat" component={Chat} />
        {/* <Text>Will be removed</Text> */}
        <Drawer.Screen name="MyCoupons" component={MyCoupons} />
        <Drawer.Screen name="EmptyCard" component={EmptyCard} />
        <Drawer.Screen name="MyCards" component={MyCards} />
        <Drawer.Screen name="OrderSumery" component={OrderSumery} />
        <Drawer.Screen name="Profile" component={UserProfile} />
      </Drawer.Navigator>
      {/* </Drawer.Navigator> */}
    </NavigationContainer>
  );
};

export default AppNavigation;
