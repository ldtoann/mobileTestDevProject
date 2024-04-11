import React, {useEffect, useState} from 'react';
import {
  Alert,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './style';
import {SafeAreaView} from 'react-native-safe-area-context';
import data from '../../data/account.json';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
// import {
//   GoogleSignin,
//   GoogleSigninButton,
//   statusCodes,
// } from '@react-native-google-signin/google-signin';

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [error, setError] = useState('');
  // const [user, setUser] = useState({});

  // useEffect(() => {
  //   GoogleSignin.configure({
  //     webClientId:
  //       '560205871868-p657gvc3pmivfo8k6gvhsaott8a7rv9s.apps.googleusercontent.com',
  //     offlineAccess: true,
  //     forceCodeForRefreshToken: true,
  //   });
  //   isSignedIn();
  // }, []);
  // const signIn = async () => {
  //   try {
  //     await GoogleSignin.hasPlayServices();
  //     const userInfo = await GoogleSignin.signIn();
  //     console.log('hello', userInfo);
  //     setUser(userInfo);
  //   } catch (error) {
  //     console.log('message', error.message);
  //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
  //       console.log('user cancelled the login flow');
  //     } else if (error.code === statusCodes.IN_PROGRESS) {
  //       console.log('siging in');
  //     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  //       console.log('play services not available');
  //     } else {
  //       console.log('some other error happend');
  //     }
  //   }
  // };

  // const isSignedIn = async () => {
  //   const isSignedIn = await GoogleSignin.isSignedIn();
  //   if (!!isSignedIn) {
  //     getCurrentUserInfo();
  //   } else {
  //     console.log('please login');
  //   }
  // };

  // const getCurrentUserInfo = async () => {
  //   try {
  //     const userInfo = await GoogleSignin.signInSilently();
  //     console.log('edit', user);
  //     setUser(userInfo);
  //   } catch (error) {
  //     if (error.code === statusCodes.SIGN_IN_REQUIRED) {
  //       Alert.alert('user has not signed in yest');
  //       console.log('user has not signed in yest');
  //     } else {
  //       Alert.alert('something went wrong');
  //       console.log('something went wrong');
  //     }
  //   }
  // };

  // const signOut = async () => {
  //   try {
  //     await GoogleSignin.revokeAccess();
  //     await GoogleSignin.signOut();
  //     setUser({});
  //   } catch (error) {
  //     console.log('error');
  //   }
  // };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleBackButton = () => {
    setShowLoginForm(false);
  };
  const handleLogin = () => {
    setEmailError('');
    setPasswordError('');
    setError('');
    if (username !== data.username && password !== data.password) {
      setError('Adresse mail ou mot de passe incorrect.');
    } else if (username !== data.username) {
      setEmailError('Adresse mail non trouvé.');
    } else if (password !== data.password) {
      setPasswordError('Mot de passe incorrect.');
    } else {
      navigation.navigate('onboarding');
    }
  };

  const renderLogin = () => {
    if (showLoginForm) {
      return (
        <>
          <View style={styles.bottom_screen}>
            <View style={styles.bottom_screen_Form}>
              <Text style={styles.bottom_screen_Form_title}>
                Adresse mail{' '}
                {!!emailError && (
                  <Text style={styles.errorText}>{emailError}</Text>
                )}
              </Text>
              <View style={styles.bottom_screen_Form_input}>
                <Image
                  source={require('../../src/image/email.png')}
                  style={styles.bottom_screen_Form_input_icon}
                />
                <TextInput
                  placeholder="Adresse@mail.com"
                  style={styles.bottom_screen_Form_input_input}
                  onChangeText={text => setUsername(text)}
                  value={username}
                />
              </View>
            </View>
            <View style={styles.bottom_screen_Form}>
              <Text style={styles.bottom_screen_Form_title}>
                Mot de passe{' '}
                {!!passwordError && (
                  <Text style={styles.errorText}>{passwordError}</Text>
                )}
              </Text>
              <View style={styles.bottom_screen_Form_input}>
                <Image
                  source={require('../../src/image/key.png')}
                  style={styles.bottom_screen_Form_input_icon}
                />
                <TextInput
                  placeholder="Motdepasse"
                  style={styles.bottom_screen_Form_input_input}
                  onChangeText={text => setPassword(text)}
                  value={password}
                  secureTextEntry={!showPassword}
                />
                <TouchableOpacity
                  onPress={toggleShowPassword}
                  style={styles.eye}>
                  <Image source={require('../../src/image/eye-slash.png')} />
                </TouchableOpacity>
              </View>
              {!!error && <Text style={styles.errorText}>{error}</Text>}
            </View>
            <View style={styles.bottom_screen_button}>
              <TouchableOpacity
                style={styles.bottom_screen_back_button}
                onPress={handleBackButton}>
                <Image source={require('../../src/image/back_arrow.png')} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.bottom_screen_next_button}
                onPress={handleLogin}>
                <Text style={styles.bottom_screen_next_button_title}>
                  Créer mon compte
                </Text>
                <Image source={require('../../src/image/next_arrow.png')} />
              </TouchableOpacity>
            </View>
          </View>
        </>
      );
    } else {
      return (
        <>
          <View style={styles.bottom_screen2}>
            <TouchableOpacity
              style={styles.bottom_screen2_button}
              // onPress={signIn}
            >
              <Image source={require('../../src/image/google.png')} />
              <Text style={styles.bottom_screen2_button_title}>
                Connection avec Google
              </Text>
            </TouchableOpacity>
            <View>
              <View style={styles.line} />
            </View>
            <TouchableOpacity
              style={styles.bottom_screen2_button}
              onPress={() => setShowLoginForm(true)}>
              <Image source={require('../../src/image/email.png')} />
              <Text style={styles.bottom_screen2_button_title}>
                Connection avec Mail
              </Text>
            </TouchableOpacity>
          </View>
        </>
      );
    }
  };
  return (
    <>
      <KeyboardAwareScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <SafeAreaView style={styles.screen_body}>
          <View style={styles.screen_top}>
            <Image
              source={require('../../src/image/logo_brand.png')}
              style={styles.screen_top_logoBig}
            />
            <View style={styles.screen_top_content}>
              <Text style={styles.screen_top_content_text}>
                Créer un compte
              </Text>
              <Image
                style={styles.screen_top_logoText}
                source={require('../../src/image/logo_text_brand.png')}
              />
            </View>
          </View>
          <View style={styles.screen_bottom}>{renderLogin()}</View>
        </SafeAreaView>
      </KeyboardAwareScrollView>
    </>
  );
};

export default LoginScreen;
