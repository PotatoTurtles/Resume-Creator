import GenInfo from './genInfo.jsx'
import Education from './education.jsx'
import Experience from './experience.jsx'
import Start from './start.jsx'
import End from './end.jsx'

import { useState } from 'react'

function Combine(){
    const [show,setShow] = useState('Start')
    const [resume, setResume] = useState({
    genInfo: {
      name: 'Joe Shmoe',
      email: 'example@gmail.com',
      phone: '000-000-0000',
    },
    education: {
        school: 'Town University',
        major: 'Computer Science',
        complete: '00/00/0000'
    },
    experience: {
        company:'Big Big Company LLC',
        position: 'Super Manager',
        description: 'Did lots of work n stuffs...',
        start: '00/00/00',
        end: '00/00/0000'
    },
  });

    return(
        <>
            <Start prop={show} setProp={setShow}/>
            <GenInfo prop={show} setProp={setShow} resume={resume} setResume={setResume} />
            <Education prop={show} setProp={setShow} resume={resume} setResume={setResume} />
            <Experience prop={show} setProp={setShow} resume={resume} setResume={setResume} />
            <End prop={show} setProp={setShow} resume={resume} />
        </>
    )
}
export default Combine;