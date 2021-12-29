import {StyleSheet} from 'react-native';
import {colors} from '../constants/constants';
import {OPENSANS_REGULAR} from '../../assets/fonts/fonts';

export const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: colors.APP_COLOR_WHITE,
    // backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 10,
  },
  iconStyle: {},
  iconSubtitle: {
    fontFamily: OPENSANS_REGULAR,
    fontWeight: '700',
    fontSize: 14,
    color: colors.APP_SECONDARY_COLOR,
  },
});
