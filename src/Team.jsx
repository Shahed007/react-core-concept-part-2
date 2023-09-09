import { useState } from "react"

export default function Team(){
  let [team, setTeam] = useState(11);
  const teamStyle = {
    border: '2px solid purple',
    margin: '15px',
    padding: '15px',
    borderRadius: '15px',
  }

  const handleAdd = () => {
   team =  team + 1;
    setTeam(team)
  }

  const handleRemove = () => {
    setTeam(team - 1)
  }
  return(
    <div style={teamStyle}>
      <h3>Players: </h3>
      <h3>Player: {team}</h3>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleRemove}>Remove</button>
    </div>
  )
}