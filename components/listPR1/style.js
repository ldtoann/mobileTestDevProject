import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  bid_item: {
    borderRadius: 24,
    borderRadius: 24,
    borderColor: '#56698F',
    flexDirection: 'column',
    borderWidth: 4,
    marginLeft: 13,
    marginBottom: 13,
    backgroundColor: '#3C4868',
  },
  bid_item_img: {},
  bid_item_img_img: {
    width: 178.5,
    height: 128,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  bid_item_title: {},
  bid_item_title_text: {
    fontFamily: 'Montserrat-Bold',
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '700',
    lineHeight: 16,
    margin: 8,
  },
  bid_item_content: {
    padding: 8,
    gap: 2,
    backgroundColor: '#636D86',
    borderRadius: 6,
    width: 162.5,
    height: 68,
    alignSelf: 'center',
  },
  bid_item_content_title: {
    fontFamily: 'Montserrat-Bold',
    color: 'white',
    fontSize: 10,
    textAlign: 'center',
    fontWeight: '700',
  },
  bid_item_content_price: {
    fontFamily: 'Montserrat-Bold',
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '700',
  },
  bid_item_content_total: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  bid_item_content_total_text: {
    fontFamily: 'Montserrat-Bold',
    color: '#B1B6C2',
    fontSize: 10,
    textAlign: 'center',
    fontWeight: '700',
  },
  bid_item_content_total_img: {
    width: 12,
    height: 12,
  },
  bid_item_bottom: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 20,
    width: 170,
    height: 32,
    padding: 4,
    alignSelf: 'center',
    marginBottom: 4,
    marginTop: 10,
  },
  bid_item_bottom_left: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 10,
    fontWeight: '700',
    padding: 6,
    color: 'black',
  },
  bid_item_bottom_right: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
    backgroundColor: '#C7577C',
    height: 24,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
  },
  bid_item_bottom_right_text: {
    fontSize: 12,
    lineHeight: 16,
    fontFamily: 'Montserrat-Bold',
    color: 'white',
    fontWeight: '700',
  },
  bid_item_bottom_right_img: {
    width: 16,
    height: 16,
  },
});

export default styles;