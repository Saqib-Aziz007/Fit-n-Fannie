import {StyleSheet} from 'react-native';
import {OPENSANS_REGULAR, POPPINS_BOLD} from '../../assets/fonts/fonts';
import {colors} from '../../components/constants/constants';

export const styles = StyleSheet.create({
  scrollView: {backgroundColor: colors.APP_COLOR_LIGHT1, flex: 1},
  container: {backgroundColor: 'red', flex: 1},
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
    width: '80%',
    marginTop: 30,
    alignSelf: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    lineHeight: 45,
    fontFamily: POPPINS_BOLD,
    marginTop: 80,
    textAlign: 'center',
  },
  next: {
    justifyContent: 'flex-end',
    // height: '25%',
    paddingHorizontal: 40,
    // marginVertical: 20,
  },
});
