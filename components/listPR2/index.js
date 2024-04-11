'use strict';
import React, {useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';

const Index = () => {
  const borderColors = ['#56698F', '#4ABF40', '#C7577C', '#EDBD57'];
  const productData = [
    {
      id: '01',
      title: 'Bientôt disponible',
      name: 'Manette Playstion 4',
      price: '600 €',
      price2: '= 6000',
      cois: '50',
      user: 'Jacques la malice',
      location: 'Paris',
      status: 'Oui',
      timeToday: '19/03/24',
      bid: '156',
      sell: '2 540',
      coisplus: '+ 15',
      avatar: require('../../src/image/avatar.png'),
      image: require('../../src/image/product_1.png'),
      image2: require('../../src/image/product_h1.png'),
    },
    {
      id: '02',
      title: 'Bientôt disponible',
      name: 'Nintendo Switch',
      price: '130 €',
      price2: '= 13 000',
      cois: '100',
      user: 'Jacques la malice',
      location: 'Paris',
      status: 'Non',
      timeToday: '19/03/24',
      bid: '123',
      sell: '9 300',
      coisplus: '0',
      avatar: require('../../src/image/avatar.png'),
      image: require('../../src/image/product_2.png'),
      image2: require('../../src/image/product_h2.png'),
    },
    {
      id: '03',
      title: 'Bientôt disponible',
      name: 'Sac à main Gucci',
      price: '250 €',
      price2: '= 25 000',
      cois: '200',
      user: 'Jacques la malice',
      location: 'Paris',
      status: 'Oui',
      timeToday: '19/03/24',
      bid: '365',
      sell: '11 300',
      coisplus: '+ 10',
      avatar: require('../../src/image/avatar.png'),
      image: require('../../src/image/product_3.png'),
      image2: require('../../src/image/product_h3.png'),
    },
    {
      id: '04',
      title: 'Bientôt disponible',
      name: 'Playstation 4',
      price: '490 €',
      price2: '= 49 000',
      cois: '500',
      user: 'Jacques la malice',
      location: 'Paris',
      status: 'Oui',
      timeToday: '19/03/24',
      bid: '893',
      sell: '23 670',
      coisplus: '+ 20',
      avatar: require('../../src/image/avatar.png'),
      image: require('../../src/image/product_4.png'),
      image2: require('../../src/image/product_h4.png'),
    },
  ];
  const renderItem = ({item, index}) => (
    <View>
      <View
        style={[
          styles.bid_item,
          {borderColor: borderColors[index % borderColors.length]},
        ]}>
        <View style={styles.bid_item_uses}>
          <View style={styles.bid_item_uses_top}>
            <Image
              style={styles.bid_item_uses_top_image}
              source={require('../../src/image/avatar.png')}
            />
            <View style={styles.bid_item_uses_content}>
              <Text style={styles.bid_item_uses_content_text}>{item.user}</Text>
              <Text style={styles.bid_item_uses_content_text2}>
                {item.location}
              </Text>
            </View>
          </View>
          <Text style={styles.bid_item_uses_text}>Gagnant de l’enchère</Text>
        </View>
        <View style={styles.bid_item_img}>
          <Image style={styles.bid_item_img_img} source={item.image2} />
        </View>
        <View style={styles.bid_item_title}>
          <Text style={styles.bid_item_title_text}>{item.name}</Text>
        </View>
        <View style={styles.bid_item_content}>
          <Text style={styles.bid_item_content_title}>Pix magasin</Text>
          <Text style={styles.bid_item_content_price}>{item.price}</Text>
          <View style={styles.bid_item_content_total}>
            <Text style={styles.bid_item_content_total_text}>
              {item.price2}
            </Text>
            <Image
              style={styles.bid_item_content_total_img}
              source={require('../../src/image/cois_total.png')}
            />
          </View>
        </View>
        <View style={styles.bid_item_status}>
          <Text style={styles.bid_item_status_title}>Participation</Text>
          <View style={styles.bid_item_status_content}>
            <Text style={styles.bid_item_status_content_text}>
              {item.status}
            </Text>
            <View
              style={[
                styles.dot_status,
                item.status === 'Oui'
                  ? styles.dot_status_green
                  : styles.dot_status_red,
              ]}
            />
          </View>
        </View>
        <View style={styles.bid_item_datebid}>
          <View style={styles.bid_item_date}>
            <Image
              style={styles.bid_item_date_img}
              source={require('../../src/image/calendar_small.png')}
            />
            <Text style={styles.bid_item_date_day}>{item.timeToday}</Text>
          </View>
          <View style={styles.bid_item_bid}>
            <Image
              style={styles.bid_item_bid_img}
              source={require('../../src/image/bid_bold.png')}
            />
            <Text style={styles.bid_item_bid_price}>{item.bid}</Text>
          </View>
        </View>
        <View style={styles.bid_item_sell}>
          <Text style={styles.bid_item_sell_title}>Vendu à</Text>
          <View style={styles.bid_item_sell_content}>
            <Text style={styles.bid_item_sell_content_text}>{item.sell}</Text>
            <Image
              style={styles.bid_item_sell_content_img}
              source={require('../../src/image/cois_total_bold.png')}
            />
          </View>
        </View>
        <View style={styles.bid_item_bottom}>
          <Text style={styles.bid_item_bottom_left}>Rébloquer</Text>
          <View style={styles.bid_item_bottom_right}>
            <Text style={styles.bid_item_bottom_right_text}>
              {item.coisplus}
            </Text>
            <Image
              style={styles.bid_item_bottom_right_img}
              source={require('../../src/image/cois_total_bold.png')}
            />
          </View>
        </View>
      </View>
    </View>
  );
  return (
    <View style={styles.listPr1_screen}>
      <FlatList
        data={productData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={styles.product_row}
      />
    </View>
  );
};

export default Index;
