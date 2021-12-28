import {StyleSheet} from 'react-native';
import {colors} from '../constants/constants';

export const styles = StyleSheet.create({
  dividercontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  divider: {
    height: 2,
    // width: '30%',
    flex: 1,
    backgroundColor: colors.APP_SECONDARY_COLOR,
  },
  dividertext: {
    color: colors.APP_SECONDARY_COLOR,
    fontSize: 16,
    fontWeight: '400',
    marginHorizontal: 20,
  },
});
