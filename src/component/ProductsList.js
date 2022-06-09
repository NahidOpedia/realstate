import React from "react";

import { useNavigation } from "@react-navigation/native";
import { Box, Button, Heading, Image, Text } from "native-base";
import { Dimensions, StyleSheet, View } from "react-native";

const ProductsList = ({ data }) => {
  const navigation = useNavigation();

  return (
    <Button
      // style={{ border: "none", background: data.color }}
      bg="#fff"
      my="2"
      w="100%"
      borderRadius="10px"
      onPress={() => navigation.navigate("details1", { data })}
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
            size="xl"
            resizeMode="contain"
            alt="image"
          />
          <View>
            <Text p={2} style={styles.cat}>
              A {data.name}
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
          <Text style={styles.price}> {data.product_price}</Text>
          <Text style={styles.priceadd}>+</Text>
          <Text style={styles.price}> {data.offer_price}</Text>
        </View>
      </View>
      {/* </Box> */}
    </Button>
  );
};

export default ProductsList;

const styles = StyleSheet.create({
  pricecaart: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
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
