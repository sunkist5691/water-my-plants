export const SET_LOGGED_STATUS = "SET_LOGGED_STATUS"
export const SET_USER = "SET_USER"
export const SET_PLANTS = "SET_PLANTS"
export const SET_USER_PLANTS = "SET_USER_PLANTS"
export const ADD_PLANT = "ADD_PLANT"
export const EDIT_PLANT = "EDIT_PLANT"
export const DELETE_PLANT = "DELETE_PLANT"

export const setLoggedStatus = status => {
  return {
    type: SET_LOGGED_STATUS,
    payload: status
  }
}

export const setUser = user => {
  return {
    type: SET_USER,
    payload: user
  }
}

export const setPlants = plants => {
  return {
    type: SET_PLANTS,
    payload: plants
  }
}

export const setUserPlants = plants => {
  return {
    type: SET_USER_PLANTS,
    payload: plants
  }
}

export const addPlant = plant => {
  return {
    type: ADD_PLANT,
    payload: plant
  }
}

export const editPlant = plant => {
  return {
    type: EDIT_PLANT,
    payload: plant
  }
}

export const deletePlant = plant => {
  return {
    type: DELETE_PLANT,
    payload: plant
  }
}