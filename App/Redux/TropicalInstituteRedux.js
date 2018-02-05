import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import Config from '../Config/DebugConfig'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  fetchApi: ['landen'],
})

export const TropicalInstituteTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  landen: require('../Fixtures/landen.json')
})

/* ------------- Reducers ------------- */

// Store API
export const fetchApi = (state, { landen }) => {
  console.log('ACTION FETCH_API RUNNING')
  return state.merge({ landen: landen })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.FETCH_API]: fetchApi,
})
