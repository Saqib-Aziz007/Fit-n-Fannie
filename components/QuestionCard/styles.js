import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../constants/constants';
const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  mainContainer: {
    width: width - 58,
    height: height,
    padding: 24,
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
    color: 'black',
    // fontFamily: 'Roboto',
  },
  optionCard: {
    backgroundColor: colors.APP_COLOR_WHITE,
    marginVertical: 20,
    paddingVertical: 20,
    borderRadius: 10,
    paddingHorizontal: 15,
    height: '52%',
  },
});
