import React,{useState} from 'react';
import Card from '../Card';
import Godown from '../Godown/Godown-facA/godown';
import GodownfacB from '../Godown/Godown-facB/godown';
import GodownfacC from '../Godown/Godown-facC/godown';
import { fac1,fac2,fac3 } from '../Object';

const Factory = () => {
    const [showResults, setShowResults] = React.useState(false)
    const [showResults1, setShowResults1] = React.useState(false)
    const [showResults2, setShowResults2] = React.useState(false)
    const onClick = () => setShowResults(true)
    const onClick1 = () => setShowResults1(true)
    const onClick2 = () => setShowResults2(true)
    return(
    <ul>
        <li>
            <div className='"col d-flex justify-content-center' onClick={onClick}><Card {...fac1}/></div>
            { showResults ? <Godown /> : null }
        </li>
        <li>
            <div className='"col d-flex justify-content-center' onClick={onClick1}><Card {...fac2}/></div>
            { showResults1 ? <GodownfacB /> : null }
        </li>
        <li>
            <div className='"col d-flex justify-content-center' onClick={onClick2}><Card {...fac3}/></div>
            { showResults2 ? <GodownfacC /> : null }
        </li>

    </ul>
    )
}
export default Factory