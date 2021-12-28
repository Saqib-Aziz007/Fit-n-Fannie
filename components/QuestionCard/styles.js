import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  mainContainer: {
    // width: '100%',
    // height: '80%',
    // height: '100%',
    // width: '60%',
    width: width,
    height: height,
    // flex: 1,
    // backgroundColor: 'lightgreen',
    padding: 20,
    // margin: 10,
  },
  questionMainContainer: {},
  noText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '300',
  },
  questionContainer: {
    // justifyContent: 'flex-start',
    // width: '100%',
  },
  question: {
    fontWeight: 'bold',
    fontSize: 28,
    color: 'black',
  },
  optionCard: {
    backgroundColor: 'lightblue',
    marginVertical: 20,
    // width: '100%',
    paddingVertical: 20,
    // elevation: 8,
    borderRadius: 10,
    paddingHorizontal: 15,
  },
});
