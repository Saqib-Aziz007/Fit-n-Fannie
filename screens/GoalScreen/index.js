import React, {useState} from 'react';
import {Text, View, ScrollView, Image} from 'react-native';
import AppIconButton from '../../components/AppIconButton';
import AppButton from '../../components/AppButton';
import {styles} from './styles';
import LabelBox from '../../components/LabelBox';

const GoalScreen = ({navigation, route}) => {
  console.log('GoalScreen::::', route?.params);
  const [selected, setSelected] = useState({
    chest: false,
    butt: false,
    arms: false,
    belly: false,
    legs: false,
  });
  return (
    <ScrollView style={styles.scrollView}>
      <AppIconButton
        icon={'chevron-left'}
        size={32}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <View>
          <Text style={styles.screenTitle}>Account Setup</Text>
          <View style={styles.progressBar}></View>
          <Text style={styles.title}>What would you like to work on?</Text>
          <View>
            <Image
              source={require('../../assets/images/noun_human_body.png')}
              style={styles.input}
            />
            <LabelBox
              label={'Chest'}
              top={100}
              left={10}
              rightPointer={true}
              selected={selected.chest}
              onPress={() => setSelected({...selected, chest: !selected.chest})}
            />
            <LabelBox
              label={'Butt'}
              top={190}
              left={10}
              rightPointer={true}
              selected={selected.butt}
              onPress={() => setSelected({...selected, butt: !selected.butt})}
            />
            <LabelBox
              label={'Arms'}
              top={100}
              right={10}
              pointerWidth={25}
              leftPointer={true}
              selected={selected.arms}
              onPress={() => setSelected({...selected, arms: !selected.arms})}
            />
            <LabelBox
              label={'Belly'}
              top={160}
              right={10}
              pointerWidth={70}
              leftPointer={true}
              selected={selected.belly}
              onPress={() => setSelected({...selected, belly: !selected.belly})}
            />
            <LabelBox
              label={'Legs'}
              top={240}
              right={10}
              pointerWidth={48}
              leftPointer={true}
              selected={selected.legs}
              onPress={() => setSelected({...selected, legs: !selected.legs})}
            />
          </View>
        </View>
        <View style={styles.next}>
          <AppButton
            title={'NEXT'}
            style={{marginBottom: 40}}
            onPress={() =>
              console.log('GoalScreen on submit::::', {
                ...route.params,
                goals: selected,
              })
            }
            // onPress={() =>
            //   navigation.navigate(GOALSCREEN, {
            //     ...route.params,
            //     Age: Age,
            //   })
            // }
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default GoalScreen;
