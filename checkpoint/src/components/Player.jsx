import React from 'react'

const Player = ({name, team, nationality, jerseyNumber, age}) => {

    return (
        <div class="container d-flex justify-content-center align-items-center vh-100">
            <div class="card" style={{width: "18rem;"}}>
                <img src="..." class="card-img-top" alt="Player"/>
                <div class="card-body text-center">
                    <h5 class="card-title">{name}</h5>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">{team}</li>
                    <li class="list-group-item">{nationality}</li>
                    <li class="list-group-item">#{jerseyNumber}</li>
                    <li class="list-group-item">{age} years old</li>
                </ul>
                <div class="card-footer text-center">
                    FIFA Player Card
                </div>
            </div>
        </div>
    )
}

export default Player