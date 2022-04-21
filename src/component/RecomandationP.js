import React from "react";

import { useNavigation } from "@react-navigation/native";
import { Box, Button, Heading, Image, Text } from "native-base";
import { Dimensions, StyleSheet } from "react-native";

const RecomandationP = ({ data }) => {
  const navigation = useNavigation();
  console.log(data.image);
  return (
    <Button
      // style={{margin:"10px", border: 'none',background: data.color  }}
      bg="#fff"
      m="2"
      borderRadius="10px"
      alignItems="center"
      justifyContent="center"
      onPress={() => navigation.navigate("details1", { data })}
    >
      {data ? (
        <Box w="100%" p="2" alignItems="center">
          <Image
            source={{ uri: data?.image }}
            size="xl"
            resizeMode="cover"
            alt="image"
          />
          <Text p={2} style={styles.cat}>
            {data.category}
          </Text>
          <Text
            alignItems="center"
            textAlign="left"
            fontSize="lg"
            color="black"
            my="2"
            width={40}
            numberOfLines={1}
          >
            {data.title}
          </Text>
          <Text style={styles.price}> {data.rate}</Text>
        </Box>
      ) : (
        <Text> Loading ..</Text>
      )}
    </Button>
  );
};

export default RecomandationP;

const styles = StyleSheet.create({
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
  },
});
