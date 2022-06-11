import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useWindowDimensions } from "react-native";

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
import TopDeal from "../screen/TopDeal";
import CustomeDrawer from "../component/CustomeDrawer";

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="details1" component={Details} />
    </HomeStack.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBarOptions={{
        activeTintColor: "#e91e63",
        labelStyle: {
          fontSize: 12,
        },
        style: {
          backgroundColor: "green",
        },
        showLabel: true,
        style: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "red",
          borderRadius: 15,
          height: 90,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
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
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="profile" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const AppNavigation = () => {
  const dimensions = useWindowDimensions();
  const isLargeScreen = dimensions.width >= 768;
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomeDrawer {...props} />}
        screenOptions={{
          drawerStyle: isLargeScreen ? null : { width: "100%" },
          headerShown: false,
          drawerActiveBackgroundColor: "#c2253a",
          drawerActiveTintColor: "#fff",
          drawerInactiveTintColor: "#333",
          drawerLabelStyle: {
            marginLeft: -15,
            // fontFamily: "Roboto-Medium",
            fontSize: 15,
            width: 340,
          },
        }}
        // initialRouteName="HomeScreen"
      >
        {/* <Drawer.Screen
          name="Home"
          component={MyTabs}
          options={{
            drawerIcon: ({}) => (
              <Ionicons
                name="chatbox-ellipses-outline"
                size={22}
                color="#fff"
              />
            ),
          }}
        /> */}
        <Drawer.Screen
          name="All Category"
          component={MyTabs}
          options={{
            drawerIcon: ({}) => (
              <Ionicons
                name="chatbox-ellipses-outline"
                size={22}
                color="#fff"
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Login"
          component={Login}
          options={{
            drawerIcon: ({}) => (
              <Ionicons
                name="chatbox-ellipses-outline"
                size={22}
                color="#fff"
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Top Deals"
          component={TopDeal}
          options={{
            drawerIcon: ({}) => (
              <Ionicons
                name="chatbox-ellipses-outline"
                size={22}
                color="#fff"
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Make Product Request"
          component={SavedHome}
          options={{
            drawerIcon: ({}) => (
              <Ionicons
                name="chatbox-ellipses-outline"
                size={22}
                color="#fff"
              />
            ),
          }}
        />
        {/* <Drawer.Screen
          name="Coupons"
          component={Search}
          options={{
            drawerIcon: ({}) => (
              <Ionicons
                name="chatbox-ellipses-outline"
                size={22}
                color="#fff"
              />
            ),
          }}
        /> */}
        <Drawer.Screen
          name="Track  Your Order"
          component={TrackOrder}
          options={{
            drawerIcon: ({}) => (
              <Ionicons
                name="chatbox-ellipses-outline"
                size={22}
                color="#fff"
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Cart"
          component={Cart}
          options={{
            drawerIcon: ({}) => (
              <Ionicons
                name="chatbox-ellipses-outline"
                size={22}
                color="#fff"
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Chat"
          component={Chat}
          options={{
            drawerIcon: ({}) => (
              <Ionicons
                name="chatbox-ellipses-outline"
                size={22}
                color="#fff"
              />
            ),
          }}
        />
        {/* <Text>Will be removed</Text> */}
        <Drawer.Screen
          name="MyCoupons"
          component={MyCoupons}
          options={{
            drawerIcon: ({}) => (
              <Ionicons
                name="chatbox-ellipses-outline"
                size={22}
                color="#fff"
              />
            ),
          }}
        />
        <Drawer.Screen
          name="EmptyCard"
          component={EmptyCard}
          options={{
            drawerIcon: ({}) => (
              <Ionicons
                name="chatbox-ellipses-outline"
                size={22}
                color="#fff"
              />
            ),
          }}
        />
        <Drawer.Screen
          name="MyCards"
          component={MyCards}
          options={{
            drawerIcon: ({}) => (
              <Ionicons
                name="chatbox-ellipses-outline"
                size={22}
                color="#fff"
              />
            ),
          }}
        />
        <Drawer.Screen
          name="OrderSumery"
          component={OrderSumery}
          options={{
            drawerIcon: ({}) => (
              <Ionicons
                name="chatbox-ellipses-outline"
                size={22}
                color="#fff"
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Profile"
          component={UserProfile}
          options={{
            drawerIcon: ({}) => (
              <Ionicons
                name="chatbox-ellipses-outline"
                size={22}
                color="#fff"
              />
            ),
          }}
        />
      </Drawer.Navigator>
      {/* </Drawer.Navigator> */}
    </NavigationContainer>
  );
};

export default AppNavigation;
