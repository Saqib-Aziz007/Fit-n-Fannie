import {StyleSheet} from 'react-native';
import {colors} from '../constants/constants';
import {OPENSANS_REGULAR} from '../../assets/fonts/fonts';

export const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: colors.APP_COLOR_WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    marginVertical: 5,
  },
  iconStyle: {},
  iconSubtitle: {
    // fontFamily: OPENSANS_REGULAR,
    fontWeight: '700',
    fontSize: 14,
    color: colors.APP_SECONDARY_COLOR,
  },
});
