import React, {useState} from 'react';
import Card from '../../Card';
import Warehouse from '../../warehouse/warehouse-facA/warehouse-facA-GodA/warehouse'
import Warehouse1 from '../../warehouse/warehouse1'
import { god1,god2,god3 } from '../../Object';

const Godown = () => {
    const [showResults, setShowResults] = React.useState(false)
    const [showResults1, setShowResults1] = React.useState(false)
    const onClick = () =>{ showResults ? showResults(false) : setShowResults(true)}
    const onClick1 = () =>{setShowResults1(true)} 
    return(
    
    <ul>
        <li><div className='"col d-flex justify-content-center' onClick={onClick}><Card {...god1} /></div>
        { showResults ? <Warehouse /> : null }</li>
        <li><div className="col d-flex justify-content-center" onClick={onClick1}><Card {...god2} /></div>
        { showResults1 ? <Warehouse1 /> : null }</li>
        <li><div className='"col d-flex justify-content-center'><Card {...god3} /></div></li>
    </ul>
    )
}
export default Godown