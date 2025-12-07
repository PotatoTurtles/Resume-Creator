import GenInfo from './genInfo.jsx'
import Education from './education.jsx'
import Experience from './experience.jsx'

import { useState } from 'react'

function Combine(){
    const [show,setShow] = useState({"one":1,"two":0,"three":0})

    return(
        <>
            <GenInfo prop={show} setProp={setShow} />
            <Education prop={show} setProp={setShow} />
            <Experience prop={show} setProp={setShow} />
        </>
    )
}
export default Combine;