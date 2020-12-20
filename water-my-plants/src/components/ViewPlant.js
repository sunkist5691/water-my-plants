import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"

function ViewPlant({plants}) {
  const params = useParams()
  const [plant, setPlant] = useState(null)
  const [err, setErr] = useState("Loading")

  useEffect(() => {
    if(plants[params.id] !== undefined) {
      setPlant(plants[params.id])
    } else {
      setErr("No plants are here")
    }
  }, [plants, params.id])

  return (
    <div>
      {plant ? (
        <div>
          <h1>{plant.nickname}</h1>
          <h2>{plant.species}</h2>
          <p>{plant.h20_frequency}</p>
        </div>
      ) : <p>{err}</p>}
    </div>
  )
}

export default ViewPlant
