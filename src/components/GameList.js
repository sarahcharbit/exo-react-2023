import axios from "axios";
import { useEffect, useState } from "react";
import Game from './Game';

const GameList = () => {
    const [filteredGames, setFilteredGames]= useState(false)
    const [gameAllLists, setGameAllLists]= useState ([])
    
    function clickButton() {setFilteredGames(!filteredGames)}
    
    useEffect(() => {
        axios
        .get ('https://apis.wilders.dev/wild-games/games')
        .then ((res) => res.data)
        .then ((res) => setGameAllLists(res))
         
    }, [])
    
    return (
        <div className="containerGameList">
            {gameAllLists
                .filter((gameAllList)=> filteredGames || gameAllList.rating >= 4.5)
                .map((gameAllList, index) => {
                    return (
                        <div>
                            <div> Name: {gameAllList.name}</div>
                            <div> <Game key={index} released={gameAllList.released} rating={gameAllList.rating}/></div>
                        </div>
                    )         
                })
            }
            <button onClick={clickButton}>
                {''}
                {filteredGames ? 'show only games rating more 4': 'show all games'}
            </button>
        </div>
    )
}
export default GameList