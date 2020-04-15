import {
  GET_CUSTOMER,
  ADD_CUSTOMER,
  UPDATE_CUSTOMER,
  GET_ADDRESS,
} from '../config';

const initialState: any = {};

function customerReducer(state: any = initialState, action: any) {
  switch (action.type) {
    case GET_CUSTOMER:
      return {...state, customers: action.payload};

    case ADD_CUSTOMER:
      return {...state, addCustomer: action.payload};

    case UPDATE_CUSTOMER:
      return {...state, updateCustomer: action.payload};

    case GET_ADDRESS:
      return {...state, getAddress: action.payload};

    default:
      return state;
  }
}

export default customerReducer;
