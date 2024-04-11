'use strict';
import React, {useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import {productData} from '../../data/data';

const Index = () => {
  const borderColors = ['#56698F', '#4ABF40', '#C7577C', '#EDBD57'];
  const renderItem = ({item, index}) => (
    <View>
      <View
        style={[
          styles.bid_item,
          {borderColor: borderColors[index % borderColors.length]},
        ]}>
        <View style={styles.bid_item_img}>
          <Image style={styles.bid_item_img_img} source={item.image} />
        </View>
        <View style={styles.bid_item_title}>
          <Text style={styles.bid_item_title_text}>{item.title}</Text>
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
        <View style={styles.bid_item_bottom}>
          <Text style={styles.bid_item_bottom_left}>Rébloquer</Text>
          <View style={styles.bid_item_bottom_right}>
            <Text style={styles.bid_item_bottom_right_text}>{item.cois}</Text>
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
