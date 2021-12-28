import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    margin: 20,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    elevation: 20,
    overflow: 'hidden',
    borderRadius: 15,
    height: 100,
    width: 100,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 15,
    justifyContent: 'center',
  },
  heading: {
    fontWeight: '300',
    fontSize: 16,
    color: 'black',
  },
  title: {
    fontWeight: '700',
    fontSize: 20,
    color: 'black',
  },
  subTitle: {
    fontWeight: '400',
    fontSize: 16,
    color: 'black',
  },
  lock: {},
});
