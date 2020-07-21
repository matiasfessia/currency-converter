import React, { memo } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Linking, Alert } from "react-native";
import { Entypo } from "@expo/vector-icons";
import colors from "../constants/colors";
import RowItem from "../components/RowItem";
import RowSeparator from "../components/RowSeparator";

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1
  },
  separator: {
    backgroundColor: colors.border,
    height: StyleSheet.hairlineWidth,
    marginLeft: 20,
  },
});

const openURL = (url) => {
  return Linking.openURL(url).catch((error) => {
    Alert.alert('Sorry, something wen wrong', error)
  });  
};

const Options = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <RowItem
          text="Themes"
          onPress={() => alert("todo")}
          rightIcon={
            <Entypo name="chevron-right" size={20} color={colors.blue} />
          }
        />

        <RowSeparator />

        <RowItem
          text="React Native Basis"
          onPress={() => openURL('https://www.reactnativebasics.com/')}
          rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
        />

        <RowSeparator />

        <RowItem
          text="React Native By Example"
          onPress={() => openURL('https://www.reactnativebyexample.com/')}
          rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default memo(Options);
