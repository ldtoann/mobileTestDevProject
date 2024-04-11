import React, {useRef, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import {SafeAreaView} from 'react-native-safe-area-context';

const OnboardingCheck = ({navigation}) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isNextEnabled, setIsNextEnabled] = useState(false);
  const handleCheck = () => {
    setIsChecked(!isChecked);
    setIsNextEnabled(!isNextEnabled);
  };

  const handleNext = () => {
    navigation.navigate('bids');
  };

  const handleBack = () => {
    navigation.navigate('onboarding');
  };
  return (
    <>
      <SafeAreaView style={styles.screenCheck_body}>
        <View style={styles.screenCheck_body_image}>
          <Image
            style={styles.screenCheck_body_image_logo}
            source={require('../../src/image/logo_small.png')}
          />
        </View>
        <View style={styles.screenCheck_body_title}>
          <View style={styles.screenCheck_body_title_item}>
            <Text style={styles.screenCheck_body_title_text}>
              Conditions Générales d’Utilisation
            </Text>
          </View>
          <View style={styles.screenCheck_body_title_item}>
            <Text style={styles.screenCheck_body_title_text}>
              Conditions Générales de Ventes
            </Text>
          </View>
          <View style={styles.screenCheck_body_title_item}>
            <Text style={styles.screenCheck_body_title_text}>
              Politique de Confidentialité
            </Text>
          </View>
        </View>
        <View style={styles.screenCheck_body_check}>
          <TouchableOpacity
            style={styles.screenCheck_body_check_btn}
            onPress={handleCheck}>
            {isChecked ? (
              <Image
                source={require('../../src/image/accept.png')}
                style={styles.screenCheck_body_check_img}
              />
            ) : (
              <Image
                source={require('../../src/image/acceptno.png')}
                style={styles.screenCheck_body_check_img}
              />
            )}
          </TouchableOpacity>
          <View>
            <Text style={styles.screenCheck_body_check_title}>
              J’accepte les conditions de {'\n'}l’application
            </Text>
          </View>
        </View>
        <View style={styles.screenCheck_body_btn}>
          <TouchableOpacity
            style={styles.screenCheck_body_btn_back}
            onPress={handleBack}>
            <Image source={require('../../src/image/back_arrow.png')} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.screenCheck_body_btn_next,
              {backgroundColor: isNextEnabled ? '#4ABF40' : 'black'},
            ]}
            onPress={handleNext}
            disabled={!isNextEnabled}>
            <Text style={styles.screenCheck_body_btn_title}>Je confirme</Text>
            <Image source={require('../../src/image/next_arrow.png')} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default OnboardingCheck;
