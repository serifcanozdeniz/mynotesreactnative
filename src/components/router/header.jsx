//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { screenHeight } from '../../utils/constants';
import { MYNOTES } from '../../utils/routes';
import AppColors from '../../theme/colors';
import { HambergerMenu, SearchNormal1, More } from 'iconsax-react-native';

// create a component
const Header = () => {
    return (
        <View style={styles.container}>
            <View style={{ justifyContent: "center", alignItems: "center", paddingVertical: 10 }}>
                <Text style={{ fontSize: 35, color: AppColors.SECONDARY }}>{MYNOTES}</Text>
            </View>

            <View style={{ paddingVertical: 10, flexDirection: "row" }}>

                <View style={{ padding: 5, flex: 1, justifyContent: "center", }}>
                    <HambergerMenu
                        size="20"
                        color={AppColors.SECONDARY}
                    />

                </View>

                <View style={{ padding: 5, flex: 1, flexDirection: "row", justifyContent: "flex-end", alignItems: "center", gap: 5 }}>
                    <SearchNormal1
                        size="20"
                        color={AppColors.SECONDARY}
                    />
                    <More
                        size="20"
                        color={AppColors.SECONDARY}
                    />
                </View>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        minHeight: screenHeight * 0.20,
        padding: 10,
    },
});

//make this component available to the app
export default Header;
