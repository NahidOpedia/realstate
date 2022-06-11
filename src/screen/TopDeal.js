import React, { useEffect, useState } from "react";
import {
  Text,
  FlatList,
  View,
  // ScrollView,
} from "native-base";

import { ScrollView, TouchableOpacity } from "react-native";

import { StyleSheet } from "react-native";
import AppScreen from "../component/AppScreen";
import Recomandation from "../component/Recomandation";
import reomData from "../data/recomandation";
import { AntDesign } from "@expo/vector-icons";

import ProductsList from "../component/ProductsList";

import { MaterialIcons } from "@expo/vector-icons";

import Topdealcard from "../component/Topdealcard";

const TopDeal = ({ navigation }) => {
  const [categoriesapi, setCategoriesapi] = useState([]);
  const [productsesapi, setProductsesapi] = useState([]);

  useEffect(() => {
    fetch("https://saif001.herokuapp.com/basic/category")
      .then((response) => response.json())
      .then((json) => setCategoriesapi(json))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    fetch("https://saif001.herokuapp.com/product/list/")
      .then((response) => response.json())
      .then((json) => setProductsesapi(json))
      .catch((error) => console.error(error));
  }, []);

  return (
    <AppScreen>
      <View style={styles.header}>
        <View style={styles.headerflex}>
          <MaterialIcons
            onPress={() => navigation.goBack()}
            name="keyboard-arrow-left"
            size={40}
            color="black"
          />
          <Text style={styles.textbld}>Top Deals</Text>
        </View>
        <TouchableOpacity
          style={styles.sidebarView}
          onPress={() => navigation.navigate("Search")}
        >
          <AntDesign name="search1" size={24} color="black" />
        </TouchableOpacity>
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
          data={categoriesapi}
          keyExtractor={(item) => item.id.toString()}
          // numColumns={2}
          renderItem={({ item }) => <Topdealcard data={item} />}
        />
        {/* Category */}

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
          Bundles
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
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Recomandation data={item} />}
        />

        <Text
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            fontSize: 16,
            fontWeight: "bold",
            color: "#666",
          }}
        >
          Products
        </Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={productsesapi}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <ProductsList data={item} />}
        />
      </ScrollView>
    </AppScreen>
  );
};

export default TopDeal;

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
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
    marginHorizontal: 15,
  },
  headerflex: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  textbld: {
    fontSize: 20,
    textAlign: "left",
    fontWeight: "800",
  },
});
