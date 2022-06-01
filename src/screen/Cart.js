import React, { useEffect, useState } from "react";
import {
  Text,
  VStack,
  FlatList,
  View,
  // ScrollView,
} from "native-base";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";

import { ScrollView, ImageBackground } from "react-native";

import { StyleSheet } from "react-native";
import AppScreen from "../component/AppScreen";
import reomData from "../data/recomandation";

import ProductsList from "../component/ProductsList";
import CartList from "../component/CartList";

const Cart = ({ navigation }) => {
  return (
    <AppScreen>
      <ScrollView
        style={styles.scrollView}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.main}>
          <View>
            <View style={styles.headerview}>
              <Text style={styles.location} onPress={() => navigation.goBack()}>
                <SimpleLineIcons name="arrow-left" color="#000" size={20} />
                Cart
              </Text>
              <Text style={styles.location}>4 items</Text>
            </View>

            {/* chocklet */}

            <FlatList
              showsVerticalScrollIndicator={false}
              data={reomData}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => <CartList data={item} />}
            />
            {/* chocklet */}

            {/* <HeaderComponent /> */}
            <View style={styles.processview}>
              <Text style={styles.procedbtn}>4 items</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </AppScreen>
  );
};

export default Cart;

const styles = StyleSheet.create({
  main: {
    position: "relative",
    height: "100%",
  },
  processview: { position: "absolute", bottom: 0 },
  procedbtn: {
    backgroundColor: "#DC2E45",
    width: "90%",

    flexDirection: "row",
    textAlign: "center",
    height: 40,

    color: "#fff",
    marginLeft: "5%",
  },
  processview: {
    // height: 100,
  },
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
