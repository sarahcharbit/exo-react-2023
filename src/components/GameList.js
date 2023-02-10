import axios from "axios";
import { useEffect, useState } from "react";
import Game from './Game';

const GameList = () => {
    
    const [gameAllLists, setGameAllLists]= useState ([])
    
    useEffect(() => {
        axios
        .get ('https://apis.wilders.dev/wild-games/games')
        .then ((res) => res.data)
        .then ((res) => setGameAllLists(res))
         
    }, [])
return (
        <div className="containerGameList"> {gameAllLists.map((gameAllList)=> {
            return (
                    <div>
                        <div> Name: {gameAllList.name}</div>
                        <div> <Game released={gameAllList.released} rating={gameAllList.rating}/></div>
                    </div>
                   )
        })}
        </div>
        )
}
export default GameList