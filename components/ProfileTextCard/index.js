import React, {useState} from 'react';
import {
  Alert,
  Image,
  Switch,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {colors} from '../constants/constants';
import {styles} from './styles';

const ProfileTextCard = ({
  name,
  value,
  profilePicture,
  containerStyle,
  leftTextStyle,
  rightTextStyle,
  imageStyle,
  radio,
  onPress,
  cardOnPress,
}) => {
  const [switchValue, setSwitchValue] = useState(false);
  return (
    <TouchableOpacity onPress={() => cardOnPress}>
      <View style={[styles.mainContainer, containerStyle]}>
        <View style={styles.rowContainer}>
          <Text style={[styles.leftText, leftTextStyle]}>{name}</Text>
          <TouchableOpacity
            onPress={() =>
              radio
                ? onPress(!switchValue)
                : profilePicture
                ? onPress(profilePicture)
                : onPress(value)
            }>
            {value ? (
              <Text style={[styles.rightText, rightTextStyle]}>{value}</Text>
            ) : profilePicture ? (
              <Image
                source={{uri: profilePicture}}
                style={[styles.image, imageStyle]}
              />
            ) : radio ? (
              <Switch
                onValueChange={value => {
                  onPress(value);
                  setSwitchValue(value);
                }}
                trackColor={{
                  false: colors.APP_COLOR_LIGHT3,
                  true: colors.APP_COLOR_LIGHT3,
                }}
                ios_backgroundColor={colors.APP_COLOR_LIGHT3}
                thumbColor={colors.APP_SECONDARY_COLOR}
                value={switchValue}
              />
            ) : null}
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProfileTextCard;

{
  /* <>
            {value && (
              <Text style={[styles.rightText, rightTextStyle]}>{value}</Text>
            )}

            {profilePicture && (
              <Image
                source={profilePicture}
                style={[styles.image, imageStyle]}
              />
            )}
            {radio && (
              <Switch
                onValueChange={value => (
                  console.log(value), setSwitchValue(value)
                )}
                trackColor={{
                  false: colors.primarydark3,
                  true: colors.primarydark3,
                }}
                ios_backgroundColor={colors.primarydark3}
                thumbColor={colors.secondary1}
                value={switchValue}
              />
            )}
          </> */
}
