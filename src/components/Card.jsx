import React from 'react';
import './card-style.css'

const Card = props => {
    let colr= "";
    let btntext="";
    let btnStyle="";
    if(props.progress<33)
    {
      colr= "danger";
      btntext="Critical";
      btnStyle="danger";
    }
    else if(props.progress>66)
    {
      colr= "success";
      btntext="On track"
    }
    else
    {
      colr="warning";
      btntext="Off Track"
    }
    const progwidth=  props.progress + "%";
    console.log(progwidth);
    const classname= "progress-bar bg-"+ colr;
    const btnclassname= "btn font-weight-bold btn-sm py-0 px-1 btn-outline-"+ colr;
    
    return (
      <div className='card ' style={{ padding: '10px', width: "12.7rem" }}>
        <div className='row px-0 ml-0 pl-0 mb-2'>
          <div className="font-weight-bold text-primary "><p>{props.place}</p></div>
          <div className=" pl-2 font-weight-bold"><p style={{ fontSize: '12px' }}>{props.progress}% <span style={{ fontSize: '10px' }}>completed</span></p></div>
        </div>
        <div className='ml-0 text-left'>
          <div>
            <div className='text'>
              <div><button className={btnclassname} style={{ fontSize: '0.75em' }}>{btntext}</button></div>
              <p className='my-0'>Total sale-{props.totalsale}</p></div>
          </div>
          <p className='mb-2'>Target sale-{props.targetsale}</p>

          <div class="progress">
            <div class={classname} style={{ width: progwidth }} role="progressbar" aria-valuenow={props.progress} aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
      </div>
            );
    
}

export default Card;