//import liraries
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import AppColors from '../../theme/colors';
import {Trash} from 'iconsax-react-native';
import {TouchableOpacity} from 'react-native';
import MyNotesStyles from '../../styles/myNotesStyles';
import {NOTEDETAIL} from '../../utils/routes';
import {useNavigation} from '@react-navigation/native';

// create a component
const NoteCard = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(NOTEDETAIL)}
      style={MyNotesStyles.container}>
      <View style={MyNotesStyles.bubleContainer}>
        <View style={MyNotesStyles.buble}></View>
      </View>
      <View style={MyNotesStyles.noteContainer}>
        <Text style={MyNotesStyles.title}>{item.title}</Text>
        <Text style={MyNotesStyles.description}>{item.description}</Text>
        <Text style={MyNotesStyles.date}>{item.date}</Text>
      </View>
      <View style={MyNotesStyles.button}>
        <Trash size="24" color={AppColors.SECONDARY} variant="Bold" />
      </View>
    </TouchableOpacity>
  );
};

export default NoteCard;
