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
import OTP from "./OTP";

export default function Login({ setLogins, navigation }) {
  const [email, setEmail] = useState("");
  const [numberInput, setNumberInput] = useState("");
  const [otp, setOtp] = useState(false);

  return (
    <>
      {!otp && (
        <View style={styles.container}>
          <Text style={styles.mobotext}>Enter Mobile Number</Text>
          <Text style={styles.mobotext}>
            for <Text style={styles.mobotextBold}>Login / Registration</Text>
          </Text>

          <StatusBar style="auto" />
          <Text style={styles.mobo}>Mobile Number</Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              value="+88"
              placeholderTextColor="#003f5c"
              onChangeText={(email) => setEmail(email)}
            />
            <TextInput
              style={styles.TextInput1}
              placeholderTextColor="#d1d1d1"
              placeholder="01XXXXXXXXX"
              keyboardType="numeric"
              //   secureTextEntry={true}
              onChangeText={(phnnmbr) => setNumberInput(phnnmbr)}
            />
          </View>

          <TouchableOpacity
            onPress={() => {
              setOtp(true);
            }}
            style={styles.loginBtn}
          >
            <Text style={styles.loginText}>Get OTP</Text>
          </TouchableOpacity>
        </View>
      )}
      {otp && (
        <OTP
          setOtp={setOtp}
          navigation={navigation}
          numberInput={numberInput}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
  },
  mobotext: {
    marginHorizontal: 15,
    fontSize: 20,
    color: "#666",
  },
  mobotextBold: {
    fontWeight: "bold",
  },
  mobo: {
    marginTop: 40,

    marginHorizontal: 15,
  },

  image: {
    marginBottom: 40,
    width: 60,
    height: 60,
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
  },
  TextInput1: {
    height: 50,
    flex: 4,
    padding: 10,
    marginLeft: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#d1d1d1",
    fontSize: 26,
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
