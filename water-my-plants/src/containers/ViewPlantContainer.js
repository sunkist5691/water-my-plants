import React from 'react'
import { connect } from 'react-redux'
import ViewPlant from "../components/ViewPlant"

const mapStateToProps = (state) => ({
  plants: state.plants
})

export default connect(mapStateToProps)(ViewPlant)