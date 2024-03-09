import React, {Component} from 'react';
import {SafeAreaView, View, FlatList} from 'react-native';
import screenStyle from '../../styles/screenStyle';
import Header from '../../components/router/header';
import FloatActionButton from '../../components/UI/floatActionButton';
import mockData from '../../utils/mockData';
import NoteCard from '../../components/myNotes/noteCard';
import {ADDNOTE} from '../../utils/routes';
const MyNotes = ({navigation}) => {
  return (
    <SafeAreaView style={screenStyle.container}>
      <View style={screenStyle.container}>
        <Header />
        <FlatList
          data={mockData}
          renderItem={({item}) => (
            <NoteCard item={item} navigation={navigation} />
          )}
          keyExtractor={item => item.id}
        />
        <FloatActionButton onPress={() => navigation.navigate(ADDNOTE)} />
      </View>
    </SafeAreaView>
  );
};

export default MyNotes;
