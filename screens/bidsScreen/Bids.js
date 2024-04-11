import React from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import styles from './style';
import {SafeAreaView} from 'react-native-safe-area-context';
import HeaderUser from '../../components/headerUser/index';
import ListPRD1 from '../../components/listPR1/index';

const bids = () => {
  const data = [
    {key: 'scroll', title: 'Enchères à venir'},
    {key: 'list1', title: 'Aujourd’hui'},
    {key: 'list2', title: 'Demain'},
  ];

  const renderItem = ({item}) => {
    if (item.key === 'scroll') {
      return (
        <View>
          <View style={styles.screen_bids_title}>
            <Text style={styles.screen_bids_title_text}>{item.title}</Text>
            <Image
              style={styles.screen_bids_title_image}
              source={require('../../src/image/hammer_bid.png')}
            />
          </View>
          <View style={styles.line} />
        </View>
      );
    } else {
      return (
        <View>
          <View style={styles.screen_bids_title_listPRD}>
            <Image
              style={styles.screen_bids_title_listPRD_img}
              source={require('../../src/image/calendar.png')}
            />
            <Text style={styles.screen_bids_title_listPRD_text}>
              {item.title}
            </Text>
          </View>
          <ListPRD1 />
        </View>
      );
    }
  };

  return (
    <SafeAreaView style={styles.screen_bids}>
      <HeaderUser />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        contentContainerStyle={styles.scrollViewContent}
      />
    </SafeAreaView>
  );
};

export default bids;
