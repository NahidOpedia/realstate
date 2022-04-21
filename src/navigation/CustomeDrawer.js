import { View, Text, Image, TouchableOpacity } from "react-native";

import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import HomeScreen from "../screen/HomeScreen";

const Drawer = createDrawerNavigator();

const CustomeDrawer = () => {
  return (
    <View style={{ backgroundColor: "#666", flex: 1 }}>
      <Drawer.Navigator
        drawerType="fade"
        overlayColor="transparent"
        drawerStyle={{
          flex: 1,
          width: "850px",
          paddingRight: 20,
          backgroundColor: "#e6e6e6",
        }}
        sceneContainerStyle={{
          backgroundColor: "#e6e6e6",
        }}
        initialRouteName="HomeScreen"
      >
        <Drawer.Screen name="HomeScreen">
          {(props) => <HomeScreen {...props} />}
        </Drawer.Screen>
        <Drawer.Screen name="HomeScreens">
          {(props) => <HomeScreen {...props} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
};

export default CustomeDrawer;
// const styles = StyleSheet.create({});
