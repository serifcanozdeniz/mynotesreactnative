import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ADDNOTE, MYNOTES, NOTEDETAIL} from '../utils/routes';
import MyNotes from '../screens/MyNotes';
import NoteDetail from '../screens/noteDetail';
import AddNote from '../screens/addNote';
import AppColors from '../theme/colors';
import HeaderRight from '../components/UI/headerRight';

const Stack = createNativeStackNavigator();

const RootNavigatoor = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitle: 'Geri',
        headerTintColor: AppColors.SECONDARY,
      }}>
      <Stack.Screen
        options={{headerShown: false}}
        name={MYNOTES}
        component={MyNotes}
      />
      <Stack.Screen name={NOTEDETAIL} component={NoteDetail} />
      <Stack.Screen
        options={{
          headerRight: props => <HeaderRight />,
        }}
        name={ADDNOTE}
        component={AddNote}
      />
    </Stack.Navigator>
  );
};

export default RootNavigatoor;
