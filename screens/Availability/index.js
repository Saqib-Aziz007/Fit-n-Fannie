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

const AvailabilityScreen = ({navigation, route}) => {
  //   console.log('AvailabilityScreen::::', route?.params);
  const [availability, setAvailability] = useState({
    days: {
      sun: false,
      mon: false,
      tue: false,
      wed: false,
      thu: false,
      fri: false,
      sat: false,
    },
    timing: {},
  });
  const availabilityDays = [];
  useEffect(() => {}, [availabilityDays]);

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
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <LabelBox
            label={'SUN'}
            position={'relative'}
            containerStyle={styles.labelBox}
            textStyle={styles.labelBoxText}
            selected={availabilityDays.includes('SUN')}
            inActiveBorderColor={colors.APP_SECONDARY_COLOR}
            activeBorderColor={colors.APP_PRIMARY_COLOR}
            onPress={val =>
              // setAvailability({
              //   days: {...availability.days, sun: !availability?.days?.sun},
              // })
              {
                const index = availabilityDays.indexOf('SUN');
                console.log(index);
                if (index > -1) {
                  availabilityDays.splice(index, 1);
                  console.log(availabilityDays, 'removed');
                } else {
                  availabilityDays.push('SUN');
                  console.log(availabilityDays, 'added');
                }
              }
            }
          />
          <LabelBox
            label={'MON'}
            position={'relative'}
            containerStyle={{
              ...styles.labelBox,
              marginLeft: 24,
              marginVertical: 16,
            }}
            textStyle={styles.labelBoxText}
            selected={availability?.days?.mon}
            inActiveBorderColor={colors.APP_SECONDARY_COLOR}
            activeBorderColor={colors.APP_PRIMARY_COLOR}
            onPress={val =>
              setAvailability({
                days: {...availability.days, mon: !availability?.days?.mon},
              })
            }
          />
          <LabelBox
            label={'TUE'}
            position={'relative'}
            containerStyle={{...styles.labelBox, marginLeft: 24}}
            textStyle={styles.labelBoxText}
            selected={availability?.days?.tue}
            inActiveBorderColor={colors.APP_SECONDARY_COLOR}
            activeBorderColor={colors.APP_PRIMARY_COLOR}
            onPress={val =>
              setAvailability({
                days: {...availability.days, tue: !availability?.days?.tue},
              })
            }
          />
          <LabelBox
            label={'WED'}
            position={'relative'}
            containerStyle={{...styles.labelBox, marginLeft: 24}}
            textStyle={styles.labelBoxText}
            inActiveBorderColor={colors.APP_SECONDARY_COLOR}
            activeBorderColor={colors.APP_PRIMARY_COLOR}
            selected={availability?.days?.wed}
            onPress={val =>
              setAvailability({
                days: {...availability.days, wed: !availability?.days?.wed},
              })
            }
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <LabelBox
            label={'THU'}
            position={'relative'}
            containerStyle={styles.labelBox}
            textStyle={styles.labelBoxText}
            selected={availability?.days?.thu}
            inActiveBorderColor={colors.APP_SECONDARY_COLOR}
            activeBorderColor={colors.APP_PRIMARY_COLOR}
            onPress={val =>
              setAvailability({
                days: {...availability.days, thu: !availability?.days?.thu},
              })
            }
          />
          <LabelBox
            label={'FRI'}
            position={'relative'}
            containerStyle={{...styles.labelBox, marginLeft: 24}}
            textStyle={styles.labelBoxText}
            selected={availability?.days?.fri}
            inActiveBorderColor={colors.APP_SECONDARY_COLOR}
            activeBorderColor={colors.APP_PRIMARY_COLOR}
            onPress={val =>
              setAvailability({
                days: {...availability.days, fri: !availability?.days?.fri},
              })
            }
          />
          <LabelBox
            label={'SAT'}
            position={'relative'}
            containerStyle={{...styles.labelBox, marginLeft: 24}}
            textStyle={styles.labelBoxText}
            selected={availability?.days?.sat}
            inActiveBorderColor={colors.APP_SECONDARY_COLOR}
            activeBorderColor={colors.APP_PRIMARY_COLOR}
            onPress={val =>
              setAvailability({
                days: {...availability.days, sat: !availability?.days?.sat},
              })
            }
          />
          <LabelBox
            label={'SAT'}
            position={'relative'}
            containerStyle={styles.emptyBox}
            textStyle={styles.emptyBoxLabel}
            inActiveBorderColor={colors.APP_COLOR_LIGHT1}
            activeBorderColor={colors.APP_PRIMARY_COLOR}
            onPress={() => console.log('ignore on availability screen')}
          />
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
                <TextInput
                  numOfLines={1}
                  keyboardType={'numeric'}
                  style={{
                    height: 56,
                    width: 56,
                    backgroundColor: colors.APP_COLOR_WHITE,
                    borderRadius: 16,
                    padding: 9,
                    color: colors.APP_SECONDARY_COLOR,
                    fontSize: 32,
                    textAlign: 'center',
                  }}
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
                <TextInput
                  numOfLines={1}
                  keyboardType={'numeric'}
                  style={{
                    height: 56,
                    width: 56,
                    backgroundColor: colors.APP_COLOR_WHITE,
                    borderRadius: 16,
                    padding: 9,
                    color: colors.APP_SECONDARY_COLOR,
                    fontSize: 32,
                    textAlign: 'center',
                  }}
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
                <TextInput
                  numOfLines={1}
                  keyboardType={'numeric'}
                  style={{
                    height: 56,
                    width: 56,
                    backgroundColor: colors.APP_COLOR_WHITE,
                    borderRadius: 16,
                    padding: 9,
                    color: colors.APP_SECONDARY_COLOR,
                    fontSize: 32,
                    textAlign: 'center',
                  }}
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
                <TextInput
                  numOfLines={1}
                  keyboardType={'numeric'}
                  style={{
                    height: 56,
                    width: 56,
                    backgroundColor: colors.APP_COLOR_WHITE,
                    borderRadius: 16,
                    padding: 9,
                    color: colors.APP_SECONDARY_COLOR,
                    fontSize: 32,
                    textAlign: 'center',
                  }}
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
            availabilityDays.push();
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
