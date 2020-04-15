import {StyleSheet} from 'react-native';
import {CENTER, FULL} from '../Components/styles';

const styles = StyleSheet.create({
  homeScreenContainer: {
    ...FULL,
    ...CENTER,
    paddingVertical: 10,
  },
  formContainer: {
    width: '100%',
    minHeight: 100,
    paddingLeft: '2%',
    marginTop: 20,
  },
  formFieldView: {
    minHeight: 65,
    width: '100%',
  },
  errorEmail: {
    color: '#d00',
    fontSize: 12,
    paddingLeft: 2,
    marginTop: 3,
    marginBottom: 10,
  },
  submitBtn: {
    width: '40%',
    alignSelf: 'center',
    marginTop: 20,
  },
  listCard: {
    width: '94%',
    height: 45,
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 15,
    elevation: 2,
    shadowColor: 'grey',
    shadowOffset: {
      width: 0.1,
      height: 1,
    },
    shadowOpacity: 0.8,
    justifyContent: 'center',
    paddingHorizontal: '3%',
  },
  nameTxt: {
    fontSize: 18,
    fontWeight: '400',
  },
  imgStyles: {
    height: 150,
    width: 150,
    alignSelf: 'center',
    marginTop: 20,
  },
  uploadBtn: {
    backgroundColor: 'white',
    borderColor: '#777',
    paddingVertical: 5,
    borderWidth: 0.5,
    width: 150,
    alignSelf: 'center',
    height: 150,
  },
  uploadBtnAlt: {
    backgroundColor: 'white',
    borderColor: '#777',
    paddingVertical: 5,
    borderWidth: 0.5,
    width: 100,
    alignSelf: 'center',
    height: 30,
  },
  detailImg: {
    width: '50%',
    resizeMode: 'contain',
    height: 150,
    alignSelf: 'center',
  },
  detailBody: {
    width: '90%',
    minHeight: 200,
    alignSelf: 'center',
  },
  detailLeftView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: '2%',
  },
  detailLeftTxt: {
    fontSize: 16,
    fontWeight: '500',
  },
  detailRightView: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingRight: '2%',
  },
  detailRightTxt: {
    fontSize: 16,
    fontWeight: '400',
  },
  detailTitle: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
  },
});

export {styles};
