import {StyleSheet} from 'react-native';
import {colors} from '../constants/constants';

export const styles = StyleSheet.create({
  socialbutton: {
    height: 50,
    width: 150,
    borderColor: colors.APP_PRIMARY_COLOR,
    borderWidth: 3,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  socialbuttontitle: {
    color: colors.APP_PRIMARY_COLOR,
    fontSize: 20,
    fontWeight: 'bold',
  },
  icon: {
    paddingHorizontal: 10,
  },
});
