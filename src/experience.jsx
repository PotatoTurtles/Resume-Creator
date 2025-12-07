import { useState } from 'react'

function Experience({prop,setProp,resume,setResume}){
    return(<div className={'container ' + (prop['three']?'show':'hide')}>
        <div className='display'>
            <div>
                <h2>Experience</h2>
                <div>
                    <div style={{display:'flex',justifyContent:'start',gap:'2vw'}}>
                        <span>{resume.experience.company}</span>
                        <span>{resume.experience.position}</span>
                        <p>{resume.experience.start} to {resume.experience.end}</p>
                    </div>
                    <p>{resume.experience.description}</p>
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
                        <input id='company' type="text" placeholder='Big Big Company LLC' onChange={(e)=>setResume({...resume, experience:{...resume.experience,company:e.target.value}})}/>
                    </div>

                    <div>
                        <label htmlFor="position">Position title:</label>
                        <input id='position' type="text" placeholder='Super Manager'onChange={(e)=>setResume({...resume, experience:{...resume.experience,position:e.target.value}})}/>
                    </div>

                    <div>
                        <label htmlFor="desc">Position Description</label>
                        <textarea name="description" id="desc" placeholder='Did lots of work n stuffs...' onChange={(e)=>setResume({...resume, experience:{...resume.experience,description:e.target.value}})}></textarea>
                    </div>

                    <div>
                        <label htmlFor="start">Start Date:</label>
                        <input id='start' type="date" onChange={(e)=>setResume({...resume, experience:{...resume.experience,start:e.target.value}})}/>
                    </div>
                    <div>
                        <label htmlFor="end">End Date:</label>
                        <input id='end' type="date" onChange={(e)=>setResume({...resume, experience:{...resume.experience,end:e.target.value}})}/>
                    </div>
                </section>
            </form>
            <div>
                <button className='navButton' onClick={()=>setProp("Complete")}>Complete</button>
            </div>
        </div>
    </div>)
}
export default Experience;