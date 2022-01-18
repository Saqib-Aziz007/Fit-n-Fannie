import React, {useState} from 'react';
import {Text, View, ScrollView} from 'react-native';
import AppIconButton from '../../components/AppIconButton';
import AppButton from '../../components/AppButton';
import {styles} from './styles';
import GenderCard from '../../components/GenderCard';
import {images} from '../../components/constants/constants';
import {FITNESS_QUIZ_SCREEN} from '../../navigation/routes';

const GenderScreen = ({navigation, route}) => {
  console.log('GenderScreen::::', route.params);
  const [selectedGender, setSelectedGender] = useState();
  return (
    <ScrollView style={styles.scrollView}>
      <AppIconButton
        icon={'chevron-left'}
        size={32}
        onPress={() => navigation.goBack()}
      />
      <View style={{paddingHorizontal: 40}}>
        <Text style={styles.screenTitle}>Account Setup</Text>
        <View style={styles.progressBar}></View>
        <Text style={styles.title}>Gender</Text>
        <GenderCard
          iconSubtitle="Male"
          image={images.male}
          onPress={val => setSelectedGender(val)}
          imageHeight={50}
          imageWidth={50}
          changeColor={selectedGender === 'Male' ? true : false}
        />
        <GenderCard
          iconSubtitle="Female"
          image={images.female}
          onPress={val => setSelectedGender(val)}
          imageHeight={55}
          imageWidth={39}
          changeColor={selectedGender === 'Female' ? true : false}
        />
        <GenderCard
          iconSubtitle="Non-binary"
          image={images.nonBinary}
          imageHeight={55}
          imageWidth={28}
          onPress={val => setSelectedGender(val)}
          changeColor={selectedGender === 'Non-binary' ? true : false}
          containerStyle={{marginBottom: 48}}
        />
      </View>
      <View
        style={{
          paddingHorizontal: 40,
          marginVertical: Platform.OS === 'ios' ? 35 : 0,
        }}>
        <AppButton
          title={'NEXT'}
          // onPress={() =>
          //   console.log('GenderScreen on submit::::', {
          //     ...route.params,
          //     GENDER: selectedGender,
          //   })
          // }
          onPress={() =>
            navigation.navigate(FITNESS_QUIZ_SCREEN, {
              ...route.params,
              Gender: selectedGender,
            })
          }
        />
      </View>
      {/* </View> */}
    </ScrollView>
  );
};

export default GenderScreen;
