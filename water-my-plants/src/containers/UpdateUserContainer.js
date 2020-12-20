import React from 'react'
import { connect } from 'react-redux'
import UpdateUser from "../components/UpdateUser"
import { setLoggedStatus, setUser } from "../actions"

const mapStateToProps = (state) => ({
  user: state.user
})

const mapDispatchToProps = {
  setLoggedStatus,
  setUser
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateUser)