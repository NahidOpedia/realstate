import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import AppScreen from "../component/AppScreen";

import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Chat = () => {
  const navigation = useNavigation();
  return (
    <AppScreen>
      <View style={styles.container}>
        <View>
          <View style={styles.header}>
            <MaterialIcons
              onPress={() => navigation.goBack()}
              name="keyboard-arrow-left"
              size={40}
              color="black"
            />
            <View>
              <Text style={styles.textbld}>C&B FOOD Customer Support</Text>
              <Text>Ask any question, Online 24/7</Text>
            </View>
            <Feather name="phone-call" size={24} color="#DC2E45" />
          </View>

          {/* chat */}
          <View style={styles.chat}>
            <Text style={styles.sender}>crambled it to make a type speci</Text>
            <Text style={styles.receiver}>
              ng, remaining essentially unchanged. It{" "}
            </Text>
            <Text style={styles.sender}> and more recently with deskto</Text>
            <Text style={styles.sender}>
              {" "}
              is that it has a more-or-less normal{" "}
            </Text>
            <Text style={styles.receiver}>
              sor at Hampden-Sydney College in{" "}
            </Text>
            <Text style={styles.receiver}>
              ions 1.10.32 and 1.10.33 of "de Finibu
            </Text>
            <Text style={styles.sender}>If you are going to use a pass</Text>
            <Text style={styles.sender}>odel sentence structures, to g</Text>
            <Text style={styles.receiver}>Ask any question, Online 24/7</Text>
          </View>
          {/* chat */}
        </View>

        <View style={styles.footer}>
          <Ionicons name="ios-image" size={24} color="#DC2E45" />
          <View>
            <TextInput
              style={styles.TextInput}
              placeholderTextColor="#d1d1d1"
              placeholder="type here.."
              maxLength={1}
              //   secureTextEntry={true}
            />
          </View>

          <MaterialCommunityIcons
            name="send-outline"
            size={24}
            color="#DC2E45"
          />
        </View>
      </View>
    </AppScreen>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
  },
  chat: {
    marginHorizontal: 15,
  },
  sender: {
    padding: 10,
    textAlign: "left",
  },
  receiver: {
    padding: 10,
    textAlign: "right",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
    marginHorizontal: 15,
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    marginHorizontal: 10,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 4,
  },
  textbld: {
    fontSize: 18,
    fontWeight: "900",
    fontFamily: "Cochin",
  },
});
