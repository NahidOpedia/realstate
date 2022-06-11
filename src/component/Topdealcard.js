import { useNavigation } from "@react-navigation/native";
import { Box, Button, Heading, Image, Text } from "native-base";
import React, { useState } from "react";

// icosn
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Topdealcard = ({ data, noIcon }) => {
  const navigation = useNavigation();
  const [ok, setOk] = useState(data?.title);

  return (
    <Button
      style={{
        width: 140,
        // maxWidth: "100%",
        border: "none",
        backgroundColor: "#F6F9FB",
        borderRadius: 10,
        margin: 5,
      }}
      alignItems="center"
      justifyContent="center"
      // onPress={() => navigation.navigate("SubScreen", { data })} `${data?.title} === "all" && "#DC2E45"`
    >
      <Box
        style={{
          borderRadius: 10,
          backgroundColor: ok === "all" && "#DC2E45",
        }}
        w="100%"
        p="2"
        alignItems="center"
      >
        <Text
          alignItems="center"
          textAlign="center"
          fontSize="sm"
          fontWeight="bold"
          color="#4C84B4"
          my="1"
          mx="2"

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

export default Topdealcard;
