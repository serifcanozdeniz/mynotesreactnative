//import liraries
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import AppColors from '../../theme/colors';
import SaveButton from '../../components/UI/saveButton';

// create a component
const StateExample = () => {
  const [count, setCount] = useState(0);
  const setCountStyle = () => {
    if (count >= 10) return styles.countSuccess;
    else if (count < 0) return styles.countDanger;
    else return styles.count;
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.countWrapper}>
          <Text style={setCountStyle()}>{count}</Text>
          {count < 0 ? (
            <Text style={styles.infoTextDanger}>
              Hata: Sayı 0'dan küçük olamaz
            </Text>
          ) : (
            <Text style={styles.infoTextSuccess}>
              Başarılı: Sayı 0'a eşit veya büyük
            </Text>
          )}
        </View>
        <View style={styles.buttonWrapper}>
          <SaveButton onPress={() => setCount(count + 1)} title="Arttır" />
          <SaveButton onPress={() => setCount(count - 1)} title="Azalt" />
        </View>
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  count: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  countSuccess: {
    fontSize: 50,
    color: AppColors.GREEN,
    fontWeight: 'bold',
  },
  countDanger: {
    fontSize: 30,
    color: AppColors.RED,
    fontWeight: 'bold',
  },
  infoTextDanger: {
    fontSize: 20,
    color: AppColors.RED,
    fontWeight: '500',
  },
  infoTextSuccess: {
    fontSize: 20,
    color: AppColors.GREEN,
    fontWeight: '500',
  },
  countWrapper: {
    flex: 1,
    backgroundColor: AppColors.GRAY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWrapper: {
    backgroundColor: AppColors.WHITE,
    justifyContent: 'center',
    padding: 10,
    flexDirection: 'row',
    gap: 5,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.PRIMARY,
    padding: 10,
    paddingVertical: 15,
    borderRadius: 5,
    flex: 1,
  },
  buttonSuccess: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.GREEN,
    padding: 10,
    paddingVertical: 15,
    borderRadius: 5,
    flex: 1,
  },
  buttonDanger: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.RED,
    padding: 10,
    paddingVertical: 15,
    borderRadius: 5,
    flex: 1,
  },
});

//make this component available to the app
export default StateExample;
