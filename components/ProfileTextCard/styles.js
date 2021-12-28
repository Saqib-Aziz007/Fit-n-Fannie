import {StyleSheet} from 'react-native';
import {colors} from '../constants/constants';

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.APP_COLOR_LIGHT1,
    height: 80,
    marginVertical: 5,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    margin: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftText: {
    fontSize: 16,
    fontWeight: '400',
    color: 'black',
    width: '35%',
    textAlign: 'left',
  },
  rightText: {
    fontSize: 16,
    fontWeight: '400',
    width: '65%',
    color: colors.APP_SECONDARY_COLOR,
    textAlign: 'right',
    fontStyle: 'italic',
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderColor: colors.APP_COLOR_LIGHT3,
    borderWidth: 3,
  },
});
