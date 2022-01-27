import {StyleSheet} from 'react-native';
import {OPENSANS_REGULAR, POPPINS_BOLD} from '../../assets/fonts/fonts';
import {colors} from '../../components/constants/constants';

const styles = StyleSheet.create({
  scrollView: {backgroundColor: colors.APP_COLOR_LIGHT1, flex: 1},
  container: {paddingHorizontal: 30, marginTop: 50},
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
  labelBox: {
    height: 48,
    width: 48,
    paddingHorizontal: 0,
    paddingVertical: 0,
    // borderColor: colors.APP_SECONDARY_COLOR,
    backgroundColor: colors.APP_COLOR_LIGHT1,
    // marginHorizontal: 16,
  },
  labelBoxText: {
    // fontFamily: OPENSANS_REGULAR,
    fontWeight: '400',
    lineHeight: 16,
    textAlign: 'center',
    color: colors.APP_SECONDARY_COLOR,
    marginHorizontal: 0,
    marginVertical: 0,
  },
  emptyBox: {
    height: 48,
    width: 48,
    paddingHorizontal: 0,
    paddingVertical: 0,
    borderColor: colors.APP_COLOR_LIGHT1,
    backgroundColor: colors.APP_COLOR_LIGHT1,
    marginLeft: 24,
    elevation: 0,
    shadowColor: colors.APP_COLOR_LIGHT1,
  },
  emptyBoxLabel: {
    fontWeight: '400',
    lineHeight: 16,
    textAlign: 'center',
    color: colors.APP_COLOR_LIGHT1,
    marginHorizontal: 0,
    marginVertical: 0,
  },
  next: {
    justifyContent: 'flex-end',
    height: '45%',
    paddingHorizontal: 25,
  },
  subTitle: {
    // fontFamily: OPENSANS_REGULAR,
    fontWeight: '400',
    fontSize: 32,
    lineHeight: 30,
    textAlign: 'center',
    marginTop: 50,
    color: colors.APP_SECONDARY_COLOR,
  },
});

export default styles;
