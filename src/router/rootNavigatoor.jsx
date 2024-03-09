import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  ADDNOTE,
  MYNOTES,
  NOTEDETAIL,
  SECONDSCREEN,
  STATEEXAMPLE,
  USEEFFECTEXAMPLE,
} from '../utils/routes';
import MyNotes from '../screens/MyNotes';
import NoteDetail from '../screens/noteDetail';
import AddNote from '../screens/addNote';
import AppColors from '../theme/colors';
import HeaderRight from '../components/UI/headerRight';
import StateExample from '../screens/stateExample';
import UseEffectExample from '../screens/useEffectExample';
import SecondScreen from '../screens/useEffectExample/secondScreen';

const Stack = createNativeStackNavigator();

const RootNavigatoor = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitle: 'Geri',
        headerTintColor: AppColors.SECONDARY,
      }}>
      <Stack.Screen
        options={{headerShown: true}}
        name={USEEFFECTEXAMPLE}
        component={UseEffectExample}
      />
      <Stack.Screen
        options={{headerShown: true}}
        name={MYNOTES}
        component={MyNotes}
      />
      <Stack.Screen
        options={{headerShown: true}}
        name={SECONDSCREEN}
        component={SecondScreen}
      />
      <Stack.Screen
        options={{headerShown: true}}
        name={STATEEXAMPLE}
        component={StateExample}
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
