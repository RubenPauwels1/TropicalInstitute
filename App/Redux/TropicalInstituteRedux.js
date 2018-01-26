import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  tropicalInstituteRequest: ['data'],
  tropicalInstituteSuccess: ['landen'],
  tropicalInstituteFailure: null
})

export const TropicalInstituteTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  fetching: null,
  payload: null,
  error: null
})

/* ------------- Selectors ------------- */

export const TropicalInstituteSelectors = {
  getLanden: state => state.landen
}

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, { data }) =>
  state.merge({ fetching: true, data, landen: null })

// successful api lookup
export const success = (state, action) => {
  const { landen } = action
  return state.merge({ fetching: false, error: null, landen })
}

// Something went wrong somewhere.
export const failure = state =>
  state.merge({ fetching: false, error: true, landen: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.TROPICAL_INSTITUTE_REQUEST]: request,
  [Types.TROPICAL_INSTITUTE_SUCCESS]: success,
  [Types.TROPICAL_INSTITUTE_FAILURE]: failure
})
