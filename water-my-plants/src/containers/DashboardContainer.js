import React from 'react'
import { connect } from 'react-redux'
import Dashboard from "../components/Dashboard"
import {setUser, setLoggedStatus, setUserPlants, setPlants} from "../actions"

const mapStateToProps = (state) => ({
  user: state.user,
  userPlants: state.userPlants
})

const mapDispatchToProps = {
  setUser,
  setLoggedStatus,
  setUserPlants,
  setPlants
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
