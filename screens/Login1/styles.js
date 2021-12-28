import {StyleSheet} from 'react-native';
import {colors} from '../../components/constants/constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backImage: {flex: 1},
  text1: {
    textAlign: 'center',
    color: colors.APP_COLOR_WHITE,
    fontSize: 24,
    fontWeight: '700',
    marginVertical: 10,
  },
  linearGra: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'transparent',
    opacity: 0.8,
  },
  text2: {
    textAlign: 'center',
    color: colors.APP_COLOR_WHITE,
    fontSize: 16,
    fontWeight: '400',
  },
});
