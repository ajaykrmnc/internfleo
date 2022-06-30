import React from 'react';
import Card from '../../../Card';
import { house1,house2,house3 } from '../../../Object';

const Warehouse = () => {

    return(
    <ul>
        <li><div className='"col d-flex justify-content-center'><Card {...house1}/></div></li>
        <li><div className='"col d-flex justify-content-center'><Card {...house2}/></div></li>
        <li><div className='"col d-flex justify-content-center'><Card {...house3}/></div></li>
    </ul>
    )
}
export default Warehouse