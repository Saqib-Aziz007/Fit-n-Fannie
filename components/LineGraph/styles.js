import {StyleSheet} from 'react-native';
import {APP_WHITE} from '../../constants/constants';
import {colors} from '../constants/constants';

export const styles = StyleSheet.create({
  graphContainer: {
    backgroundColor: colors.APP_COLOR_WHITE,
    borderRadius: 10,
    alignItems: 'center',
  },
  DateRangeStyle: {
    fontSize: 18,
    fontWeight: '400',
    paddingHorizontal: 17,
    paddingTop: 27,
    // paddingVertical: 27,
  },
});
