//import liraries
import React, {Component, useContext} from 'react';
import {View, Text} from 'react-native';
import AppColors from '../../theme/colors';
import {Edit, Trash} from 'iconsax-react-native';
import {TouchableOpacity} from 'react-native';
import MyNotesStyles from '../../styles/myNotesStyles';
import {NOTEDETAIL} from '../../utils/routes';
import {useNavigation} from '@react-navigation/native';
import {ADDNOTE} from '../../utils/routes';
import MyContext from '../../context';

// create a component
const NoteCard = ({item, deleteItem, updateItem}) => {
  const navigation = useNavigation();
  const {deleteNote} = useContext(MyContext);

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(NOTEDETAIL, {note: item})}
      style={MyNotesStyles.container}>
      <View style={MyNotesStyles.bubleContainer}>
        <View
          style={
            item.read ? MyNotesStyles.buble : MyNotesStyles.bubleRead
          }></View>
      </View>
      <View style={MyNotesStyles.noteContainer}>
        <Text style={MyNotesStyles.title}>{item.title}</Text>
        <Text style={MyNotesStyles.description}>{item.description}</Text>
        <Text style={MyNotesStyles.date}>{item.date}</Text>
      </View>
      <TouchableOpacity
        onPress={() => deleteNote(item.id)}
        style={MyNotesStyles.button}>
        <Trash size="24" color={AppColors.RED} variant="Bold" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(ADDNOTE, {note: item, type: 'update'})
        }
        style={MyNotesStyles.button}>
        <Edit size="24" color={AppColors.PRIMARY} variant="Bold" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default NoteCard;
