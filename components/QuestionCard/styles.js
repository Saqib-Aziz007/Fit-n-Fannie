import {Dimensions, Platform, StyleSheet} from 'react-native';
import {colors} from '../constants/constants';
const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  mainContainer: {
    width: width - 50,
    paddingHorizontal: 16,
    // backgroundColor: 'pink',
    paddingVertical: 16,
  },
  questionMainContainer: {},
  noText: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '300',
    marginVertical: 10,
    // fontFamily: 'Roboto',
  },
  questionContainer: {},
  question: {
    fontWeight: '700',
    fontSize: 20,
    color: colors.APP_COLOR_BLACK,
    // fontFamily: 'Roboto',
  },
  optionCard: {
    backgroundColor: colors.APP_COLOR_WHITE,
    marginVertical: 16,
    paddingVertical: 20,
    borderRadius: 10,
    paddingHorizontal: 15,
  },
});
