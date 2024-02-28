//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import screenStyle from '../../styles/screenStyle';
import SaveButton from '../../components/UI/saveButton';
import EditButtons from '../../components/addNote/editButtons';

// create a component
const AddNote = ({route}) => {
  return (
    <SafeAreaView style={screenStyle.container}>
      <View style={screenStyle.container}>
        <View>
          <EditButtons />
        </View>
        <View style={{flex: 1}}>
          <Text>Add Note</Text>
        </View>
        <View>
          <SaveButton title="Save Changes" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddNote;
