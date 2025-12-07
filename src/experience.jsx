import { useState } from 'react'

function Experience({prop,setProp}){
    const [company,setCompany] = useState('Big Big Company LLC');
    const [position,setPosition] = useState('Super Manager');
    const [description,setDescription] = useState('Did lots of work n stuffs...');
    const [start,setStart] = useState('00/00/0000');
    const [end,setEnd] = useState('00/00/0000');

    return(<div className={'container ' + (prop['three']?'show':'hide')}>
        <div className='display'>
            <div>
                <h2>Experience</h2>
                <div>
                    <div style={{display:'flex',justifyContent:'start',gap:'2vw'}}>
                        <span>{company}</span>
                        <span>{position}</span>
                        <p>{start} to {end}</p>
                    </div>
                    <p>{description}</p>
                </div>
            </div>
        </div>
        <div className='sidebar'>
            <div>
                <button className='navButton' onClick={()=>setProp({"one":0,"two":1,"three":0})}>^</button>
            </div>
            <form>
                <h1>Experience</h1>

                <section>
                    <div>
                        <label htmlFor="company">Company Name:</label>
                        <input id='company' type="text" placeholder='Big Big Company LLC' onChange={(e)=>setCompany(e.target.value)}/>
                    </div>

                    <div>
                        <label htmlFor="position">Position title:</label>
                        <input id='position' type="text" placeholder='Super Manager'onChange={(e)=>setPosition(e.target.value)}/>
                    </div>

                    <div>
                        <label htmlFor="desc">Position Description</label>
                        <textarea name="description" id="desc" placeholder='Did lots of work n stuffs...' onChange={(e)=>setDescription(e.target.value)}></textarea>
                    </div>

                    <div>
                        <label htmlFor="start">Start Date:</label>
                        <input id='start' type="date" onChange={(e)=>setStart(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="end">End Date:</label>
                        <input id='end' type="date" onChange={(e)=>setEnd(e.target.value)}/>
                    </div>
                </section>
            </form>
        </div>
    </div>)
}
export default Experience;