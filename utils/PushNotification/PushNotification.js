// import messaging from '@react-native-firebase/messaging';
// import AsyncStorage from '@react-native-async-storage/async-storage';

import PushNotification from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import {colors} from '../../components/constants/constants';

// export async function requestUserPermission() {
//   const authStatus = await messaging().requestPermission();
//   const enabled =
//     authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
//     authStatus === messaging.AuthorizationStatus.PROVISIONAL;

//   if (enabled) {
//     console.log('Authorization status:', authStatus);
//     GetPNToken();
//   }
// }

// const GetPNToken = async () => {
//   let PNToken = await AsyncStorage.getItem('PNToken');
//   console.log(PNToken, ':::OLD TOKEN:::');
//   if (!PNToken) {
//     try {
//       PNToken = await messaging().getToken();
//       console.log(PNToken, ':::NEW TOKEN:::');
//       await AsyncStorage.setItem('PNToken', PNToken);
//     } catch (error) {
//       console.log(error, '::::Error on PNToken::::');
//     }
//   }
// };

// export const NotificationListener = async () => {
//   messaging().onNotificationOpenedApp(remoteMessage => {
//     console.log(
//       'Notification caused app to open from background state:',
//       remoteMessage.notification,
//     );
//   });

//   messaging().onMessage(async remoteMessage => {
//     console.log('Notification received in foreground!!!');
//   });

//   messaging()
//     .getInitialNotification()
//     .then(remoteMessage => {
//       if (remoteMessage) {
//         console.log(
//           'Notification caused app to open from quit state:',
//           remoteMessage.notification,
//         );
//       }
//     });
// };
export const handleLocalNotification = () => {
  PushNotification.localNotification({
    channelId: 'channel1',
    title: 'fit n fannie',
    message: 'Time to exercise',
    color: colors.APP_PRIMARY_COLOR,
  });

  // PushNotification.localNotificationSchedule({
  //   channelId: 'channel1',
  //   title: 'fit n fannie',
  //   message: 'pressed 10 sec ago',
  //   color: colors.APP_SECONDARY_COLOR,
  //   date: new Date(Date.now() + 10 * 1000),
  //   allowWhileIdle: true,
  // });
};
export const handleLocalSheduleNotification = () => {
  // PushNotification.localNotification({
  //   channelId: 'channel1',
  //   title: 'fit n fannie',
  //   message: 'Time to exercise',
  //   color: colors.APP_PRIMARY_COLOR,
  // });

  PushNotification.localNotificationSchedule({
    channelId: 'channel1',
    title: 'fit n fannie',
    message: 'pressed 10 sec ago',
    color: colors.APP_SECONDARY_COLOR,
    date: new Date(Date.now() + 10 * 1000),
    allowWhileIdle: true,
  });
};
