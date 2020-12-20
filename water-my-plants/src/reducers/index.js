import { SET_LOGGED_STATUS, SET_USER, SET_PLANTS, SET_USER_PLANTS, ADD_PLANT, EDIT_PLANT, DELETE_PLANT } from '../actions'

const initialState = {
  user: null,
  isLoggedIn: localStorage.getItem("token") ? true : false,
  plants: [],
  userPlants: [],
  isFetching: false,
  error: "",
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_LOGGED_STATUS:
      return {
        ...state,
        isLoggedIn: action.payload
      }
    case SET_USER:
      return {
        ...state,
        user: action.payload
      }
    case SET_PLANTS:
      return {
        ...state,
        plants: action.payload
      }
    case SET_USER_PLANTS:
      return {
        ...state,
        userPlants: action.payload
      }
    case ADD_PLANT:
      return {
        ...state,
        plants: [...state.plants, action.payload]
      }
    case EDIT_PLANT:
      return {
        ...state,
        plants: state.plants.map(plant => {
          if(plant.id === action.payload.id) {
            return action.payload
          }
          return plant
        })
      }
    case DELETE_PLANT:
      return {
        ...state,
        plants: state.plants.filter(plant => {
          return plant.id !== action.payload.id
        })
      }
    default: 
      return state;
  }
}