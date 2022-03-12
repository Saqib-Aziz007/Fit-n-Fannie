import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './navigation/AuthNavigation/AuthNavigator';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import PushNotification from 'react-native-push-notification';
import HealthDisclaimer from './screens/HealthDisclaimer';
import HealthDisclaimer2 from './screens/HealthDisclaimer2';
import WeightScreen from './screens/weight';
import HeightScreen from './screens/Height';
import AgeScreen from './screens/Age';
import GenderCard from './components/GenderCard';
import {images} from './components/constants/constants';
import GenderScreen from './screens/GenderScreen';
import {SafeAreaView} from 'react-native';
import FitnessQuizScreen from './screens/FitnessQuizScreen';
import {
  requestUserPermission,
  NotificationListener,
} from './utils/PushNotification/PushNotification';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import Profile from './screens/Profile';
import GoalScreen from './screens/GoalScreen';
import AvailabilityScreen from './screens/Availability';
import ScrollTimeBox from './components/ScrollTimeBox';

const App = () => {
  const [permissions, setPermissions] = useState({});
  const [selectedItem, setSelectedItem] = useState();
  useEffect(() => {
    // const type = 'notification';
    // PushNotificationIOS.addEventListener(type, onRemoteNotification);
    // return () => {
    //   PushNotificationIOS.removeEventListener(type);
    // };
    // requestUserPermission();
    // NotificationListener();
    createChannel();
    GoogleSignin.configure({
      webClientId:
        '1073384982468-itp0fovbutlcr929etl5977f3ertitmo.apps.googleusercontent.com',
    });
  }, []);

  const createChannel = () => {
    PushNotification.createChannel({
      channelId: 'channel1',
      channelName: 'Notification Channel',
    });
  };

  const onRemoteNotification = notification => {
    const isClicked = notification.getData().userInteraction === 1;

    if (isClicked) {
      // Navigate user to another screen
    } else {
      // Do something else with push notification
    }
  };
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
    // <NavigationContainer>
    //   <AuthNavigator />
    // </NavigationContainer>

    // <SafeAreaView>
    //   <GenderCard
    //     // changeColor={false}
    //     image={images.female}
    //     onPress={val => alert(val)}
    //     imageHeight={45}
    //     imageWidth={33}
    //   />
    // </SafeAreaView>
    // <HeightScreen />
    // <ScrollTimeBox
    //   onValueChange={({item, index}) => console.log(item, 'selecteditem')}
    //   data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
    // />
    <AvailabilityScreen />
  );
};

export default App;
