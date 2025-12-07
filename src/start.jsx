import { useState } from 'react'

function Start({prop,setProp}){
    return(
        <div className={'container ' + (prop==='Start' ?'show':'hide')}>
            <div className='sidebar' style={{width:'100%'}}>
                <h1 style={{fontSize:'10vw'}}>Ready to Resumé?</h1>
                <div>
                    <button className='navButton' onClick={()=>setProp({"one":1,"two":0,"three":0})} style={{fontSize:'3vw'}}>Start</button>
                </div>
            </div>
        </div>
    )
}
export default Start;