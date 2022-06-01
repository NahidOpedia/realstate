import React from "react";

import { useNavigation } from "@react-navigation/native";
import { Box, Button, Heading, Image, Text } from "native-base";
import { Dimensions, StyleSheet, View } from "react-native";

import { AntDesign } from "@expo/vector-icons";

import Swipeable from "react-native-gesture-handler/Swipeable";

const LeftSwipeActions = () => {
  return (
    <View
      style={{ flex: 1, backgroundColor: "#ccffbd", justifyContent: "center" }}
    >
      <Text
        style={{
          color: "#40394a",
          paddingHorizontal: 10,
          fontWeight: "600",
          paddingHorizontal: 30,
          paddingVertical: 20,
        }}
      >
        Bookmark
      </Text>
    </View>
  );
};
const rightSwipeActions = () => {
  return (
    <View
      style={{
        backgroundColor: "#DC2E45",
        justifyContent: "center",
        alignItems: "flex-end",
        marginVertical: 5,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
      }}
    >
      <Text
        style={{
          color: "#1b1a17",
          paddingHorizontal: 10,
          fontWeight: "600",
          paddingHorizontal: 30,
          paddingVertical: 20,
        }}
      >
        <AntDesign name="delete" size={30} color="white" />
      </Text>
    </View>
  );
};

const swipeFromRightOpen = () => {
  alert("Remove from cart");
};

const CartList = ({ data }) => {
  const navigation = useNavigation();

  return (
    <Swipeable
      renderRightActions={rightSwipeActions}
      onSwipeableRightOpen={swipeFromRightOpen}
    >
      <View
        style={styles.container}
        onPress={() => navigation.navigate("HomeS", { data })}
      >
        {/* <Box w={"100%"} alignItems="center"> */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Image
              source={data?.image}
              size="sm"
              resizeMode="contain"
              alt="image"
            />
            <View>
              <Text p={2} style={styles.cat}>
                A {data.category}
              </Text>
              <Text
                alignItems="center"
                textAlign="left"
                fontSize="sm"
                color="black"
                my="2"
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {data.title}
              </Text>
            </View>
          </View>

          <View style={styles.pricecaart}>
            <Text style={styles.price}> {data.price}</Text>
            <Text style={styles.priceadd}>+</Text>
          </View>
        </View>
        {/* </Box> */}
      </View>
    </Swipeable>
  );
};

export default CartList;

const styles = StyleSheet.create({
  container: {
    margin: 5,
    backgroundColor: "#fff",
  },
  pricecaart: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 5,
  },
  cat: {
    fontSize: 14,
    fontWeight: "bold",
    lineHeight: 12,
    color: "#4E627C",
  },
  price: {
    fontSize: 16,
    lineHeight: 16,
    color: "#4C84B4",
    fontWeight: "bold",
    height: 20,
  },
  priceadd: {
    height: 20,
    fontSize: 20,
    lineHeight: 16,
    color: "#fff",
    backgroundColor: "#41bf1f",
    padding: 5,
    paddingBottom: 0,
    marginBottom: 10,
    fontWeight: "bold",
  },
});
