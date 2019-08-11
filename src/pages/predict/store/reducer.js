import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
  showPreview: false,
  selectedAccessToken: '',
  selectedFieldSet: '',
  fields: [],
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_ACCESSTOKEN_FIELDSET: {
      return state.merge({
        selectedAccessToken: action.accessToken,
        selectedFieldSet: action.fieldSet,
      });
    }
    case actionTypes.CHANGE_SHOW_PREVIEW:
      return state.set('showPreview', action.showPreview);
    case actionTypes.UPDATE_FIELDS: {
      return state.set('fields', action.fields);
    }
    default:
      return state;
  }
};
