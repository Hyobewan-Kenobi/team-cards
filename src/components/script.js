"use client"
import React, { useEffect, useState } from 'react';

const myFavoriteFootballTeam = {
  team: "Argentina",
  sport: "Football",
  year: 1986,
  isWorldCupWinner: true,
  headCoach: {
    coachName: "Carlos Bilardo",
    matches: 7,
  },
  players: [
    { name: "Sergio Almirón", position: "forward", number: 1, isCaptain: false, nickname: null },
    { name: "Sergio Batista", position: "midfielder", number: 2, isCaptain: false, nickname: null },
    { name: "Ricardo Bochini", position: "midfielder", number: 3, isCaptain: false, nickname: "El Bocha" },
    { name: "Claudio Borghi", position: "midfielder", number: 4, isCaptain: false, nickname: "Bichi" },
    { name: "José Luis Brown", position: "defender", number: 5, isCaptain: false, nickname: "Tata" },
    { name: "Daniel Passarella", position: "defender", number: 6, isCaptain: false, nickname: "El Gran Capitán" },
    { name: "Jorge Burruchaga", position: "forward", number: 7, isCaptain: false, nickname: "Burru" },
    { name: "Néstor Clausen", position: "defender", number: 8, isCaptain: false, nickname: null },
    { name: "José Luis Cuciuffo", position: "defender", number: 9, isCaptain: false, nickname: "El Cuchu" },
    { name: "Diego Maradona", position: "midfielder", number: 10, isCaptain: true, nickname: "El Pibe de Oro" },
    { name: "Jorge Valdano", position: "forward", number: 11, isCaptain: false, nickname: "The Philosopher of Football" },
    { name: "Héctor Enrique", position: "midfielder", number: 12, isCaptain: false, nickname: null },
    { name: "Oscar Garré", position: "defender", number: 13, isCaptain: false, nickname: null },
    { name: "Ricardo Giusti", position: "midfielder", number: 14, isCaptain: false, nickname: null },
    { name: "Luis Islas", position: "goalkeeper", number: 15, isCaptain: false, nickname: "El loco" },
    { name: "Julio Olarticoechea", position: "defender", number: 16, isCaptain: false, nickname: null },
    { name: "Pedro Pasculli", position: "forward", number: 17, isCaptain: false, nickname: null },
    { name: "Nery Pumpido", position: "goalkeeper", number: 18, isCaptain: false, nickname: null },
    { name: "Oscar Ruggeri", position: "defender", number: 19, isCaptain: false, nickname: "El Cabezón" },
    { name: "Carlos Tapia", position: "midfielder", number: 20, isCaptain: false, nickname: null },
    { name: "Marcelo Trobbiani", position: "midfielder", number: 21, isCaptain: false, nickname: "Calesita" },
    { name: "Héctor Zelada", position: "goalkeeper", number: 22, isCaptain: false, nickname: null },
  ],
};

Object.freeze(myFavoriteFootballTeam);

const { sport, team, year, players } = myFavoriteFootballTeam;
const { coachName } = myFavoriteFootballTeam.headCoach;

const TeamComponent = () => {
  const [filteredPlayers, setFilteredPlayers] = useState(players);

  useEffect(() => {
    setFilteredPlayers(players); // Ensure the players are set correctly on the client side
  }, []);

  const handleFilterChange = (e) => {
    const value = e.target.value;
    let filtered = players;

    if (value === "nickname") {
      filtered = players.filter((player) => player.nickname !== null);
    } else if (value) {
      filtered = players.filter((player) => player.position === value);
    }

    setFilteredPlayers(filtered);
  };

  return (
    <div>
      <div className='flex flex-wrap place-content-center pb-4'>
        <h1 className='text-white px-2'>Team: {team}</h1>
        <p className='text-white px-2'>Sport: {sport}</p>
        <p className='text-white px-2'>World Cup Year: {year}</p>
        <p className='text-white px-2'>Head Coach: {coachName}</p>
      </div>
      
      <label for="players" className=' text-white' >Filter Data: </label>

      <select className='p-2 rounded-lg' name="players" id="players" onChange={handleFilterChange}>
        <option value="">All</option>
        <option value="nickname">Nickname</option>
        <option value="forward">Forward</option>
        <option value="midfielder">Midfielder</option>
        <option value="defender">Defender</option>
        <option value="goalkeeper">Goalkeeper</option>
      </select>

      <div id="player-cards" className='flex flex-wrap place-content-center'>
        {filteredPlayers.map(({ name, position, number, isCaptain, nickname }) => (
          <div className="player-card" key={number}>
            <h2>{isCaptain ? "(Captain)" : ""} {name}</h2>
            <p>Position: {position}</p>
            <p>Number: {number}</p>
            <p>Nickname: {nickname !== null ? nickname : "N/A"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamComponent;
