import {StyleSheet} from 'react-native';
import {colors} from '../../components/constants/constants';

export const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: colors.APP_COLOR_LIGHT2,
  },
  container: {
    flex: 1,
    // backgroundColor: colors.APP_COLOR_LIGHT2,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  titleContainer: {
    justifyContent: 'center',
    // backgroundColor: 'red',
    flex: 1,
    // width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 30,
  },
});
