import { takeLatest, all } from 'redux-saga/effects'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { TropicalInstituteTypes } from '../Redux/TropicalInstituteRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { getLandenFromAPI } from './TropicalInstituteSagas'

/* ------------- API ------------- */

import API from '../Services/Api'
import DebugConfig from '../Config/DebugConfig'
import FixtureAPI from '../Services/FixtureApi'
// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.

if(!DebugConfig.useFixtures){
  console.tron.log('We are NOT using fixtures here');
} else {
  console.tron.log('We are using fixtures here');
}

const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  let sagaIndex = [
    // some sagas only receive an action
    // takeLatest(StartupTypes.STARTUP, startup),
    // takeLatest(TropicalInstituteTypes.FETCH_API, getLanden)
  ]

  if(DebugConfig.getAPI) {
    console.tron.log('DEBUGCONFIG -> GetAPI: true')
    sagaIndex.push(takeLatest(TropicalInstituteTypes.FETCH_API, getLandenFromAPI, api))
  }

  yield sagaIndex
}
