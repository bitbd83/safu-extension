import types, { AddressConfig } from './types';

export interface AddressesState {
  addresses: AddressConfig[];
}

export const INITIAL_STATE: AddressesState = {
  // TODO: Replace me with empty array when done testing
  addresses: [{
    address: '0x529104532a9779ea9eae0c1e325b3368e0f8add4',
    label: 'Will’s big cash bucks',
  }],
};

export default function addressesReducer(
  state: AddressesState = INITIAL_STATE,
  action: any
): AddressesState {
  switch (action.type) {
    case types.SET_ADDRESSES:
      return {
        ...state,
        addresses: action.payload,
      };
  }

  return state;
}
