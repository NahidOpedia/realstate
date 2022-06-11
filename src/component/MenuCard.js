import { useNavigation } from "@react-navigation/native";
import { Box, Button, Heading, Image, Text } from "native-base";
import React, { useState } from "react";

// icosn
import { MaterialCommunityIcons } from "@expo/vector-icons";

const MenuCard = ({ data, noIcon }) => {
  const navigation = useNavigation();
  const [ok, setOk] = useState(data?.name);

  return (
    <Button
      style={{
        // width: 140,
        // maxWidth: "100%",
        border: "none",
        backgroundColor: "transparent",
        borderRadius: 10,
        margin: 5,

        shadowColor: ok === "categorya" ? "red" : "#666",
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: ok === "categorya" ? 0.25 : 0.5,
        shadowRadius: 4.84,

        elevation: 5,
      }}
      alignItems="center"
      justifyContent="center"
      // onPress={() => navigation.navigate("SubScreen", { data })} `${data?.title} === "all" && "#DC2E45"`
    >
      <Box
        style={{
          borderRadius: 10,
          backgroundColor: ok === "categorya" && "#DC2E45",
          width: 110,
        }}
        w="100%"
        p="2"
        py="5"
        alignItems="center"
      >
        <Image
          source={{ uri: `${data.image}` }}
          // source={{ uri: `https://illustoon.com/photo/3831.png` }}
          size="xl"
          resizeMode="cover"
          alt="image"
          style={{
            borderRadius: 200,
            height: 50,
            width: 50,
          }}
        />

        <Text
          alignItems="center"
          textAlign="center"
          fontSize="sm"
          fontWeight="bold"
          color="#4C84B4"
          my="1"
          mx="2"
          style={{
            color: ok === "categorya" && "#fff",
          }}

          // p='1'
        >
          {noIcon && (
            <MaterialCommunityIcons
              name="office-building"
              size={16}
              color="#4C84B4"
            />
          )}
          {data?.name}
        </Text>
      </Box>
    </Button>
  );
};

export default MenuCard;
