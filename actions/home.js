import superagent from 'superagent';
import { baseUrl, appId, appKey } from '../env';

const feature = 'HomePage';
export const QUERY_RECIPES = `${feature}/QUERY_RECIPES`;

export const searchWithQuery = input => dispatch => {
  console.log('input: ', input);
  
  if (!input) return;
  
  const query = `?q=${input}&app_id=${appId}&app_key=${appKey}`;
  console.log('query: ', query);

  return dispatch({
    type: QUERY_RECIPES,
    payload: superagent.get(`${baseUrl}${query}`)
      .then(res => res.body)
  })
};
