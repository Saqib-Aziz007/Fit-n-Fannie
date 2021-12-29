import {StyleSheet} from 'react-native';
import {colors} from '../../components/constants/constants';
import {POPPINS_BOLD, POPPINS_REGULAR} from '../../assets/fonts/fonts';

export const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: colors.APP_COLOR_LIGHT2,
    paddingHorizontal: 30,
    paddingVertical: 60,
  },
  container: {
    flex: 1,
    backgroundColor: colors.APP_COLOR_LIGHT1,
    padding: 25,
  },
  disclaimer: {
    fontWeight: '400',
    fontSize: 14,
    fontFamily: POPPINS_REGULAR,
    color: colors.APP_SECONDARY_COLOR,
    marginTop: 15,
    marginBottom: 50,
    lineHeight: 25,
  },
  title: {
    color: colors.APP_SECONDARY_COLOR,
    fontWeight: '600',
    fontSize: 20,
    fontFamily: POPPINS_BOLD,
    lineHeight: 24,
  },
});
