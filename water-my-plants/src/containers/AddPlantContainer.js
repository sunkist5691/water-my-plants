import React from 'react'
import { connect } from 'react-redux'
import AddPlant from "../components/AddPlant"
import { addPlant, setUserPlants, setPlants, setUser } from "../actions"

const mapStateToProps = (state) => ({
  user: state.user,
  plants: state.plants
})
const mapDispatchToProps = {
  addPlant,
  setUserPlants,
  setUser,
  setPlants
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPlant)
