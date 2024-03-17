//import liraries
import React, {Component, useContext, useEffect, useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, TextInput} from 'react-native';
import screenStyle from '../../styles/screenStyle';
import EditButtons from '../../components/addNote/editButtons';
import AppColors from '../../theme/colors';
import MyContext from '../../context';

// create a component
const NoteDetail = ({route}) => {
  const {updateNote} = useContext(MyContext);

  const [selectStyle, setSelectStyle] = useState(styles.normal);
  const {note} = route?.params;

  const changeStyleText = style => {
    switch (style) {
      case 'bold':
        setSelectStyle(styles.bold);
        break;
      case 'italic':
        setSelectStyle(styles.italic);
        break;
      case 'textUnderline':
        setSelectStyle(styles.textUnderline);
        break;
      case 'left':
        setSelectStyle(styles.left);
        break;
      case 'right':
        setSelectStyle(styles.right);
        break;
      case 'center':
        setSelectStyle(styles.center);
        break;
      default:
        setSelectStyle(styles.normal);
        break;
    }
  };

  useEffect(() => {
    updateNote(note.id, note);
  }, []);

  return (
    <SafeAreaView style={screenStyle.container}>
      <View style={screenStyle.container}>
        <View>
          <EditButtons onChangeStyle={value => changeStyleText(value)} />
        </View>
        <View style={{flex: 1, backgroundColor: AppColors.WHITE, padding: 10}}>
          <View>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>Başlık</Text>
            <Text
              style={{
                fontSize: 24,
                fontWeight: '500',
                color: AppColors.PRIMARY,
                marginVertical: 10,
              }}>
              {note.title}
            </Text>
          </View>
          <View>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>Not</Text>
            <Text style={selectStyle}>{note.description}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
// define your styles
const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
  },
  textUnderline: {
    textDecorationLine: 'underline',
  },
  left: {
    textAlign: 'left',
  },
  right: {
    textAlign: 'right',
  },
  center: {
    textAlign: 'center',
  },
  normal: {},
});

export default NoteDetail;
// CRUD
// Create
// Read
// Update
// Delete
