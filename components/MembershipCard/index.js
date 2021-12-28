import React from 'react';
import {Text, View} from 'react-native';
import AppSocialButton from '../AppSocialButton.js';
import AppText from '../AppText';
import {styles} from './styles';

const MembershipCard = ({
  onPress,
  planType = 'Monthly Plan',
  planPrice = '0.00',
  planDescription = 'Unlimited 5 minute workouts',
}) => {
  return (
    <View style={styles.membershipCard}>
      <View style={styles.amountContainerStyle}>
        <View style={{justifyContent: 'center'}}>
          <AppText>{planType}</AppText>
          <Text style={{fontSize: 14, fontWeight: '400'}}>
            7-Day Free Trial
          </Text>
        </View>
        <View style={{justifyContent: 'center'}}>
          <AppText>${planPrice}</AppText>
          <Text style={{fontSize: 14, fontWeight: '400'}}>+ tax</Text>
        </View>
      </View>
      <Text style={{paddingVertical: 30}}>* {planDescription}</Text>
      <View style={{alignItems: 'center'}}>
        <AppSocialButton title={'SELECT'} onPress={onPress} />
      </View>
    </View>
  );
};

export default MembershipCard;
