import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  screen_body: {
    flex: 1,
    backgroundColor: '#1F2332',
    position: 'relative',
  },
  screen_body_bottom: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    bottom: 100,
    paddingHorizontal: 40,
  },
  screen_body_bottom_back_btn: {
    width: 24,
    height: 24,
  },
  screen_body_bottom_next: {
    backgroundColor: '#4ABF40',
    width: 56,
    height: 56,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screen_body_top: {
    paddingTop: 70,
  },
  onboardingScreen_image: {
    alignItems: 'center',
    marginBottom: 50,
  },
  onboardingScreen_image_logo: {
    width: 256,
    height: 256,
  },
  onboardingScreen_title_text: {
    fontSize: 32,
    fontFamily: 'AzoSans-Bold',
    color: 'white',
    fontWeight: '900',
    marginBottom: 7,
    paddingHorizontal: 32,
  },
  onboardingScreen_title_logo: {
    marginLeft: 32,
  },
  onboardingScreen_content: {
    marginLeft: 32,
    marginTop: 30,
  },
  onboardingScreen_content_text: {
    fontSize: 16,
    fontFamily: 'AzoSans-Regular',
    color: 'white',
  },
  dot_list: {
    flexDirection: 'row',
  },
  dot_mang: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
});
export default styles;
