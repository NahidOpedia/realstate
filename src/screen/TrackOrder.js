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

const TrackOrder = ({ navigation }) => {
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
                Track Order
              </Text>
            </View>
          </View>

          <Text style={styles.location2}>
            <SimpleLineIcons name="location-pin" color="#000" size={20} />
            Delivery today at 3.00pm
          </Text>
          <Text style={styles.location2}>
            <SimpleLineIcons name="location-pin" color="#000" size={20} />
            landmark town, Flat R3 Gulshan 2
          </Text>
          <Text style={styles.dangerc}>landmark town, Flat R3 Gulshan 2</Text>

          {/* profile section  */}
          <View style={styles.profilemain}>
            <View style={styles.profilemain}>
              <Image
                style={styles.logo}
                source={require("../assets/Npic/jhon.png")}
              />
              <View style={styles.name}>
                <Text style={styles.nameM}>Jhon Doe</Text>
                <Text>Your Courier</Text>
              </View>
            </View>
            <View style={styles.icons}>
              <SimpleLineIcons
                name="phone"
                fontWeight="bold"
                color="#DC2E45"
                size={20}
              />

              <SimpleLineIcons
                name="envelope"
                color="#DC2E45"
                fontWeight="bold"
                size={20}
              />
            </View>
          </View>
          {/* profile section  */}

          {/* order section  */}
          <View style={styles.ordermain}>
            <View style={styles.name}>
              <Text style={styles.nameM}>Order #1334426</Text>
              <Text>Amount: $550</Text>
            </View>
            <Button size="sm" variant="outline" colorScheme="secondary">
              Cancel Order
            </Button>
          </View>
          <View style={styles.etamain}>
            <Text style={styles.nameeta}>ETA: 15 minutes</Text>
          </View>
        </View>
      </ScrollView>
    </AppScreen>
  );
};

export default TrackOrder;

const styles = StyleSheet.create({
  name: {
    paddingHorizontal: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  etamain: {
    paddingHorizontal: 20,
  },
  nameeta: {
    fontSize: 22,
    fontWeight: "bold",
  },
  nameM: {
    fontSize: 16,
    fontWeight: "bold",
  },
  namel: {
    fontSize: 8,
  },
  profilemain: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  ordermain: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginVertical: 30,
  },
  icons: {
    width: 60,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    height: 50,
    width: 50,
    borderRadius: 10,
  },
  main: {
    position: "relative",
    height: "100%",
  },
  dangerc: {
    color: "#D0021B",
    textAlign: "center",

    paddingVertical: 15,
    marginVertical: 10,
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
  location2: {
    backgroundColor: "transparent",
    paddingHorizontal: 30,
    paddingVertical: 10,
    // marginVertical: 10,
    borderRadius: 10,

    fontSize: 14,
    lineHeight: 14,
    fontWeight: "bold",
    color: "#737373",
  },
});
