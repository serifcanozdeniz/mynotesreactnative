//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView, TextInput} from 'react-native';
import screenStyle from '../../styles/screenStyle';
import SaveButton from '../../components/UI/saveButton';
import EditButtons from '../../components/addNote/editButtons';
import AppColors from '../../theme/colors';

// create a component
const AddNote = ({route}) => {
  return (
    <SafeAreaView style={screenStyle.container}>
      <View style={screenStyle.container}>
        <View>
          <EditButtons />
        </View>
        <View style={{flex: 1}}>
          <TextInput
            placeholder="Lütfen notunuzu yazın"
            value=""
            style={{
              flex: 1,
              backgroundColor: AppColors.WHITE,
              margin: 8,
              borderBottomWidth: 1,
              padding: 5,
              borderRadius: 5,
              borderColor: AppColors.GRAY,
            }}
            // onChangeText={onChangeText}
            // value={text}
          />
        </View>
        <View>
          <SaveButton title="Save Changes" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddNote;
