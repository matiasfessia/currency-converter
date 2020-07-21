import React, { memo } from 'react';
import { View,  StyleSheet } from 'react-native';
import colors from '../constants/colors';

const styles = StyleSheet.create({
  separator: {
    backgroundColor: colors.border,
    height: StyleSheet.hairlineWidth,
    marginLeft: 20
  }
});

const RowSeparator = () => (
  <View style={styles.separator} />
);

export default memo(RowSeparator);