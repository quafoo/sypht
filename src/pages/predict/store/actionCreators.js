import axios from 'axios';
import * as actionTypes from './actionTypes';

export const updateAccessTokenAndFieldSetAction = (accessToken, fieldSet) => ({
  type: actionTypes.UPDATE_ACCESSTOKEN_FIELDSET,
  accessToken,
  fieldSet,
});

export const changeShowPreviewAction = showPreview => ({
  type: actionTypes.CHANGE_SHOW_PREVIEW,
  showPreview,
});

const updateFieldsAction = fields => ({
  type: actionTypes.UPDATE_FIELDS,
  fields,
});

export const getResultsAction = (fileId, selectedAccessToken) => (dispatch) => {
  axios.get(`/result/final/${fileId}`, {
    headers: {
      Authorization: `Bearer ${selectedAccessToken}`,
    },
  })
    .then((res) => {
      dispatch(updateFieldsAction(res.data.results.fields));
    })
    .catch((e) => {
      // eslint-disable-next-line no-console
      console.log(e);
    });
};
