import {StyleSheet} from 'react-native';

import {OPENSANS_REGULAR} from '../../assets/fonts/fonts';
import {colors} from '../constants/constants';

const styles = StyleSheet.create({
  mainContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  labelContainer: {
    borderRadius: 12,
    backgroundColor: colors.APP_COLOR_WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    borderWidth: 1,
  },
  label: {
    marginVertical: 12,
    marginHorizontal: 16,
    fontSize: 16,
    fontWeight: '400',
    color: colors.APP_COLOR_BLACK,
    // fontFamily: OPENSANS_REGULAR,
  },
  line: {
    height: 1,
    backgroundColor: colors.APP_COLOR_LIGHT3,
  },
  pointer: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: colors.APP_COLOR_LIGHT3,
  },
});

export default styles;
