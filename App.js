import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {API_URL, API_TOKEN} from '@env';
import {POPPINS_ITALIC} from './assets/fonts/fonts';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        {/* <Text>Muhammad Saqib</Text> */}
        <Text
          style={{
            fontFamily: POPPINS_ITALIC,
            // fontFamily: 'Poppins-Italic',
          }}>
          {API_URL + ':::::Token:::::' + API_TOKEN}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
