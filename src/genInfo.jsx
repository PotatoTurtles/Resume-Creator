import { useState } from 'react'

function GenInfo({prop,setProp,resume,setResume}){
    return(<div className={'container ' + (prop['one']?'show':'hide')}>
        <div className='display'>
            <div>
                <h2>General Information</h2>
                <div style={{display:'flex',justifyContent:'start',gap:'2vw'}}>
                    <span>{resume.genInfo.name}</span>
                    <span>{resume.genInfo.email}</span>
                    <span>{resume.genInfo.phone}</span>
                </div>
            </div>
        </div>
        <div className='sidebar'>
            <div>
                <button className='navButton' onClick={()=>setProp("Start")}>Start</button>
            </div>
            <form>
                <h1>General Information</h1>

                <section>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input id='name' type="text" placeholder='Joe Shmoe' onChange={(e)=>{setResume({...resume, genInfo:{...resume.genInfo,name:e.target.value}})}} />
                    </div>

                    <div>
                        <label htmlFor="email">Email:</label>
                        <input id='email' type="email" placeholder='example@gmail.com' onChange={(e)=>{setResume({...resume, genInfo:{...resume.genInfo,email:e.target.value}})}}/>
                    </div>

                    <div>
                        <label htmlFor="phone">Phone Number:</label>
                        <input id='phone' type="tel" placeholder='000-000-0000'  onChange={(e)=>{setResume({...resume, genInfo:{...resume.genInfo,phone:e.target.value}})}}/>
                    </div>
                </section>
            </form>
            <div>
                <button className='navButton' onClick={()=>setProp({"one":0,"two":1,"three":0})}>v</button>
            </div>
        </div>
    </div>)
}
export default GenInfo;