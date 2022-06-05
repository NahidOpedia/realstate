import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import AppScreen from "../component/AppScreen";

import { MaterialIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Badge, ScrollView } from "native-base";

const MyCoupons = ({ navigation }) => {
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
          <Text style={styles.textbld}>My Coupons</Text>
        </View>
        <View style={styles.bdg}>
          <Badge // bg="red.400"
            colorScheme="danger"
            rounded="full"
            mb={-4}
            mr={-4}
            zIndex={1}
            variant="solid"
            alignSelf="flex-end"
            _text={{
              fontSize: 14,
            }}
          >
            2
          </Badge>
          <Fontisto name="shopping-basket" size={24} color="#DC2E45" />
        </View>
      </View>
      <ScrollView showsHorizontalScrollIndicator={false}>
        {Array(5)
          .fill("")
          .map((i) => (
            <MyCouponsItem />
          ))}
        <View style={styles.Promo}>
          <Text style={styles.textPromo}>Enter the Promo code</Text>

          <TextInput
            style={styles.Promoinput}
            placeholderTextColor="#666"
            placeholder="X"
            keyboardType="numeric"
          />
          <View style={styles.btn2}>
            <Text style={styles.text}>Apply</Text>
          </View>
        </View>
      </ScrollView>
    </AppScreen>
  );
};

export default MyCoupons;

const MyCouponsItem = () => {
  return (
    <View style={styles.cardItem}>
      <View style={styles.headeritem}>
        <Text style={styles.textbld2}>15% OFF</Text>
        <View style={styles.headerflex}>
          <Text style={styles.btn1}>5fsd5f6s</Text>
          <View style={styles.btn2}>
            <Text style={styles.text}>Redeem</Text>
          </View>
        </View>
      </View>
      <View style={styles.des}>
        <Text style={styles.textbld3}>Apply on first purchase</Text>
        <Text style={styles.textbld4}>Valid untille 27 august, 2022</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  headeritem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
    // marginHorizontal: 15,
  },
  btn1: {
    margin: 2,
    marginHorizontal: 5,
    borderColor: "#bdbdbd",
    borderRadius: 4,
    borderWidth: 1,
    padding: 5,
  },
  bdg: {
    marginHorizontal: 10,
  },
  btn2: {
    margin: 2,
    borderColor: "#DC2E45",
    color: "#fff",
    backgroundColor: "#DC2E45",
    borderRadius: 4,
    borderWidth: 1,
    padding: 5,
  },
  text: {
    paddingHorizontal: 10,
    color: "#fff",
    textAlign: "center",
  },

  textbld: {
    fontSize: 20,
    textAlign: "left",
    fontWeight: "800",
  },
  Promo: {
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  Promoinput: {
    borderColor: "#666",
    padding: 10,
    margin: 10,
    backgroundColor: "#e6e6e6",
    borderRadius: 5,
  },
  textPromo: {
    color: "#DC2E45",
  },
  textbld3: {
    fontSize: 16,
    textAlign: "left",
    fontWeight: "600",
  },
  textbld4: {
    fontSize: 14,
    textAlign: "left",
    fontWeight: "300",
    marginVertical: 5,
  },
  des: {
    marginTop: 50,
  },
  textbld2: {
    fontSize: 20,
    textAlign: "left",
    fontWeight: "800",
    letterSpacing: 1,
  },
  cardItem: {
    margin: 10,
    borderColor: "#e6e6e6",
    borderRadius: 4,
    borderWidth: 2,
    padding: 20,
  },
});
