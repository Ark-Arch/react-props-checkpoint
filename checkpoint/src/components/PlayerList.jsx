import React from 'react'
import players from '../assets/players'
import Player from './Player'

const PlayerList = () => {
    return (
        <>
            <div style={{display:"flex", justifyContent: "space-around"}}>
                {
                    players.map((player, index) => <Player key={index} {...player} />)
                }
            </div>
        </>
    )
}

export default PlayerList