import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './style';

const Index = () => {
  return (
    <View style={styles.cpn_header}>
      <View style={styles.cpn_header_top}>
        <View style={styles.cpn_header_left}>
          <Image
            style={styles.cpn_header_left_logo}
            source={require('../../src/image/logo_icon_text.png')}
          />
        </View>
        <View style={styles.cpn_header_right}>
          <View style={styles.cpn_header_right_cois}>
            <Text style={styles.cpn_header_right_cois_text}>43</Text>
            <Image
              style={styles.cpn_header_right_cois_img}
              source={require('../../src/image/cois_pink.png')}
            />
          </View>
          <View style={styles.cpn_header_right_line}>
            <Image
              style={styles.cpn_header_right_line_img}
              source={require('../../src/image/line.png')}
            />
          </View>
          <View style={styles.cpn_header_right_user}>
            <Image
              source={require('../../src/image/cog.png')}
              style={styles.cpn_header_right_user_icon}
            />
          </View>
        </View>
      </View>
      <View style={styles.cpn_header_bottom}>
        <View style={styles.cpn_header_bottom_progressBarActive} />
        <View style={styles.cpn_header_bottom_progressBarActive} />
        <View style={styles.cpn_header_bottom_progressBar} />
        <View style={styles.cpn_header_bottom_progressBar} />
        <View style={styles.cpn_header_bottom_progressBar} />
        <View style={styles.cpn_header_bottom_progressBar} />
        <View style={styles.cpn_header_bottom_progressBar} />
      </View>
    </View>
  );
};

export default Index;
