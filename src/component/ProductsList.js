import React from "react";

import { useNavigation } from "@react-navigation/native";
import { Image, Text } from "native-base";
import { StyleSheet, View, TouchableOpacity } from "react-native";

const ProductsList = ({ data }) => {
  const navigation = useNavigation();

  console.log("single data", data?.get_product_images[0]?.image);

  return (
    <TouchableOpacity
      style={{
        paddingHorizontal: 10,
        backgroundColor: "#fff",
        marginVertical: 5,
      }}
      onPress={() => navigation.navigate("details1", { data })}
    >
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
            source={{
              uri: `${data?.get_product_images[0]?.image}`,
            }}
            size="sm"
            resizeMode="contain"
            alt={`${data?.id}`}
          />
          <View>
            <Text p={2} style={styles.cat}>
              {data.name}
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
              {data.product_price}
            </Text>
          </View>
        </View>

        <View style={styles.pricecaart}>
          <Text style={styles.price}>{data.first_page_showing_price}</Text>
          <Text style={styles.priceadd}>+</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductsList;

const styles = StyleSheet.create({
  pricecaart: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  cat: {
    fontSize: 14,
    fontWeight: "bold",
    lineHeight: 12,
    color: "#4E627C",
  },
  price: {
    fontSize: 14,
    lineHeight: 16,
    color: "#4C84B4",
    fontWeight: "bold",
    marginTop: 5,
  },
  priceadd: {
    width: 20,
    height: 20,
    fontSize: 20,
    lineHeight: 16,
    color: "#DC2E45",
    backgroundColor: "#f5c9c9",
    paddingTop: 4,
    marginBottom: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
});
