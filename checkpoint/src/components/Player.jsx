import React from 'react'

const Player = () => {

    return (
        <div class="container d-flex justify-content-center align-items-center vh-100">
            <div class="card" style={{width: "18rem;"}}>
                <img src="..." class="card-img-top" alt="Player"/>
                <div class="card-body text-center">
                    <h5 class="card-title">Player Name</h5>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Team: Team Name</li>
                    <li class="list-group-item">Nationality: Country</li>
                    <li class="list-group-item">Jersey Number: #10</li>
                    <li class="list-group-item">Age: 25</li>
                </ul>
                <div class="card-footer text-center">
                    FIFA Player Card
                </div>
            </div>
        </div>
    )
}

export default Player