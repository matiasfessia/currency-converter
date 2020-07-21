import React, { memo } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import colors from '../constants/colors';

const styles = StyleSheet.create({
  row:{
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  text: {
    fontSize: 16,
    color: colors.text
  }
});

const RowItem = ({ text, rightIcon, onPress }) => {
  return (
    <TouchableOpacity style={styles.row} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
      {rightIcon}
    </TouchableOpacity>
  );
}

export default memo(RowItem);