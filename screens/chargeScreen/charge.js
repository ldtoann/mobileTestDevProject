import React, {useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './style';
import {SafeAreaView} from 'react-native-safe-area-context';
import HeaderUser from '../../components/headerUser/index';
import ListPRD1 from '../../components/listPR1/index';

const bids = () => {
  const data = [{key: '1'}];
  const renderItem = ({item}) => (
    <View style={styles.screen_charge}>
      <View style={styles.screen_charge_top}>
        <View style={styles.screen_charge_top_left}>
          <Text style={styles.screen_charge_top_left_title}>43</Text>
          <Image
            style={styles.screen_charge_top_left_img}
            source={require('../../src/image/cois_charge.png')}
          />
        </View>
        <View style={styles.screen_charge_top_right}>
          <Text style={styles.screen_charge_top_right_title}>
            Plus de QOQO’s ?
          </Text>
          <Image
            style={styles.screen_charge_top_right_img}
            source={require('../../src/image/cois_black.png')}
          />
        </View>
      </View>
      <View style={styles.screen_charge_card}>
        <View style={styles.screen_charge_card_img}>
          <Image
            style={styles.screen_charge_card_img_img}
            source={require('../../src/image/logo_brand.png')}
          />
        </View>
        <View style={styles.screen_charge_card_title}>
          <Text style={styles.screen_charge_card_title_title}>
            Acheter des QOQO’s
          </Text>
          <Text style={styles.screen_charge_card_title_content}>
            Plus tu achètes de QOQO's, plus tu en reçois en bonus !
          </Text>
        </View>
        <View style={styles.screen_charge_card_price}>
          <View style={styles.screen_charge_card_price_top}>
            <Text style={styles.screen_charge_card_price_top_text}>2500</Text>
            <Image
              style={styles.screen_charge_card_price_top_img}
              source={require('../../src/image/cois_charge.png')}
            />
          </View>
          <View style={styles.screen_charge_card_price_bottom}>
            <Text style={styles.screen_charge_card_price_bottom_text}>
              + 200
            </Text>
            <Image
              style={styles.screen_charge_card_price_bottom_img}
              source={require('../../src/image/cois_total.png')}
            />
          </View>
        </View>
        <View style={styles.screen_charge_card_bid}>
          <TouchableOpacity style={styles.screen_charge_card_bid_downup}>
            <Text style={styles.screen_charge_card_bid_downup_text}>-5€</Text>
          </TouchableOpacity>
          <View style={styles.screen_charge_card_bid_title}>
            <Text style={styles.screen_charge_card_bid_title_text}>25</Text>
            <Image
              style={styles.screen_charge_card_bid_title_img}
              source={require('../../src/image/euro_circle.png')}
            />
          </View>
          <TouchableOpacity style={styles.screen_charge_card_bid_downup}>
            <Text style={styles.screen_charge_card_bid_downup_text}>+5€</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.screen_charge_card_btnbuy}>
          <Text style={styles.screen_charge_card_btnbuy_text}>Acheter</Text>
          <Image
            source={require('../../src/image/pay.png')}
            style={styles.screen_charge_card_btnbuy_img}
          />
        </View>
      </View>
    </View>
  );
  return (
    <>
      <SafeAreaView style={styles.screen_bids}>
        <HeaderUser />
        <View style={styles.screen_bids_title}>
          <Text style={styles.screen_bids_title_text}>Recharge</Text>
          <Image
            style={styles.screen_bids_title_image}
            source={require('../../src/image/cois_charge.png')}
          />
        </View>
        <View style={styles.line} />
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
