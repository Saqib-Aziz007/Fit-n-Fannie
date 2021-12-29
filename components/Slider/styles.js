import {StyleSheet} from 'react-native';
import {colors} from '../constants/constants';

export const styles = StyleSheet.create({
  containerStyle: {},
  trackstyle: {
    backgroundColor: colors.APP_COLOR_LIGHT3,
    height: 8,
    borderRadius: 5,
  },
  trackThumbComponent: {
    height: 20,
    width: 20,
    borderRadius: 17.5,
    backgroundColor: 'transparent',
    borderWidth: 5,
    borderColor: colors.APP_PRIMARY_COLOR,
  },
  textContainer: {alignItems: 'center', justifyContent: 'center'},
  thumbText: {
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '400',
    fontSize: 24,
    color: colors.APP_COLOR_BLACK,
  },
});
