//import liraries
import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import AppColors from '../../theme/colors';
import {Add} from 'iconsax-react-native';

// create a component
const FloatActionButton = props => {
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <Add size="32" color={AppColors.WHITE} />
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.PRIMARY,
    borderRadius: 50,
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 50,
    height: 50,
  },
});

//make this component available to the app
export default FloatActionButton;
