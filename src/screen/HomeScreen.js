import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  VStack,
  FlatList,
  View,
  // ScrollView,
} from "native-base";

import { TextInput, Button, TouchableOpacity } from "react-native";

import { ScrollView, ImageBackground, Image } from "react-native";

import { Dimensions, StyleSheet } from "react-native";
import AppScreen from "../component/AppScreen";
import MenuCard from "../component/MenuCard";
import Recomandation from "../component/Recomandation";
import reomData from "../data/recomandation";
import Login from "./Login";

import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import ProductsList from "../component/ProductsList";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const menuData = [
  {
    id: "12",
    title: "all",
    image: "https://illustoon.com/photo/3831.png",
  },
  {
    id: "15",
    title: "Baby Food",
    image: "https://illustoon.com/photo/3831.png",
  },
  { id: "158", title: "Diaper", image: "https://illustoon.com/photo/3831.png" },
  {
    id: "112",
    title: "Dry Food's",
    image: "https://illustoon.com/photo/3831.png",
  },
];

const HomeScreen = ({ navigation }) => {
  return (
    <AppScreen>
      <View>
        <View style={styles.headerview}>
          <Text style={styles.location}>
            <SimpleLineIcons name="location-pin" color="#000" size={20} /> Dhaka
          </Text>
          <Image
            style={styles.logo}
            source={require("../assets/Npic/logo.png")}
          />
        </View>
        <ScrollView
          style={styles.scrollView}
          showsHorizontalScrollIndicator={false}
        >
          {/* Category */}

          <FlatList
            horizontal
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              justifyContent: "center",
              alignItems: "center",
            }}
            data={menuData}
            keyExtractor={(item) => item.id.toString()}
            // numColumns={2}
            renderItem={({ item }) => <MenuCard data={item} />}
          />
          {/* Category */}

          {/* Banner  */}

          <View style={styles.banner}>
            <ImageBackground
              source={require("../assets/Npic/1650776948.jpg")}
              imageStyle={{ borderRadius: 24 }}
              style={styles.imageshaow}
            >
              <View style={styles.backText}>
                <Text
                  style={{
                    fontSize: 22,
                    fontWeight: "bold",
                    color: "#FFFFFF",
                  }}
                >
                  Hill Rose II
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    color: "#FFFFFF",
                    fontWeight: "bold",
                  }}
                >
                  Sukabumi, West Java
                </Text>
              </View>
            </ImageBackground>
          </View>

          {/* Recomandation */}
          <Text
            style={{
              paddingHorizontal: 20,
              paddingVertical: 10,
              fontSize: 16,
              fontWeight: "bold",
              color: "#666",
            }}
          >
            Recomandations
          </Text>
          <FlatList
            horizontal
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              justifyContent: "center",
              alignItems: "center",
            }}
            data={reomData}
            // ListHeaderComponent={() => (
            //   <HeaderComponent navigation={navigation} />
            // )}
            // ListFooterComponent={() => <FooterComponent />}
            keyExtractor={(item) => item.id.toString()}
            // numColumns={2}
            renderItem={({ item }) => <Recomandation data={item} />}
          />
          {/* Recomandation */}

          {/* chocklet */}
          <Text
            style={{
              paddingHorizontal: 20,
              paddingVertical: 10,
              fontSize: 16,
              fontWeight: "bold",
              color: "#666",
            }}
          >
            Chocklet
          </Text>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={reomData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <ProductsList data={item} />}
          />
          {/* chocklet */}

          {/* Groceries */}
          <Text
            style={{
              paddingHorizontal: 20,
              paddingVertical: 10,
              fontSize: 16,
              fontWeight: "bold",
              color: "#666",
            }}
          >
            Groceries
          </Text>
          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              justifyContent: "center",
              alignItems: "center",
            }}
            data={reomData}
            // ListHeaderComponent={() => (
            //   <HeaderComponent navigation={navigation} />
            // )}
            // ListFooterComponent={() => <FooterComponent />}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            renderItem={({ item }) => <Recomandation data={item} />}
          />
          {/* Groceries */}

          {/* Fry foods */}
          <Text
            style={{
              paddingHorizontal: 20,
              paddingVertical: 10,
              fontSize: 16,
              fontWeight: "bold",
              color: "#666",
            }}
          >
            Fry foods
          </Text>
          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              justifyContent: "center",
              alignItems: "center",
            }}
            data={reomData}
            // ListHeaderComponent={() => (
            //   <HeaderComponent navigation={navigation} />
            // )}
            // ListFooterComponent={() => <FooterComponent />}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            renderItem={({ item }) => <Recomandation data={item} />}
          />
          {/* Fry foods */}

          {/* Cow & Gate cereal */}
          <Text
            style={{
              paddingHorizontal: 20,
              paddingVertical: 10,
              fontSize: 16,
              fontWeight: "bold",
              color: "#666",
            }}
          >
            Cow & Gate cereal
          </Text>
          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              justifyContent: "center",
              alignItems: "center",
            }}
            data={reomData}
            // ListHeaderComponent={() => (
            //   <HeaderComponent navigation={navigation} />
            // )}
            // ListFooterComponent={() => <FooterComponent />}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            renderItem={({ item }) => <Recomandation data={item} />}
          />
          {/* Cow & Gate cereal */}

          <HeaderComponent />
        </ScrollView>
      </View>
    </AppScreen>
  );
};

export default HomeScreen;

const HeaderComponent = ({ navigation }) => {
  return (
    <VStack>
      <View
        style={{
          height: 150,
          borderRadius: 20,
        }}
      >
        <ImageBackground
          source={require("../assets/pic/unsplash_tHkJAMcO3QE.png")}
          imageStyle={{ borderRadius: 6 }}
          style={{
            // width: 100,
            margin: 10,
            height: 134,
            borderRadius: 20,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <Text style={styles.topText}>Top 10 Condo</Text>
        </ImageBackground>
      </View>
      {/* <br /> */}
      <View
        style={{
          marginVertical: 6,

          borderRadius: 20,
        }}
      >
        <ImageBackground
          source={require("../assets/pic/unsplash_oyxsG2Lh_uA-1.png")}
          imageStyle={{ borderRadius: 6 }}
          style={{
            // width: 100,
            margin: 10,
            height: 134,
            borderRadius: 20,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <Text style={styles.topText}>Top 10 Condo1</Text>
        </ImageBackground>
      </View>
    </VStack>
  );
};

const styles = StyleSheet.create({
  logoshow: {
    marginTop: 1,
    height: 500,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginLeft: 100,
    justifyContent: "center",
  },

  imageWrap: {
    width: "90%",
  },
  headerview: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    alignItems: "center",
  },
  location: {
    backgroundColor: "transparent",
    paddingHorizontal: 30,
    paddingVertical: 15,
    marginVertical: 10,
    borderRadius: 10,

    fontSize: 16,
    lineHeight: 14,
    fontWeight: "bold",
    color: "rgba(27, 32, 40, 0.8)",
  },
  logo: {
    height: 60,
    width: 60,
    borderRadius: 50,
    marginVertical: 15,
  },
  topText: {
    color: "#fff",
    fontWeight: "bold",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  backText: {
    color: "#fff",
    fontWeight: "bold",
    paddingVertical: 40,
    paddingHorizontal: 30,
  },
  banner: {
    width: "100%",
    // margin: "0",
    height: 250,
    alignContent: "center",
    padding: 20,
  },

  imageshaow: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",

    shadowColor: "#470000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    elevation: 1,
  },

  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginBottom: 40,
    marginTop: 40,
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  logimage: {
    marginBottom: 40,
    marginTop: 140,
    width: 200,
    height: 350,
    borderRadius: 30,
  },

  inputView: {
    backgroundColor: "#fff",
    borderColor: "#000",
    borderRadius: 10,
    width: "95%",
    height: 45,
    marginBottom: 20,

    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
    fontSize: 22,
    color: "salmon",
  },

  loginBtn: {
    width: "90%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",

    marginTop: 40,
    backgroundColor: "#4287f5",
  },
  loginText: {
    color: "#fff",
    fontSize: 21,
  },
});
