import { call, put } from 'redux-saga/effects'
import TropicalInstituteActions from '../Redux/TropicalInstituteRedux'

console.log('GETTING API..')
export function * getLandenFromAPI(api, action) {
  console.log('GETTING API...')
  let response = yield call(api.getLanden)
  if(response.ok) yield put(TropicalInstituteActions.fetchApi(response.data.landen))
}
