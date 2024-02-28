//import liraries
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import AppColors from '../../theme/colors';
import { Trash } from 'iconsax-react-native';
import { TouchableOpacity } from 'react-native';
import MyNotesStyles from '../../styles/myNotesStyles';

// create a component
const NoteCard = ({ item }) => {
    return (
        <View style={MyNotesStyles.container}>
            <View style={MyNotesStyles.bubleContainer}>
                <View style={MyNotesStyles.buble}>

                </View>

            </View>
            <View style={MyNotesStyles.noteContainer}>
                <Text style={MyNotesStyles.title}>
                    {item.title}
                </Text>
                <Text style={MyNotesStyles.description}>
                    {item.description}
                </Text>
                <Text style={MyNotesStyles.date}>
                    {item.date}
                </Text>
            </View>
            <TouchableOpacity style={MyNotesStyles.button}>
                <Trash size="24" color={AppColors.SECONDARY} variant='Bold' />
            </TouchableOpacity>

        </View>
    );
};



export default NoteCard;
