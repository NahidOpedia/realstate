import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

const OTP = ({ numberInput, setOtp, navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.mobotext}>Enter the 4-digit number sent to</Text>
        <Text style={styles.mobotext}>
          <Text style={styles.mobotextBold}>
            {numberInput ? numberInput : "01620665499"}
          </Text>
        </Text>
      </View>

      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholderTextColor="#d1d1d1"
          placeholder="X"
          keyboardType="numeric"
          maxLength={1}
        />
        <TextInput
          style={styles.TextInput}
          placeholderTextColor="#d1d1d1"
          placeholder="X"
          keyboardType="numeric"
          maxLength={1}
          //   secureTextEntry={true}
        />
        <TextInput
          style={styles.TextInput}
          placeholderTextColor="#d1d1d1"
          placeholder="X"
          keyboardType="numeric"
          maxLength={1}
          //   secureTextEntry={true}
        />
        <TextInput
          style={styles.TextInput}
          placeholderTextColor="#d1d1d1"
          placeholder="X"
          keyboardType="numeric"
          maxLength={1}
          //   secureTextEntry={true}
        />
      </View>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("HomeS");
          setOtp(false);
        }}
        style={styles.loginBtn}
      >
        <Text style={styles.loginText}>Verify and proceed</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OTP;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  container1: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 100,
  },
  mobotext: {
    marginHorizontal: 15,
    fontSize: 20,
    color: "#666",
  },
  mobotextBold: {
    fontWeight: "bold",
  },

  inputView: {
    backgroundColor: "#fff",
    borderColor: "#000",
    borderRadius: 10,
    width: "95%",
    height: 45,
    marginBottom: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#666",
    fontSize: 26,
    alignItems: "center",
    textAlign: "center",
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
    fontSize: 22,
    color: "salmon",
  },

  loginBtn: {
    width: "92%",
    borderRadius: 2,
    height: 50,
    alignItems: "center",
    justifyContent: "center",

    marginTop: 40,
    marginHorizontal: 15,
    backgroundColor: "#DC2E45",
  },
  loginText: {
    color: "#fff",
    fontSize: 22,
  },
});
