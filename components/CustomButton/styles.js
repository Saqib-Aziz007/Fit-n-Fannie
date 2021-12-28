import {StyleSheet} from 'react-native';
import {colors} from '../constants/constants';

export const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    backgroundColor: colors.APP_SECONDARY_COLOR,
    height: 40,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: colors.APP_COLOR_WHITE,
    fontWeight: '500',
  },
  buttonconditionContainer2: {
    backgroundColor: colors.APP_COLOR_LIGHT2,
    height: 40,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textcondition2: {
    fontSize: 20,
    color: colors.APP_COLOR_WHITE,
  },
});
