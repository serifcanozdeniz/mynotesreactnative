//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Folder, Share, More} from 'iconsax-react-native';
import AppColors from '../../theme/colors';

// create a component
const HeaderRight = () => {
  return (
    <View style={styles.container}>
      <Folder size="24" color={AppColors.SECONDARY} />
      <Share size="24" color={AppColors.SECONDARY} />
      <More size="24" color={AppColors.SECONDARY} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
  },
});

//make this component available to the app
export default HeaderRight;
