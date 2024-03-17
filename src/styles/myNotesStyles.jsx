import {StyleSheet} from 'react-native';
import AppColors from '../theme/colors';

// define your styles

const MyNotesStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.WHITE,
    padding: 10,
    margin: 5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
    flexDirection: 'row',
  },
  bubleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  bubleRead: {
    width: 10,
    height: 10,
    backgroundColor: AppColors.GREEN,
    borderRadius: 100,
  },
  buble: {
    width: 10,
    height: 10,
    backgroundColor: AppColors.GRAY,
    borderRadius: 100,
  },
  noteContainer: {
    flex: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: AppColors.SECONDARY,
  },
  description: {
    fontSize: 14,
    color: AppColors.GRAY,
    marginVertical: 5,
  },
  date: {
    fontSize: 14,
    color: AppColors.GRAY,
    marginVertical: 5,
  },
  button: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default MyNotesStyles;
