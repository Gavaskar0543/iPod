import React from "react";
import Coverflow from "./coverflow";
import styles from "../styles/style.module.css";
import Settings from "./settings";
import GameScreen from './GameScreen'
const Display = ({ selected, showSelected }) => {
  return (
    <>
    {
      !showSelected ? (
        <div className="container ipodjs">
        <h3 className="title-ipod">iPod.js</h3>
        <ul className="menu-list" type="none">
          <div>
            <li
              style={
                selected === "coverflow"
                  ? {
                      backgroundColor: "#068FFF",
                      color: "red !important",
                      border: "2px solid #068FFF",
                      padding: "2px",
                      borderRadius: "1px",
                      marginLeft :'-6%'

                    }
                  : {}
              }
            >
              <a href="#" values="coverFlow">
                coverFlow
              </a>
             
            </li>
          </div>
          <div>
            <li
              style={
                selected === "music"
                  ? {
                      backgroundColor: "#068FFF",
                      color: "red !important",
                      border: "2px solid #068FFF",
                      padding: "2px",
                      borderRadius: "3px",
                      marginLeft :'-6%'
                    }
                  : {}
              }
            >
              <a href="#" values="music">
                music
              </a>
            </li>
          </div>
          <div>
            <li
              style={
                selected === "game"
                  ? {
                      backgroundColor: "#068FFF",
                      color: "red !important",
                      border: "2px solid #068FFF",
                      padding: "2px",
                      borderRadius: "3px",
                      marginLeft :'-6%'
                    }
                  : {}
              }
            >
              <a href="#" values="game">
                game
              </a>
            </li>
          </div>
          <div>
            <li
              style={
                selected === "settings" ?{
                  backgroundColor: "#068FFF",
                  color: "red !important",
                  border: "2px solid #068FFF",
                  padding: "2px",
                  borderRadius: "3px",
                  marginLeft :'-6%'
                } : {}
              }
            >
              <a href="#" values="settings">
                settings
              </a>
            </li>
          </div>
        </ul>
      </div>
      ) : (
      
          selected == 'coverflow' && showSelected ? <Coverflow /> :selected == 'game' && showSelected ? <GameScreen /> : selected == 'settings' && showSelected ? <Settings/> : <Display/> 
        
         
        
      )
      
            }
      

   </>
  );
};

export default Display;
