import {StyleSheet} from 'react-native';
import {colors} from '../../components/constants/constants';

export const styles = StyleSheet.create({
  logocontainer: {
    backgroundColor: colors.APP_COLOR_LIGHT2,
    height: '50%',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    justifyContent: 'center',
  },

  logo: {
    alignItems: 'center',
    marginBottom: 25,
  },
  tagline: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '400',
    color: colors.APP_SECONDARY_COLOR,
  },
  formcontainer: {
    marginHorizontal: 50,
    marginBottom: 10,
  },

  socialbuttoncontainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 25,
    paddingHorizontal: 30,
    // marginVertical: -5,
  },
  lastlinecontainer: {width: '100%', alignItems: 'center'},
  lastline: {fontSize: 11, fontWeight: '400'},
});
