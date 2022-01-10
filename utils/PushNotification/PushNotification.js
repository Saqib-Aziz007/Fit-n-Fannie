import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    GetPNToken();
  }
}

const GetPNToken = async () => {
  let PNToken = await AsyncStorage.getItem('PNToken');
  console.log(PNToken, ':::OLD TOKEN:::');
  if (!PNToken) {
    try {
      PNToken = await messaging().getToken();
      console.log(PNToken, ':::NEW TOKEN:::');
      await AsyncStorage.setItem('PNToken', PNToken);
    } catch (error) {
      console.log(error, '::::Error on PNToken::::');
    }
  }
};

export const NotificationListener = async () => {
  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    );
  });

  messaging().onMessage(async remoteMessage => {
    console.log('Notification received in foreground!!!');
  });

  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage.notification,
        );
      }
    });
};
