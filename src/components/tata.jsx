import React from 'react';
import Card from './Card';
import Factory from './factory/factory';
import { company } from './Object';

const Tata = () => {
    const [showResults, setShowResults] = React.useState(false)
    const onClick = () => setShowResults(true)
    return(
    <li>
        <div className='"col d-flex justify-content-center pt-5 pl-5' onClick={onClick}><Card {...company}/></div>
        <ul className='pt-0'>
        { showResults ? <Factory /> : null }
        </ul>

        
    </li>
    )
}
export default Tata