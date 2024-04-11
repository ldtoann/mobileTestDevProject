import React, {useState} from 'react';
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './style';
import {SafeAreaView} from 'react-native-safe-area-context';
import HeaderSetting from '../../components/headerSetting/index';
import {useNavigation} from '@react-navigation/native';

const bids = () => {
  const navigation = useNavigation();
  const handleLogout = () => {
    navigation.navigate('login');
  };
  const data = [{key: '1'}];
  const renderItem = ({item}) => (
    <View>
      <View style={styles.navigationTop}>
        <Image source={require('../../src/image/arrow_left.png')} />
        <Text style={styles.firstText}>Mon Compte / </Text>
        <Text style={styles.secondText}>Mes informations</Text>
      </View>
      <View style={styles.content_top}>
        <Image
          style={styles.content_top_img}
          source={require('../../src/image/75ps.png')}
        />
        <View style={styles.content_top_content}>
          <Text style={styles.content_title}>75 % du profil est complété</Text>
          <Text style={styles.content_text}>
            Débloque une récompense en complétant {'\n'}ton profil à 100%
          </Text>
        </View>
      </View>
      <View style={styles.form_1}>
        <View style={styles.form_1_top}>
          <View style={styles.form_1_top_title}>
            <Image
              style={styles.form_1_top_title_img}
              source={require('../../src/image/info.png')}
            />
            <Text style={styles.form_1_top_title_content}>
              Informations personnelles
            </Text>
          </View>
          <Image
            style={styles.form_1_top_title_img}
            source={require('../../src/image/yes.png')}
          />
        </View>
        <View style={styles.form_1_form}>
          <View style={styles.form_1_form_top}>
            <View style={styles.form_1_form_top_left}>
              <Text style={styles.form_1_form_top_left_text}>
                Avatar ou Photo
              </Text>
              <Image
                source={require('../../src/image/pen.png')}
                style={styles.form_1_form_top_left_text_pen}
              />
              <Image
                source={require('../../src/image/avatar.png')}
                style={styles.form_1_form_top_left_text_ava}
              />
            </View>
            <View style={styles.form_1_form_top_right}>
              <View style={styles.form_1_form_top_right_input}>
                <Text style={styles.form_1_form_top_right_input_label}>
                  Nom
                </Text>
                <View style={styles.form_1_form_top_right_input_input}>
                  <Image
                    source={require('../../src/image/user_account.png')}
                    style={styles.userIcon}
                  />
                  <TextInput
                    placeholder="Nom ou Username"
                    style={styles.inputName}
                  />
                  <Image
                    source={require('../../src/image/pencil.png')}
                    style={styles.pen}
                  />
                </View>
              </View>
              <View style={styles.form_1_form_top_right_input}>
                <Text style={styles.form_1_form_top_right_input_label}>
                  Inscription
                </Text>
                <View style={styles.form_1_form_top_right_input_input}>
                  <Image
                    source={require('../../src/image/calendar_account.png')}
                    style={styles.userIcon}
                  />
                  <TextInput
                    placeholder="Date d’inscription"
                    style={styles.inputName}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.form_1_form_bottom}>
            <View style={styles.form_1_form_top_right_input}>
              <Text style={styles.form_1_form_top_right_input_label}>
                Adresse mail
              </Text>
              <View style={styles.form_1_form_top_right_input_input}>
                <Image
                  source={require('../../src/image/email.png')}
                  style={styles.userIcon}
                />
                <TextInput
                  placeholder="Adresse@mail.com"
                  style={styles.inputName_bottom}
                />
                <Image
                  source={require('../../src/image/pencil.png')}
                  style={styles.pen}
                />
              </View>
            </View>
            <View style={styles.form_1_form_top_right_input}>
              <Text style={styles.form_1_form_top_right_input_label}>
                Mot de passe
              </Text>
              <View style={styles.form_1_form_top_right_input_input}>
                <Image
                  source={require('../../src/image/key.png')}
                  style={styles.userIcon}
                />
                <TextInput
                  placeholder="**********"
                  style={styles.inputName_bottom}
                />
                <Image
                  source={require('../../src/image/pencil.png')}
                  style={styles.pen}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.form_1}>
        <View style={styles.form_1_top}>
          <View style={styles.form_1_top_title}>
            <Image
              style={styles.form_1_top_title_img}
              source={require('../../src/image/map.png')}
            />
            <Text style={styles.form_1_top_title_content}>
              Adresse de livraison
            </Text>
          </View>
          <Image
            style={styles.form_1_top_title_img}
            source={require('../../src/image/yes.png')}
          />
        </View>
        <View style={styles.form_1_form}>
          <View style={styles.form_1_form_bottom}>
            <View style={styles.form_1_form_top_right_input}>
              <Text style={styles.form_1_form_top_right_input_label}>Rue</Text>
              <View style={styles.form_1_form_top_right_input_input}>
                <Image
                  source={require('../../src/image/location.png')}
                  style={styles.userIcon}
                />
                <TextInput placeholder="Rue" style={styles.inputName_bottom} />
                <Image
                  source={require('../../src/image/pencil.png')}
                  style={styles.pen}
                />
              </View>
            </View>
            <View style={styles.form_1_form_top_right_input}>
              <Text style={styles.form_1_form_top_right_input_label}>
                Numéro
              </Text>
              <View style={styles.form_1_form_top_right_input_input}>
                <Image
                  source={require('../../src/image/location.png')}
                  style={styles.userIcon}
                />
                <TextInput
                  placeholder="Numéro"
                  style={styles.inputName_bottom}
                />
                <Image
                  source={require('../../src/image/pencil.png')}
                  style={styles.pen}
                />
              </View>
            </View>
            <View style={styles.form_1_form_top_right_input2}>
              <View style={styles.form_1_form_top_right_input2_item}>
                <Text style={styles.form_1_form_top_right_input_label}>
                  Ville
                </Text>
                <View style={styles.form_1_form_top_right_input_input}>
                  <Image
                    source={require('../../src/image/location.png')}
                    style={styles.userIcon}
                  />
                  <TextInput
                    placeholder="Ville"
                    style={styles.inputName_bottom2}
                  />
                  <Image
                    source={require('../../src/image/pencil.png')}
                    style={styles.pen}
                  />
                </View>
              </View>
              <View style={styles.form_1_form_top_right_input2_item}>
                <Text style={styles.form_1_form_top_right_input_label}>
                  Code postal
                </Text>
                <View style={styles.form_1_form_top_right_input_input}>
                  <Image
                    source={require('../../src/image/location.png')}
                    style={styles.userIcon}
                  />
                  <TextInput
                    placeholder="Code postal"
                    style={styles.inputName_bottom2}
                  />
                  <Image
                    source={require('../../src/image/pencil.png')}
                    style={styles.pen}
                  />
                </View>
              </View>
            </View>
            <View style={styles.form_1_form_top_right_input}>
              <Text style={styles.form_1_form_top_right_input_label}>Pays</Text>
              <View style={styles.form_1_form_top_right_input_input}>
                <Image
                  source={require('../../src/image/flag.png')}
                  style={styles.userIcon}
                />
                <TextInput
                  placeholder="France"
                  style={styles.inputName_bottom}
                />
                <Image
                  source={require('../../src/image/arrow_down.png')}
                  style={styles.pen}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.form_1}>
        <View style={styles.form_1_top}>
          <View style={styles.form_1_top_title}>
            <Image
              style={styles.form_1_top_title_img}
              source={require('../../src/image/credit_card.png')}
            />
            <Text style={styles.form_1_top_title_content}>Paiement</Text>
          </View>
          <Image
            style={styles.form_1_top_title_img}
            source={require('../../src/image/exclamation.png')}
          />
        </View>
        <View style={styles.form_1_form}>
          <View style={styles.form_1_form_bottom}>
            <View style={styles.form_1_form_top_right_input}>
              <Text style={styles.form_1_form_top_right_input_label1}>
                Nom du titulair
              </Text>
              <View style={styles.form_1_form_top_right_input_input}>
                <TextInput
                  placeholder="Nom du titulair"
                  style={styles.inputName_bottom3}
                />
                <Image
                  source={require('../../src/image/pencil.png')}
                  style={styles.pen}
                />
              </View>
            </View>
            <View style={styles.form_1_form_top_right_input}>
              <Text style={styles.form_1_form_top_right_input_label1}>
                Numéro de carte
              </Text>
              <View style={styles.form_1_form_top_right_input_input}>
                <TextInput
                  placeholder="Numéro de carte"
                  style={styles.inputName_bottom3}
                />
                <Image
                  source={require('../../src/image/pencil.png')}
                  style={styles.pen}
                />
              </View>
            </View>
            <View style={styles.form_1_form_top_right_input2}>
              <View style={styles.form_1_form_top_right_input2_item}>
                <Text style={styles.form_1_form_top_right_input_label1}>
                  Date d’expiration
                </Text>
                <View style={styles.form_1_form_top_right_input_input}>
                  <TextInput
                    placeholder="Exp."
                    style={styles.inputName_bottom4}
                  />
                  <Image
                    source={require('../../src/image/pencil.png')}
                    style={styles.pen}
                  />
                </View>
              </View>
              <View style={styles.form_1_form_top_right_input2_item}>
                <Text style={styles.form_1_form_top_right_input_label1}>
                  CCV
                </Text>
                <View style={styles.form_1_form_top_right_input_input}>
                  <TextInput
                    placeholder="***"
                    style={styles.inputName_bottom4}
                  />
                  <Image
                    source={require('../../src/image/pencil.png')}
                    style={styles.pen}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.btn_bottom}>
        <TouchableOpacity style={styles.buttonGreen}>
          <Image source={require('../../src/image/reload.png')} />
          <Text style={styles.buttonGreenText}>Mettre à jour</Text>
        </TouchableOpacity>
        <View style={styles.line} />
        <TouchableOpacity onPress={handleLogout} style={styles.buttonBlue}>
          <Image source={require('../../src/image/exit.png')} />
          <Text style={styles.buttonGreenText}>Se déconnecter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  return (
    <>
      <SafeAreaView style={styles.screen_bids}>
        <HeaderSetting />
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.key}
          contentContainerStyle={styles.scrollViewContent}
        />
      </SafeAreaView>
    </>
  );
};

export default bids;
