import React, {Component, useContext, useEffect, useState} from 'react';
import {SafeAreaView, View, FlatList, Alert} from 'react-native';
import screenStyle from '../../styles/screenStyle';
import Header from '../../components/router/header';
import FloatActionButton from '../../components/UI/floatActionButton';
import NoteCard from '../../components/myNotes/noteCard';
import {ADDNOTE} from '../../utils/routes';
import MyContext from '../../context';
const MyNotes = ({navigation}) => {
  const {notes} = useContext(MyContext);

  // const [notes, setNotes] = useState([
  //   {
  //     id: 1,
  //     title: 'Design Engineer',
  //     description: 'İlk not',
  //     date: '23:45 pm',
  //   },
  //   {
  //     id: 2,
  //     title: 'Software Engineer',
  //     description: 'İkinci not',
  //     date: '23:50 pm',
  //   },
  //   {
  //     id: 3,
  //     title: 'Content Writer',
  //     description: 'Üçüncü not',
  //     date: '23:55 pm',
  //   },
  //   {
  //     id: 4,
  //     title: 'Data Engineer',
  //     description: 'Son not',
  //     date: '23:59 pm',
  //   },
  // ]);

  let note1 = {
    id: 5,
    title: 'Backend Developer',
    description: 'Beşinci not',
    date: '23:59 pm',
  };
  let note2 = {
    id: 6,
    title: 'Mobile Developer',
    description: 'Altıncı not',
    date: '23:59 pm',
  };
  let note3 = {
    id: 7,
    title: 'Frontend Developer',
    description: 'Yedinci not',
    date: '23:59 pm',
  };
  // const addNote = item => {
  //   if (item) setNotes([...notes, item]);
  // };

  // const deleteNote = id => {
  //   if (id) {
  //     const deleteItems = notes.filter(item => item.id !== id);
  //     setNotes(deleteItems);
  //   } else {
  //     Alert.alert('Not bulunamadı');
  //   }
  // };
  // const updateNote = (id, item) => {
  //   const updateItems = notes.map(note =>
  //     note.id === id ? {...note, title: item.title} : note,
  //   );
  //   setNotes(updateItems);
  // };

  // useEffect(() => {
  //   setTimeout(() => {
  //     setNotes([...notes, note3]);
  //   }, 2000);
  // }, []);
  return (
    <SafeAreaView style={screenStyle.container}>
      <View style={screenStyle.container}>
        <Header />
        <FlatList
          data={notes}
          renderItem={({item}) => (
            <NoteCard
              item={item}
              navigation={navigation}
              deleteItem={item => deleteNote(item.id)}
              updateItem={item => updateNote(item.id, note3)}
            />
          )}
          keyExtractor={item => item.id}
        />
        <FloatActionButton
          onPress={() => navigation.navigate(ADDNOTE, {type: 'add'})}
        />
      </View>
    </SafeAreaView>
  );
};

export default MyNotes;
