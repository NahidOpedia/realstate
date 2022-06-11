import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Image } from "native-base";
import { TouchableOpacity } from "react-native-web";

const CustomeDrawer = (props, { navigator }) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "#DC2E45" }}
      >
        {/* <View onPress={() => navigator.closeDrawers()} style={styles.cross}>
          <Entypo name="cross" size={44} color="white" />
        </View> */}

        <View style={styles.container}>
          <Image
            source={{
              uri: `https://nahid-murad-abir.netlify.app/static/media/Dihan%20propic%20.c92ebf07.jpg`,
            }}
            style={{
              height: 80,
              width: 80,
              borderRadius: 40,
              marginBottom: 10,
            }}
          />
          <Text
            style={{
              color: "#fff",
              fontSize: 20,
              // fontFamily: "Roboto-Medium",
              marginBottom: 5,
              fontWeight: "800",
            }}
          >
            Dihan Abir
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                color: "#fff",
                // fontFamily: "Roboto-Regular",
                marginRight: 5,
              }}
            >
              01620665499
            </Text>
          </View>
        </View>
        <DrawerItemList {...props}>CustomeDrawer</DrawerItemList>
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomeDrawer;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginBottom: 50,
  },
  cross: {
    marginLeft: 30,
    marginTop: 20,
  },
});
