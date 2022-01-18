import {StyleSheet} from 'react-native';
import {colors} from '../../components/constants/constants';

export const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: colors.APP_COLOR_LIGHT1,
  },
  backButton: {
    backgroundColor: colors.APP_COLOR_LIGHT2,
    width: '100%',
    height: 400,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  heading: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.APP_SECONDARY_COLOR,
    alignSelf: 'flex-start',
  },
  disclaimer: {
    marginTop: 50,
    paddingHorizontal: 50,
    justifyContent: 'center',
  },
  disclaimerButton: {
    flexDirection: 'row',
    paddingVertical: 50,
    paddingRight: 30,
  },
  checkbox: {width: 20, height: 20, marginRight: 20},
});
