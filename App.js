import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthNavigator from './navigation/AuthNavigation/AuthNavigator';
import HealthDisclaimer from './screens/HealthDisclaimer';
import HealthDisclaimer2 from './screens/HealthDisclaimer2';

const stack = createNativeStackNavigator();
const App = () => {
  return (
    // <SafeAreaView>
    //   <View>
    //     <Text>Muhammad Saqib</Text>
    //     <Text
    //       style={{
    //         fontFamily: POPPINS_ITALIC,
    //         // fontFamily: 'Poppins-Italic',
    //       }}>
    //       {API_URL + ':::::Token:::::' + API_TOKEN}
    //     </Text>
    //   </View>
    // </SafeAreaView>
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
    // <HealthDisclaimer2 />
  );
};

export default App;
