import React from 'react'
import styles from "../styles/style.module.css";
import Album from './Album';

export default function ShowMusic({selected,showSelected}) {


   
  return (
    <>
    {
      !showSelected ? (
        <div className="container ipodjs">
        <h3 className="title-ipod">Music</h3>
        <ul className="menu-list" type="none">
          <div>
            <li
              style={
                selected === "AllSongs"
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
              <a href="#" values="AllSongs">
                All songs
              </a>
             
            </li>
          </div>
          <div>
            <li
              style={
                selected === "Artist"
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
              <a href="#" values="Artist">
                Artist
              </a>
            </li>
          </div>
          <div>
            <li
              style={
                selected === "Album"
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
              <a href="#" values="Album">
                Album
              </a>
            </li>
          </div>
         
         
        </ul>
      </div>
      ) : (
      
        selected == 'Album' && showSelected ? <Album />: <ShowMusic/> 
         
        
      )
      
            }
      

   </>
  )
}

