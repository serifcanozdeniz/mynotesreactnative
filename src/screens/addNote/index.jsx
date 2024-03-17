//import liraries
import React, {Component, useContext, useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, TextInput} from 'react-native';
import screenStyle from '../../styles/screenStyle';
import SaveButton from '../../components/UI/saveButton';
import AppColors from '../../theme/colors';
import {getRandomNumber} from '../../utils/function';
import MyContext from '../../context';
import {useNavigation} from '@react-navigation/native';

// create a component
const AddNote = ({route}) => {
  const {addNote, updateNote} = useContext(MyContext);
  const navigation = useNavigation();
  const {note} = route?.params;
  const {type} = route?.params;
  const [description, setDescription] = useState(note?.description);
  const [title, setTitle] = useState(note?.title);
  const [titleRequired, setTitleRequired] = useState(false);
  const [descriptionRequired, setDescriptionRequired] = useState(false);
  const saveNote = () => {
    if (!title) setTitleRequired(true);
    if (!description) setDescriptionRequired(true);
    if (title && description) {
      setTitleRequired(false);
      setDescriptionRequired(false);
      const form = {
        id: getRandomNumber(1, 100),
        title: title,
        description: description,
        date: new Date().toLocaleDateString(),
        read: false,
      };
      addNote(form);
      navigation.goBack();
    }
  };
  const onChangeNote = () => {
    if (!title) setTitleRequired(true);
    if (!description) setDescriptionRequired(true);
    if (title && description) {
      setTitleRequired(false);
      setDescriptionRequired(false);
      const form = {
        id: note.id,
        title: title,
        description: description,
        date: new Date().toLocaleDateString(),
      };
      updateNote(note.id, form);
      navigation.goBack();
    }
  };
  return (
    <SafeAreaView style={screenStyle.container}>
      <View style={screenStyle.container}>
        <View style={{flex: 1, padding: 10}}>
          <Text style={{fontWeight: '500', fontSize: 16}}>Başlık</Text>
          <TextInput
            placeholder="Başlık"
            value={title}
            style={{
              backgroundColor: AppColors.WHITE,
              margin: 8,
              borderBottomWidth: 1,
              padding: 5,
              borderRadius: 5,
              borderColor: AppColors.GRAY,
              height: 50,
            }}
            onChangeText={text => setTitle(text)}
          />
          {titleRequired && (
            <Text
              style={{
                fontWeight: '500',
                fontSize: 16,
                marginVertical: 10,
                color: AppColors.RED,
              }}>
              Başlık alanı boş bırakılmamalıdır
            </Text>
          )}

          <Text style={{fontWeight: '500', fontSize: 16}}>Açıklama</Text>
          <TextInput
            placeholder="Açıklama"
            value={description}
            style={{
              backgroundColor: AppColors.WHITE,
              margin: 8,
              borderBottomWidth: 1,
              padding: 5,
              borderRadius: 5,
              borderColor: AppColors.GRAY,
              height: 90,
            }}
            onChangeText={text => setDescription(text)}
          />
          {descriptionRequired && (
            <Text
              style={{
                fontWeight: '500',
                fontSize: 16,
                marginVertical: 10,
                color: AppColors.RED,
              }}>
              Açıklama alanı boş bırakılmamalıdır
            </Text>
          )}
        </View>
        <SaveButton
          onPress={type == 'update' ? onChangeNote : saveNote}
          title={type == 'update' ? 'Güncelle' : 'Kaydet'}
        />
      </View>
    </SafeAreaView>
  );
};

export default AddNote;
