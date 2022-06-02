import React, { useEffect, useState } from "react";
import {
  Button,
  Image,
  Text,
  View,
  // ScrollView,
} from "native-base";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";

import { ScrollView } from "react-native";

import { StyleSheet } from "react-native";
import AppScreen from "../component/AppScreen";

const History = ({ navigation }) => {
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
                Order History
              </Text>
            </View>
          </View>

          {/* profile section  */}
          <View style={styles.profilemain}>
            <View style={styles.profilemain}>
              <View style={styles.name}>
                <Text style={styles.nameM}>Thu, 25 jun, 2020</Text>
                <Text>Order #13655634</Text>
              </View>
            </View>
            <View>
              <Text> $550</Text>
            </View>
          </View>
          {/* profile section  */}
          <View style={styles.ordermain}>
            <SimpleLineIcons name="arrow-left" color="#000" size={14} />
            <Text style={styles.location2} onPress={() => navigation.goBack()}>
              usly, you could pass headerMode="none" prop to hide the header in
              a stack navigator. However, there is also a headerShown option
              which can be used to hide or show the header, and it supports
              configuration
            </Text>
          </View>
          <View style={styles.ordermain1}>
            <SimpleLineIcons name="arrow-left" color="green" size={14} />
            <Text style={styles.locationG} onPress={() => navigation.goBack()}>
              Out for delivery
            </Text>
          </View>
          {/* order section  */}
          <View style={styles.ordermainbtn}>
            <Button size="lg" variant="outline" colorScheme="secondary">
              Cancel Order
            </Button>
            <Button size="lg" variant="outline" colorScheme="secondary">
              Track your Order
            </Button>
          </View>
        </View>
      </ScrollView>
    </AppScreen>
  );
};

export default History;

const styles = StyleSheet.create({
  profilemain: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  name: {
    paddingHorizontal: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  nameM: {
    fontSize: 16,
    fontWeight: "bold",
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
  location2: {
    backgroundColor: "transparent",
    paddingHorizontal: 10,
    marginTop: -5,

    borderRadius: 10,

    fontSize: 16,
    lineHeight: 14,
    lineHeight: 20,
    color: "rgba(27, 32, 40, 0.8)",
  },
  locationG: {
    backgroundColor: "transparent",
    paddingHorizontal: 10,
    marginTop: -5,
    borderRadius: 10,
    fontSize: 16,
    lineHeight: 14,
    lineHeight: 20,
    color: "green",
  },
  main: {
    position: "relative",
    height: "100%",
  },
  ordermain: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 30,
    marginVertical: 10,
  },
  ordermain1: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 30,
  },
  ordermainbtn: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 10,
    marginVertical: 30,
    justifyContent: "space-between",
  },
});
