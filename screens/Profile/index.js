import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {colors} from '../../components/constants/constants';

import ProfileTextCard from '../../components/ProfileTextCard';
// import POPPINS_REGULAR from '../../assets/fonts';

const Profile = () => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: colors.APP_COLOR_WHITE}}>
      <View
        style={{
          backgroundColor: colors.APP_COLOR_LIGHT3,
          height: 170,
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <Text
          style={{
            // fontFamily: POPPINS_REGULAR,
            fontSize: 24,
            fontWeight: 'bold',
            textAlign: 'center',
            color: colors.APP_COLOR_BLACK,
            marginBottom: 30,
            letterSpacing: 1,
          }}>
          My Profile
        </Text>
      </View>
      <ProfileTextCard
        name={'Name'}
        value={'Muhammad Saqib'}
        onPress={values => console.log(values)}
      />
      <ProfileTextCard
        name={'Email'}
        value={'saqib@pikessoft.com'}
        onPress={values => console.log(values)}
      />
      <ProfileTextCard
        name={'Password'}
        value={'Change'}
        onPress={values => console.log(values)}
      />
      <ProfileTextCard
        name={'Profile Picture'}
        profilePicture={'https://picsum.photos/200/300'}
        onPress={values => console.log(values)}
      />
      <ProfileTextCard
        name={'Motivational Notifications'}
        radio={true}
        onPress={val => console.log(val)}
        leftTextStyle={{width: '65%'}}
      />
      <ProfileTextCard
        name={'Reminder Notifications'}
        radio={true}
        onPress={val => console.log(val)}
        leftTextStyle={{width: '65%'}}
      />
      <ProfileTextCard
        name={'Change Reminder Time'}
        cardOnPress={() => console.log('Change Reminder Time')}
        leftTextStyle={{width: '65%'}}
      />
    </ScrollView>
  );
};

export default Profile;
