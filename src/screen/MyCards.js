import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import AppScreen from "../component/AppScreen";
import { MaterialIcons } from "@expo/vector-icons";
import { Radio, ScrollView } from "native-base";
import ImageSlider from "./ImageSlider";

const MyCards = ({ navigation }) => {
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
          <Text style={styles.textbld}>My Cards</Text>
        </View>
      </View>
      <ScrollView showsHorizontalScrollIndicator={false}>
        {/* <ImageSlider /> */}
        {/* radio button section  */}
        <Radio.Group
          name="exampleGroup"
          defaultValue="1"
          accessibilityLabel="pick a size"
        >
          <View style={styles.stackradio}>
            <Radio value="1" colorScheme="red" size="sm" my={3} mx={1}>
              Master Card
            </Radio>
            <Radio value="2" colorScheme="red" size="md" my={3} mx={1}>
              Visa
            </Radio>
            <Radio value="3" colorScheme="red" size="lg" my={3} mx={1}>
              Bkash
            </Radio>
          </View>
        </Radio.Group>
        {/* radio button section  */}

        <Text style={styles.textbld2}>Add New card</Text>
        <View style={styles.Promo}>
          <TextInput
            style={styles.Promoinput}
            placeholderTextColor="#666"
            placeholder="Card Holder Name"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.Promoinput}
            placeholderTextColor="#666"
            placeholder="Card Number"
            keyboardType="numeric"
          />
          <View style={styles.inputFlex}>
            <TextInput
              style={styles.Promoinput2}
              placeholderTextColor="#666"
              placeholder="MM/YY"
              keyboardType="numeric"
            />
            <TextInput
              style={styles.Promoinput2}
              placeholderTextColor="#666"
              placeholder="CVV"
              keyboardType="numeric"
            />
          </View>
          <Text style={styles.textPromo}>Ser as Default payment card</Text>

          <View style={styles.btn2}>
            <Text style={styles.text}>Apply</Text>
          </View>
        </View>
      </ScrollView>
    </AppScreen>
  );
};

export default MyCards;

const styles = StyleSheet.create({
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
  Promo: {
    paddingHorizontal: 15,
    marginVertical: 10,
  },

  Promoinput: {
    borderColor: "#666",
    padding: 10,
    margin: 10,
    backgroundColor: "#e6e6e6",
    borderRadius: 5,
  },
  Promoinput2: {
    borderColor: "#666",
    padding: 10,
    margin: 10,
    backgroundColor: "#e6e6e6",
    borderRadius: 5,
    width: "45%",
  },
  inputFlex: {
    display: "flex",
    flexDirection: "row",
  },
  textbld: {
    fontSize: 20,
    textAlign: "left",
    fontWeight: "700",
  },
  textbld2: {
    fontSize: 23,
    textAlign: "left",
    fontWeight: "600",
    marginHorizontal: 25,
  },
  textPromo: {
    color: "#DC2E45",
  },
  btn2: {
    margin: 2,
    borderColor: "#DC2E45",
    color: "#fff",
    backgroundColor: "#DC2E45",
    borderRadius: 4,
    borderWidth: 1,
    padding: 5,
  },
  text: {
    paddingHorizontal: 10,
    color: "#fff",
    textAlign: "center",
  },
  stackradio: {
    display: "flex",
    flexDirection: "row",
  },
});
