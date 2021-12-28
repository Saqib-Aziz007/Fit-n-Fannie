import {StyleSheet} from 'react-native';
import {colors} from '../../components/constants/constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.APP_PRIMARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animationContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  animation: {
    height: 200,
    width: 200,
    alignSelf: 'center',
  },
  text: {
    fontWeight: '700',
    fontSize: 30,
    color: colors.APP_COLOR_WHITE,
    alignSelf: 'center',
  },
});
