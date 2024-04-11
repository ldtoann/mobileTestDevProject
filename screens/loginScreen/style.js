import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  screen_body: {
    backgroundColor: '#1F2332',
    flex: 1,
    alignItems: 'center',
    paddingTop: 70,
  },
  screen_top: {
    alignItems: 'center',
    gap: 30,
  },
  screen_top_logoBig: {
    width: 256,
    height: 256,
  },
  screen_top_content: {},
  screen_top_content_text: {
    fontSize: 32,
    fontFamily: 'AzoSans-Bold',
    color: 'white',
    fontWeight: '900',
    marginBottom: 7,
  },
  screen_top_logoText: {},
  screen_bottom: {},
  //   -------------------------------------------
  bottom_screen: {
    marginTop: 40,
  },
  bottom_screen_Form: {
    marginBottom: 15,
  },
  bottom_screen_Form_title: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 10,
    color: 'white',
    fontWeight: '700',
  },
  bottom_screen_Form_input: {},
  bottom_screen_Form_input_icon: {
    width: 20,
    height: 20,
    top: 16,
    left: 10,
    position: 'absolute',
    zIndex: 1,
  },
  bottom_screen_Form_input_input: {
    backgroundColor: 'white',
    borderRadius: 6,
    width: 328,
    height: 36,
    gap: 8,
    marginVertical: 8,
    paddingLeft: 45,
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
  },
  eye: {
    width: 20,
    height: 20,
    top: 16,
    right: 15,
    position: 'absolute',
    zIndex: 1,
  },
  bottom_screen_button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  bottom_screen_back_button: {
    backgroundColor: '#56698F',
    width: 56,
    height: 56,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom_screen_next_button: {
    backgroundColor: '#4ABF40',
    width: 249,
    height: 56,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    gap: 4,
  },
  bottom_screen_next_button_title: {
    fontSize: 16,
    color: 'white',
    fontFamily: 'Montserrat-Bold',
  },
  bottom_screen2: {
    gap: 24,
    marginTop: 50,
  },
  bottom_screen2_button: {
    flexDirection: 'row',
    width: 275,
    height: 42,
    borderRadius: 6,
    gap: 8,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom_screen2_button_title: {
    fontFamily: 'Product Sans Regular',
    color: 'black',
    fontSize: 18,
    fontWeight: '400',
  },
  line: {
    width: '50%',
    height: 1,
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 10,
    gap: 10,
  },
  contentContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
  },
  errorText: {
    color: 'red',
  },
});
export default styles;
