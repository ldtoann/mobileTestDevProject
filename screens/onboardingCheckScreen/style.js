import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  screenCheck_body: {
    backgroundColor: '#1F2332',
    flex: 1,
  },
  screenCheck_body_image: {
    alignItems: 'center',
    marginTop: 200,
  },
  screenCheck_body_image_logo: {
    width: 156,
    height: 64,
  },
  screenCheck_body_title: {
    gap: 24,
    alignItems: 'center',
    paddingTop: 36,
  },
  screenCheck_body_title_item: {
    width: 328,
    height: 42,
    borderRadius: 6,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenCheck_body_title_text: {
    fontSize: 16,
    color: 'black',
    fontFamily: 'Montserrat-Bold',
    lineHeight: 24,
    fontWeight: '700',
  },
  screenCheck_body_check: {
    flexDirection: 'row',
    gap: 8,
    padding: 40,
  },
  screenCheck_body_check_btn: {},
  screenCheck_body_check_img: {},
  screenCheck_body_check_title: {
    fontSize: 16,
    color: 'white',
    fontFamily: 'Montserrat-Regular',
    lineHeight: 24,
    fontWeight: '400',
  },
  screenCheck_body_btn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // padding: 12,
    paddingHorizontal: 40,
    gap: 6,
  },
  screenCheck_body_btn_back: {
    width: 56,
    height: 56,
    backgroundColor: '#56698F',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenCheck_body_btn_next: {
    flexDirection: 'row',
    width: 260,
    height: 56,
    borderRadius: 6,
    backgroundColor: '#4ABF40',
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenCheck_body_btn_title: {
    fontSize: 16,
    color: 'white',
    fontFamily: 'Montserrat-Bold',
  },
});
export default styles;
