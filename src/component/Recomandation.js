import React from "react";

import { useNavigation } from "@react-navigation/native";
import { Box, Button, Heading, Image, Text } from "native-base";
import { Dimensions, StyleSheet, View } from "react-native";

const Recomandation = ({ data }) => {
  const navigation = useNavigation();
  // console.log({ data });
  return (
    <Button
      // style={{ border: "none", background: data.color }}
      bg="#fff"
      m="2"
      w={40}
      borderRadius="10px"
      alignItems="center"
      justifyContent="center"
      onPress={() => navigation.navigate("details1", { data })}
    >
      {/* <Box w={"100%"} alignItems="center"> */}
      <Image source={data?.image} size="xl" resizeMode="contain" alt="image" />
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
      <View style={styles.pricecaart}>
        <Text style={styles.price}> {data.price}</Text>
        <Text style={styles.priceadd}>+</Text>
      </View>
      {/* </Box> */}
    </Button>
  );
};

export default Recomandation;

const styles = StyleSheet.create({
  pricecaart: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cat: {
    fontSize: 14,
    fontWeight: "bold",
    lineHeight: 12,
    color: "#4E627C",
  },
  price: {
    fontSize: 18,
    lineHeight: 16,
    color: "#4C84B4",
    fontWeight: "bold",
    marginTop: 5,
  },
  priceadd: {
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
