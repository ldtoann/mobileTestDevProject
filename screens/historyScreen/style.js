import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  screen_bids: {
    flex: 1,
    backgroundColor: '#1F2332',
  },
  screen_bids_title: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 14,
    gap: 6,
  },
  screen_bids_title_text: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 22,
    color: 'white',
    fontWeight: '700',
    lineHeight: 24,
  },
  screen_bids_title_image: {
    width: 24,
    height: 24,
  },
  line: {
    width: '95%',
    height: 2,
    backgroundColor: '#353946',
    alignSelf: 'center',
    borderRadius: 10,
    gap: 10,
    // marginBottom: 20,
  },
  screen_bids_title_listPRD: {
    gap: 12,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 5,
  },
  screen_bids_title_listPRD_img: {
    width: 24,
    height: 24,
  },
  screen_bids_title_listPRD_text: {
    fontFamily: 'Montserrat-Bold',
    color: 'white',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '700',
  },
});
export default styles;
