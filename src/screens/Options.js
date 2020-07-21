import React from 'react';
import { View, SafeAreaView, TouchableOpacity, Text, StyleSheet } from 'react-native';
import colors from '../constants/colors';

const styles = StyleSheet.create({
  container: {
    paddingTop: 20
  },
  row:{
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  text: {
    fontSize: 16,
    color: colors.text
  },
  separator: {
    backgroundColor: colors.border,
    height: StyleSheet.hairlineWidth,
    marginLeft: 20
  }
});

export default Options = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.row}>
        <Text style={styles.text}>Themes</Text>
      </TouchableOpacity>

      <View style={styles.separator} />

      <TouchableOpacity style={styles.row}>
        <Text style={styles.text}>React Native Basis</Text>
      </TouchableOpacity>

      <View style={styles.separator} />

      <TouchableOpacity style={styles.row}>
        <Text style={styles.text}>React Native By Example</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
};
