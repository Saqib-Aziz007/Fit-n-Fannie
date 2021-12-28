import {StyleSheet} from 'react-native';
import {colors} from '../constants/constants';

export const styles = StyleSheet.create({
  SecondaryAppButton: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 32,
    backgroundColor: colors.APP_PRIMARY_COLOR,
    marginVertical: 10,
  },
  SecondaryAppButtonTitle: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    color: colors.APP_COLOR_WHITE,
  },
  PrimaryAppButton: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 32,
    backgroundColor: colors.APP_COLOR_LIGHT3,
    marginVertical: 10,
  },
  PrimaryAppButtonTitle: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    color: colors.APP_COLOR_WHITE,
  },
  PrimayOutlinedButton: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 32,
    borderColor: colors.APP_COLOR_LIGHT3,
    borderWidth: 3,
    marginVertical: 10,
  },
  PrimayOutlinedButtonTitle: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    color: colors.APP_COLOR_LIGHT3,
  },
  SecondaryOutlinedButton: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 32,
    borderColor: colors.APP_PRIMARY_COLOR,
    borderWidth: 3,
    marginVertical: 10,
  },
  SecondaryOutlinedButtonTitle: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    color: colors.APP_PRIMARY_COLOR,
  },
});
