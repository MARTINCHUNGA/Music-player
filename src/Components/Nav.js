

import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faMusic} from "@fortawesome/free-solid-svg-icons"


const Nav = ({songListStatus,setSongListStatus}) => {
    return (
        <nav>
            <h1>FACT MARTIN</h1>
            <button onClick={()=>setSongListStatus(!songListStatus)}>
                Song List
                <FontAwesomeIcon icon={faMusic}/>
            </button>

        </nav>
    )
}


export default Nav