import { types } from "../actions"

const initialState = {
  db_fields: [],
  batch_id: null,
  file_fields: [],
  fields_map: {},
  errors: "",
  price: "",
  agree_to_terms: false,
}

export default function(state = initialState, action) {
  switch (action.type) {

    case types.CSV_MAPPING_FORM_ERROR:
      return {
        ...state,
        errors: action.errors,
      }

    case types.CSV_MAPPING_CLEAR_FORM:
      return {
        ...state,
        fields_map: initialState.fields_map,
        price: initialState.price,
        agree_to_terms: initialState.agree_to_terms,
      }

    case types.CSV_MAPPING_AGREE_TO_TERMS:
      return {
        ...state,
        agree_to_terms: action.agree_to_terms.value
      }

    case types.CSV_MAPPING_MAP_HANDLE_CHANGE:
      return {
        ...state,
        fields_map: {
          ...state.fields_map,
          [action.map_change.name]: action.map_change.value,
        }
      }

    case types.CSV_MAPPING_FORM_HANDLE_CHANGE:
      return {
        ...state,
        error: "",
        [action.payload.name]: action.payload.value,
      }

    case types.CSV_MAPPING_GET_DB_FIELDS:
      return {
        ...state,
        db_fields: action.db_fields,
      }

    case types.CSV_MAPPING_GET_FILE_FIELDS:
      return {
        ...state,
        file_fields: action.file_fields,
      }

    default:
      return state
  }
}