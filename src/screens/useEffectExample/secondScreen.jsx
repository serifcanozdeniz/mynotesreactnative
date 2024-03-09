//import liraries
import React, {Component, useContext, useEffect, useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import AppColors from '../../theme/colors';
import SaveButton from '../../components/UI/saveButton';
import MyContext from '../../context';

// create a component
const SecondScreen = () => {
  const {count, changeCount} = useContext(MyContext);
  const {message, changeMessage} = useContext(MyContext);

  const [text, setText] = useState('İkinci Sayfa');
  useEffect(() => {
    // mount (sayfa yüklendiğinde)=> first // componentdidmount
    setTimeout(() => {
      changeMessage('Sayfa yüklendiğinde gerçekleşecek işlemler');
    }, 3000);
    return () => {
      // unmount (sayfadan çıkış yapıldığında)=> second //componentwillunmount
      changeMessage('Sayfadan çıkış yapıldığında gerçekleşecek işlemler');
    };
    // update (sayfa güncellendiğinde)=> third //componentdidupdate
  }, []);

  useEffect(() => {
    if (count !== 0) changeMessage('Sayfa Güncellendi');
  }, [count]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.count}>{count}</Text>
          <Text style={styles.text}>{message}</Text>
        </View>
        <View
          style={{
            padding: 5,
            justifyContent: 'center',
            padding: 10,
            flexDirection: 'row',
            gap: 5,
          }}>
          <SaveButton
            onPress={() => changeCount(count + 1)}
            title="Arttır"
            style={styles.button}
          />
          <SaveButton
            onPress={() => changeCount(count - 1)}
            title="Azalt"
            style={styles.button}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.WHITE,
  },
  count: {
    fontSize: 100,
    fontWeight: 'bold',
    color: AppColors.PRIMARY,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.PRIMARY,
    padding: 10,
    paddingVertical: 15,
    borderRadius: 5,
  },
});

//make this component available to the app
export default SecondScreen;
