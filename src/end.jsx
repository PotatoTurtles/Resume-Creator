import { useState } from 'react'

function End({prop,setProp,resume}){
    return(
        <div className={'container ' + (prop==='Complete' ?'show':'hide')}>
            <div className='sidebar' style={{width:'100%'}}>
                <div>
                    <button className='navButton' onClick={()=>setProp({"one":0,"two":0,"three":1})} >Edit</button>
                </div>
                <div>
                    <h2>General Information</h2>
                    <div style={{display:'flex',justifyContent:'start',gap:'2vw'}}>
                        <span>{resume.genInfo.name}</span>
                        <span>{resume.genInfo.email}</span>
                        <span>{resume.genInfo.phone}</span>
                    </div>
                </div>
                <div>
                    <h2>Education</h2>
                    
                    <p>
                        Graduated from {resume.education.school} with a degree in {resume.education.major} on {resume.education.complete}.
                    </p>
                </div>
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
        </div>
    )
}
export default End;