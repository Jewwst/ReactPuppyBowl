import React from "react"
import { useNavigate } from "react-router-dom"

export default function PlayerList({ player }) {
const navigate = useNavigate();
 return (
<div>
 <h3>{player.name}</h3>
<button onClick={() => {navigate(`/${player.id}`);
 }}>See Details</button>
</div>
 )
}