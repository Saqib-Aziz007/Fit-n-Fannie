import {StyleSheet} from 'react-native';
import {colors} from '../constants/constants';

export const styles = StyleSheet.create({
  membershipCard: {
    // width: '100%',
    height: '35%',
    borderWidth: 2,
    borderColor: colors.APP_SECONDARY_COLOR,
    borderRadius: 15,
    marginVertical: 15,
    padding: 20,
    justifyContent: 'center',
  },
  amountContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
