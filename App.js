import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthNavigator from './navigation/TabNavigator/AuthNavigator';

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
<<<<<<< HEAD
    // <NavigationContainer>
    //   <TabNavigator />
    // </NavigationContainer>
    <HealthDisclaimer />
=======
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
    // <HealthDisclaimer2 />
>>>>>>> b3c416163dc8be2cb9221c8e198ef844795767c3
  );
};

export default App;
