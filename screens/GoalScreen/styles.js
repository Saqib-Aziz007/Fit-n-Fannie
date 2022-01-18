import {Platform, StyleSheet} from 'react-native';
import {OPENSANS_REGULAR, POPPINS_BOLD} from '../../assets/fonts/fonts';
import {colors} from '../../components/constants/constants';

export const styles = StyleSheet.create({
  scrollView: {backgroundColor: colors.APP_COLOR_LIGHT1, flex: 1},
  container: {
    paddingHorizontal: 40,
    marginTop: Platform.OS === 'ios' ? 50 : 20,
  },
  screenTitle: {
    textAlign: 'center',
    // fontFamily: OPENSANS_REGULAR,
    fontWeight: '700',
    fontSize: 14,
    color: colors.APP_SECONDARY_COLOR,
    lineHeight: 19,
  },
  progressBar: {
    height: 2,
    backgroundColor: colors.APP_SECONDARY_COLOR,
    width: '100%',
    marginTop: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 30,
    // fontFamily: POPPINS_BOLD,
    marginTop: 80,
    textAlign: 'center',
    color: colors.APP_SECONDARY_COLOR,
  },
  input: {
    height: 368,
    width: 174,
    alignSelf: 'center',
    marginTop: 30,
  },
  next: {
    justifyContent: 'flex-end',
    // height: '45%',
    paddingHorizontal: 25,
  },
  subTitle: {
    // fontFamily: OPENSANS_REGULAR,
    fontWeight: '400',
    fontSize: 32,
    lineHeight: 30,
    textAlign: 'center',
    marginTop: 50,
  },
});
