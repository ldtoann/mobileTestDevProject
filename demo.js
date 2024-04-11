import React, {useEffect, useRef, useState} from 'react';
import {Animated, Image, Text, TouchableOpacity, View} from 'react-native';
// import styles from './style';
import {SafeAreaView} from 'react-native-safe-area-context';

const ProductCarousel = ({navigation}) => {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [fadeAnim] = useState(new Animated.Value(1));

  const productsData = [
    {
      image: require('./src/image/logo_brand.png'),
      image2: require('./src/image/logo_text_brand.png'),
      title: 'Bienvenue sur',
      content: "L'app d’enchère la plus folle !",
    },
    {
      image: require('./src/image/logo_pig.png'),
      title: 'Fais des économies\navec nos super\noffres',
      content:
        'Retrouve tes produits préférés et des\nexclusivités que ne trouveras nulle part\nailleurs.',
    },
    {
      image: require('./src/image/logo_hammer.png'),
      title: 'Participe à des\nenchères de folie',
      content:
        'Tiens-toi prêt à miser n’importe où,\nn’importe quand avec des enchères à\ndurée ultra-limitée.',
    },
  ];

  const onNext = () => {
    if (currentProductIndex === 2) {
      navigation.navigate('onboardingCheck');
    } else {
      setCurrentProductIndex(prevIndex =>
        prevIndex === productsData.length - 1 ? 0 : prevIndex + 1,
      );
    }
  };

  const onBack = () => {
    setCurrentProductIndex(prevIndex =>
      prevIndex > 0 ? prevIndex - 1 : prevIndex,
    );
  };
  // const onNext = () => {
  //   if (currentProductIndex === 2) {
  //     navigation.navigate('onboardingCheck');
  //   } else {
  //     Animated.timing(fadeAnim, {
  //       toValue: 0.1,
  //       duration: 500,
  //       useNativeDriver: true,
  //     }).start(() => {
  //       setCurrentProductIndex(prevIndex => prevIndex + 1);
  //       Animated.timing(fadeAnim, {
  //         toValue: 1,
  //         duration: 900,
  //         useNativeDriver: true,
  //       }).start();
  //     });
  //   }
  // };

  // const onBack = () => {
  //   if (currentProductIndex > 0) {
  //     Animated.timing(fadeAnim, {
  //       toValue: 0.1,
  //       duration: 500,
  //       useNativeDriver: true,
  //     }).start(() => {
  //       setCurrentProductIndex(prevIndex => prevIndex - 1);
  //       Animated.timing(fadeAnim, {
  //         toValue: 2,
  //         duration: 900,
  //         useNativeDriver: true,
  //       }).start();
  //     });
  //   }
  // };
  return (
    <SafeAreaView style={styles.screen_body}>
      <View style={styles.screen_body_top}>
        <View style={styles.onboardingScreen_image}>
          <Animated.Image
            style={[styles.onboardingScreen_image_logo, {opacity: fadeAnim}]}
            source={productsData[currentProductIndex].image}
          />
        </View>
        <Animated.Text
          style={[styles.onboardingScreen_title_text, {opacity: fadeAnim}]}>
          {productsData[currentProductIndex].title}
        </Animated.Text>
        {currentProductIndex === 0 && (
          <Animated.Image
            style={[styles.onboardingScreen_title_logo, {opacity: fadeAnim}]}
            source={productsData[currentProductIndex].image2}
          />
        )}
        <View style={styles.onboardingScreen_content}>
          <Animated.Text
            style={[styles.onboardingScreen_content_text, {opacity: fadeAnim}]}>
            {productsData[currentProductIndex].content}
          </Animated.Text>
        </View>
      </View>
      <View style={styles.screen_body_bottom}>
        <TouchableOpacity
          style={styles.screen_body_bottom_btn}
          onPress={onBack}
          disabled={currentProductIndex === 0}>
          <Image
            source={require('./src/image/back_arrow.png')}
            style={styles.screen_body_bottom_back_btn}
          />
        </TouchableOpacity>
        <View style={styles.dot_list}>
          {[...Array(5)].map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot_mang,
                {
                  backgroundColor:
                    index === currentProductIndex ? 'white' : '#56698F',
                },
              ]}
            />
          ))}
        </View>
        <TouchableOpacity
          style={styles.screen_body_bottom_next}
          onPress={onNext}
          disabled={currentProductIndex === 2}>
          <Image
            source={require('./src/image/next_arrow.png')}
            style={styles.screen_body_bottom_next_btn}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProductCarousel;
