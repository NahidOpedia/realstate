import React, { useEffect } from "react";
import { FlatList, Actionsheet, useDisclose } from "native-base";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import AppScreen from "../../component/AppScreen";
import reomData from "../../data/recomandation";
import Recomandation from "../../component/Recomandation";

import { AntDesign } from "@expo/vector-icons";

import { VStack, Input, Icon } from "native-base";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import productsData from "../../data/AllProducts";
import MenuCard from "../../component/MenuCard";
import tagData from "../../data/tag";
import RecomandationP from "../../component/RecomandationP";

const image = {
  uri: "https://images.unsplash.com/photo-1550461716-dbf266b2a8a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
};

const Search = ({ navigation }) => {
  const [value, setValue] = React.useState(null);
  const [totalD, setTotalD] = React.useState(reomData);
  const [dataP, setDataP] = React.useState([]);
  const handleChange = (text) => setValue(text);

  const filteredData = value
    ? productsData.filter(function (item) {
        return item?.title?.includes(value);
      })
    : productsData;

  const searchHandler = () => {
    setTotalD(filteredData);
  };

  const { isOpen, onOpen, onClose } = useDisclose();

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/todos")
    fetch("https://fakestoreapi.com/products/")
      .then((response) => response.json())
      .then((json) => setDataP(json))
      .catch((error) => console.error(error));
  }, [filteredData]);

  return (
    <AppScreen>
      {/* search input */}
      <VStack space={8} width="90%" alignItems="center" marginVertical={9}>
        <VStack width="98%" space={2} direction="row" alignItems="center">
          <Input
            placeholder="Search People & Places"
            bg="#fff"
            width="100%"
            borderRadius={10}
            py={3}
            px={3}
            value={value}
            onChangeText={handleChange}
            fontSize={14}
            _web={{
              _focus: {
                borderColor: "#fff",
                style: {
                  boxShadow: "none",
                },
              },
            }}
            InputRightElement={
              <Icon
                // size="sm"
                m={2}
                size={6}
                color="gray.400"
                as={<MaterialIcons name="mic" />}
              />
            }
          />

          <TouchableOpacity onPress={onOpen}>
            <Ionicons name="md-filter" size={30} color="black" />
          </TouchableOpacity>
        </VStack>
      </VStack>

      <ScrollView
        style={styles.scrollView}
        showsHorizontalScrollIndicator={false}
      >
        {/* suggestiontag */}
        <FlatList
          horizontal
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
          }}
          data={tagData}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.primarybtnView}>
              <Text style={styles.primarybtn}>{item?.title}</Text>
            </View>
          )}
        />

        {dataP.length ? (
          <FlatList
            horizontal
            contentContainerStyle={{
              justifyContent: "center",
              alignItems: "center",
            }}
            data={dataP}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <RecomandationP data={item} />}
          />
        ) : (
          <Text> Loading ..</Text>
        )}
      </ScrollView>

      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          {/* Location */}

          <Text style={styles.bestText}>Location</Text>
          {/* <FlatList
              horizontal
              contentContainerStyle={{
                justifyContent: "center",
                alignItems: "center",
              }}
              data={reomData}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => <MenuCard data={item} />}
            /> */}
          {/* Payment Method */}
          {/* <Text style={styles.bestText}>Payment Method</Text>
            <FlatList
              horizontal
              contentContainerStyle={{
                justifyContent: "center",
                alignItems: "center",
              }}
              data={reomData}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => <MenuCard data={item} />}
            /> */}
          {/* Price Monthly */}
          {/* <Text style={styles.bestText}>Price Monthly</Text>
            <FlatList
              horizontal
              contentContainerStyle={{
                justifyContent: "center",
                alignItems: "center",
              }}
              data={reomData}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => <MenuCard data={item} />}
            /> */}

          {/* seller type */}
          <Text style={styles.bestText}>Seller type</Text>

          {/* Property Type */}
          {/* <Text style={styles.bestText}>Property Type</Text>
            <FlatList
              horizontal
              contentContainerStyle={{
                justifyContent: "center",
                alignItems: "center",
              }}
              data={reomData}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => <MenuCard data={item} />}
            /> */}

          {/* Bathrooms */}
          {/* <Text style={styles.bestText}>Bathrooms</Text>
            <FlatList
              horizontal
              contentContainerStyle={{
                justifyContent: "center",
                alignItems: "center",
              }}
              data={reomData}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => <MenuCard data={item} />}
            /> */}

          {/* Bedrooms type */}
          {/* <Text style={styles.bestText}>Bedrooms</Text>
            <FlatList
              horizontal
              contentContainerStyle={{
                justifyContent: "center",
                alignItems: "center",
              }}
              data={reomData}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => <MenuCard data={item} />}
            /> */}
          {/* Furnishing */}
          {/* <Text style={styles.bestText}>Furnishing</Text>
            <FlatList
              horizontal
              contentContainerStyle={{
                justifyContent: "center",
                alignItems: "center",
              }}
              data={reomData}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => <MenuCard data={item} />}
            /> */}

          <TouchableOpacity style={styles.submit} onPress={onClose}>
            <Text style={styles.topText}> Filter</Text>
          </TouchableOpacity>
        </Actionsheet.Content>
      </Actionsheet>
    </AppScreen>
  );
};
export default Search;

const styles = StyleSheet.create({
  topText: {
    color: "#fff",
    fontWeight: "bold",
  },
  bestText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    paddingHorizontal: 20,
  },
  submit: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    color: "#fff",
    backgroundColor: "#DC2E45",

    fontSize: 30,
    borderRadius: 14,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 15,
    alignItems: "center",
    width: 160,
  },
  primarybtnView: {
    borderRadius: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#fff",
    borderStyle: "solid",
    backgroundColor: "#fff",
    marginHorizontal: 8,
    marginVertical: 5,
  },
  primarybtn: {
    color: "#000",
    paddingHorizontal: 25,
    paddingVertical: 15,
    marginHorizontal: 10,
  },
});
