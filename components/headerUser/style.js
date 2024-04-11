import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  cpn_header: {
    backgroundColor: '#1F2332',
    height: 64,
    padding: 12,
    marginBottom: 12,
  },
  cpn_header_top: {
    // padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cpn_header_left: {},
  cpn_header_left_logo: {},
  cpn_header_right: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  cpn_header_right_cois: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  cpn_header_right_cois_text: {
    color: '#C7577C',
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    fontWeight: '700',
    lineHeight: 20,
  },
  cpn_header_right_cois_img: {},
  cpn_header_right_line: {},
  cpn_header_right_line_img: {},
  cpn_header_right_user: {},
  cpn_header_right_user_icon: {},
  cpn_header_bottom: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    gap: 4,
    marginTop: 10,
  },
  cpn_header_bottom_progressBarActive: {
    width: 50,
    height: 4,
    backgroundColor: '#4ABF40',
    borderRadius: 10,
  },
  cpn_header_bottom_progressBar: {
    width: 50,
    height: 4,
    backgroundColor: '#56698F',
    borderRadius: 10,
  },
});

export default styles;
