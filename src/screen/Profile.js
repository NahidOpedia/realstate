import React, { useEffect } from "react";
import { FlatList, Actionsheet, useDisclose, Image } from "native-base";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import AppScreen from "../component/AppScreen";

import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Profile = ({ navigation }) => {
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
          <Text style={styles.textbld}>My Profile</Text>
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
        <View style={styles.profile}>
          <Image
            style={styles.recImg}
            source={require("./../assets/Npic/pic.jpg")}
            resizeMode="contain"
            alt="image"
          />
          <Text style={styles.bestText}>Md Nahid Murad Abir</Text>
        </View>

        {/* items */}
        <View style={styles.items}>
          <View style={styles.items2}>
            <Text style={styles.mediumText}>25</Text>
            <Text style={styles.lightText}>Orders</Text>
          </View>
          <View style={styles.items2}>
            <Text style={styles.mediumText}>৳1680</Text>
            <Text style={styles.lightText}>Saved</Text>
          </View>
          <View style={styles.items2}>
            <Text style={styles.mediumText}>৳17501</Text>
            <Text style={styles.lightText}>spend</Text>
          </View>
        </View>
        {/* items */}

        {/* options  */}
        <View style={styles.Options}>
          <Text style={styles.lightText2}>Mobile Number</Text>
          <Text style={styles.mediumText2}>01620665499</Text>
        </View>
        <View style={styles.Options}>
          <Text style={styles.lightText2}>Address</Text>
          <Text style={styles.mediumText2}>Mirpur-14, Dhaka -1206, cantt</Text>
        </View>
        <View style={styles.Options}>
          <Text style={styles.lightText2}>Email</Text>
          <Text style={styles.mediumText2}>nahid.muradabir@gmail.com</Text>
        </View>
        <View style={styles.Options}>
          <Text style={styles.mediumText2}>Change Password </Text>
        </View>
        <View style={styles.Options}>
          <Text style={styles.mediumText2}>Select Default Payment </Text>
        </View>
        {/* options  */}
      </ScrollView>
    </AppScreen>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profile: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
  },
  recImg: {
    width: 100,
    height: 100,
    marginVertical: 20,
    resizeMode: "cover",
    borderRadius: 100 / 2,
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
  bestText: {
    fontSize: 20,
    fontWeight: "700",
  },

  items: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 50,
    marginBottom: 50,
  },
  items2: {
    display: "flex",
    flexDirection: "column",
  },

  mediumText: {
    textAlign: "center",

    fontSize: 20,
    fontWeight: "800",
  },
  lightText: {
    textAlign: "center",

    fontSize: 15,
    fontWeight: "500",
    color: "#666",
  },
  Options: {
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 10,
    borderBottomColor: "#C0C0C0",
    borderBottomWidth: 1,
  },
  mediumText2: {
    fontSize: 16,
    fontWeight: "700",
    color: "#222",
    marginTop: 5,
  },
  lightText2: {
    fontSize: 15,
    fontWeight: "500",
    color: "#666",
  },
});
