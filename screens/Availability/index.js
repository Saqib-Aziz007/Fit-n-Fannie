import React, {useEffect, useState} from 'react';
import {Text, View, ScrollView, TextInput} from 'react-native';
import AppIconButton from '../../components/AppIconButton';
import AppButton from '../../components/AppButton';
import styles from './styles';
import AppSlider from '../../components/Slider';
import {GENDER_SCREEN} from '../../navigation/routes';
import LabelBox from '../../components/LabelBox';
import {OPENSANS_REGULAR} from '../../assets/fonts/fonts';
import {colors} from '../../components/constants/constants';
import AppToggleButton from '../../components/CustomButton';
import {handleLocalNotification} from '../../utils/PushNotification/PushNotification';
import ScrollTimeBox from '../../components/ScrollTimeBox';

const AvailabilityScreen = ({navigation, route}) => {
  //   console.log('AvailabilityScreen::::', route?.params);
  // const [availability, setAvailability] = useState({
  //   days: {
  //     sun: false,
  //     mon: false,
  //     tue: false,
  //     wed: false,
  //     thu: false,
  //     fri: false,
  //     sat: false,
  //   },
  //   timing: {},
  // });
  const [selected, setSelected] = useState([]);
  const hours = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
  ];
  const minutes = [
    '00',
    '05',
    '10',
    '15',
    '20',
    '25',
    '30',
    '35',
    '40',
    '45',
    '50',
    '55',
    '60',
  ];
  const AvailableDays = [];
  
  return (
    <ScrollView style={styles.scrollView}>
      <AppIconButton
        icon={'chevron-left'}
        size={32}
        onPress={() => navigation.goBack()}
      />
      <View style={{paddingHorizontal: 40, marginBottom: 0}}>
        <Text style={styles.screenTitle}>Account Setup</Text>
        <View style={styles.progressBar}></View>
        <Text style={styles.title}>When's the best exercise time for you?</Text>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
          }}>
          {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map(
            (item, index) => (
              <LabelBox
                label={item}
                position={'relative'}
                containerStyle={styles.labelBox}
                textStyle={styles.labelBoxText}
                // selected={AvailableDays.includes(item) ? true : false}
                selected={}
                inActiveBorderColor={colors.APP_SECONDARY_COLOR}
                activeBorderColor={colors.APP_PRIMARY_COLOR}
                onPress={val => {
                  // if (AvailableDays.includes(item)) {
                  //   setSelected(false);
                  //   AvailableDays.splice(index, 1);
                  //   console.log(AvailableDays, 'incase of removed');
                  //   // console.log(selected, 'removed');
                  // } else {
                  //   setSelected(index);
                  //   AvailableDays.push(item);
                  //   console.log(AvailableDays, ' incase of added');
                  //   // console.log(selected, 'added');
                  // }
                  if(selected.includes(item)){
                    console.log('item includes')
                  }else{
                    setSelected([...selected,item])
                    console.log('item not includes')
                  }
                }}
              />
            ),
          )}
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <Text
              style={{
                // fontFamily: OPENSANS_REGULAR,
                fontSize: 16,
                fontWeight: '400',
                color: colors.APP_COLOR_BLACK,
                marginTop: 24,
              }}>
              From :
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 20,
              }}>
              <View style={{alignItems: 'center'}}>
                <ScrollTimeBox
                  initialSelectedIndex={0}
                  onValueChange={({item}) => AvailableDays.push(item)}
                  containerBackgroundColor="white"
                  data={hours}
                  onValueChange={({item}) => AvailableDays.push(item)}
                />
                {/* </View> */}
                <Text
                  style={{
                    color: colors.APP_COLON_COLOR,
                    // fontFamily: OPENSANS_REGULAR,
                    fontWeight: '400',
                    fontSize: 10,
                    textAlign: 'center',
                    marginVertical: 5,
                  }}>
                  hours
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 36,
                  fontWeight: '700',
                  lineHeight: 42,
                  textAlign: 'center',
                  marginHorizontal: 6,
                  color: colors.APP_COLON_COLOR,
                }}>
                :
              </Text>
              <View style={{alignItems: 'center'}}>
                {/* <ScrollTimeBox
                  initialSelectedIndex={0}
                  onValueChange={({item}) => AvailableDays.push(item)}
                  containerBackgroundColor="white"
                  data={minutes}
                /> */}
                <Text
                  style={{
                    color: colors.APP_COLON_COLOR,
                    // fontFamily: OPENSANS_REGULAR,
                    fontWeight: '400',
                    fontSize: 10,
                    textAlign: 'center',
                    marginVertical: 5,
                  }}>
                  minute
                </Text>
              </View>
            </View>
          </View>
          <View>
            <Text
              style={{
                // fontFamily: OPENSANS_REGULAR,
                fontSize: 16,
                fontWeight: '400',
                color: colors.APP_COLOR_BLACK,
                marginTop: 24,
              }}>
              To :
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 20,
              }}>
              <View style={{alignItems: 'center'}}>
                <ScrollTimeBox
                  onValueChange={({item}) => AvailableDays.push(item)}
                  containerBackgroundColor="white"
                  initialSelectedIndex={0}
                  data={hours}
                  onValueChange={({item}) => AvailableDays.push(item)}
                />
                <Text
                  style={{
                    color: colors.APP_COLON_COLOR,
                    // fontFamily: OPENSANS_REGULAR,
                    fontWeight: '400',
                    fontSize: 10,
                    textAlign: 'center',
                    marginVertical: 5,
                  }}>
                  hours
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 36,
                  fontWeight: '700',
                  lineHeight: 42,
                  textAlign: 'center',
                  marginHorizontal: 6,
                  color: colors.APP_COLON_COLOR,
                }}>
                :
              </Text>
              <View style={{alignItems: 'center'}}>
                <ScrollTimeBox
                  onValueChange={({item}) => AvailableDays.push(item)}
                  containerBackgroundColor="white"
                  dividerWidth={0}
                  // dividerColor={'white'}
                  initialSelectedIndex={0}
                  data={minutes}
                />
                <Text
                  style={{
                    color: colors.APP_COLON_COLOR,
                    // fontFamily: OPENSANS_REGULAR,
                    fontWeight: '400',
                    fontSize: 10,
                    textAlign: 'center',
                    marginVertical: 5,
                  }}>
                  minute
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <AppToggleButton
            state1="AM"
            state2="PM"
            style={{alignSelf: 'center', marginTop: 25}}
          />
          <AppToggleButton
            state1="AM"
            state2="PM"
            style={{alignSelf: 'center', marginTop: 25}}
          />
        </View>
        <AppButton
          title={'NEXT'}
          style={{marginVertical: Platform.OS === 'ios' ? 80 : 50}}
          // onPress={() =>
          //   navigation.navigate(GENDER_SCREEN, {
          //     ...route.params,
          //     Height: Age,
          //   })
          // }
          onPress={() => {
            console.log();
          }}
        />
      </View>
      {/* <View
        style={{
          paddingHorizontal: 40,
          marginVertical: Platform.OS === 'ios' ? 100 : 50,
        }}> */}
      {/* </View> */}
    </ScrollView>
  );
};

export default AvailabilityScreen;
