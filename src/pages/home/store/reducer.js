import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
  credentials: [
    {
      key: '1',
      fieldSet: 'sypht.invoice',
      clientId: '0GUac0CSQEzSPhqHPOTxhSZ0jqA2pnxy',
      clientSecret: 'Rd_g_TFntYtO8L22zYeVhA6Ef0_2VP054P9004cWi1HI-WnQ3nIuIx-68dohs3F9',
      accessToken: '-',
    },
    {
      key: '2',
      fieldSet: 'sypht.document',
      clientId: 'mS7Cz2186cZIgcJsqS8bGMtZeDzF7bJ2',
      clientSecret: '2v1sXO9sETHGrcykdY0mNazEvwtAjNPxOsDEp3TmeMEf0CwKGhZ0_6rLQsP2BzLe',
      access_token: '-',
    },
    {
      key: '3',
      fieldSet: 'sypht.generic',
      clientId: '61CBBeghGYlP2KjvGG4QL0FV80s8rE3R',
      clientSecret: 'G-Zu3hD3mfcTIOtVVDUCjWUZzunOROg2A6YZ_ghA_jaYAaq5pTJgvV2G5O7PGoir',
      access_token: '-',
    },
  ],
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_ACCESS_TOKEN: {
      const indexOfListToUpdate = state.get('credentials').findIndex(listItem => listItem.get('clientId') === action.clientId);
      return state.setIn(['credentials', indexOfListToUpdate, 'accessToken'], action.accessToken);
    }
    default:
      return state;
  }
};
