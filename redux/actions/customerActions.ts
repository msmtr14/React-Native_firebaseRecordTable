import {userDataInterface, locationInterface} from '../../utils/interfaces';
import {firebaseMatches, fbDatabase} from '../../utils/firebase';
import {
  GET_CUSTOMER,
  ADD_CUSTOMER,
  GOOGLE_MAP_API_KEY,
  GET_ADDRESS,
  DELETE_CUSTOMER,
  store,
} from '../config';
import {firebaseLooper} from '../../utils/misc';
import Axios from 'axios';

const dispatch = store.dispatch;

export async function getCustomers() {
  const req = await firebaseMatches
    .once('value')
    .then((snapshot: any) => {
      const data = firebaseLooper(snapshot);
      return data;
    })
    .catch((err: any) => console.error(err));
  return {
    type: GET_CUSTOMER,
    payload: req,
  };
}

export async function addNewCustomer(data: userDataInterface) {
  const req = await firebaseMatches
    .push(data)
    .then((res: any) => res)
    .catch((e: any) => {
      console.error(e);
      return e;
    });
  return {
    type: ADD_CUSTOMER,
    payload: req,
  };
}

export async function deleteCustomer(id: string | number) {
  const req = await fbDatabase
    .ref(`customers/${id}`)
    .remove()
    .then(async (res: any) => {
      dispatch(await getCustomers());
      return res;
    })
    .catch((e: any) => {
      console.error(e);
      return e;
    });
  return {
    type: DELETE_CUSTOMER,
    payload: req,
  };
}

export async function getAddress(location: locationInterface) {
  const req = await Axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=${GOOGLE_MAP_API_KEY}`,
  )
    .then((res) => res.data)
    .catch((err) => console.error(err.response));
  return {
    type: GET_ADDRESS,
    payload: req,
  };
}
