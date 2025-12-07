import { useState } from 'react'

function Education({prop,setProp}){
    const [school, setSchool] = useState('Town University');
    const [major, setMajor] = useState('Computer Science');
    const [complete, setComplete] = useState('00/00/0000');

    console.log(prop);

    return(<div className={'container ' + (prop['two']?'show':'hide')} >
        <div className='display'>
            <div>
                <h2>Education</h2>
                
                <p>
                    Graduated from {school} with a degree in {major} on {complete}.
                </p>
            </div>
        </div>
        <div className='sidebar'>
            <div>
                <button className='navButton' onClick={()=>setProp({"one":1,"two":0,"three":0})}>^</button>
            </div>
            <form>
                <h1>Education</h1>

                <section>
                    <div>
                        <label htmlFor="school">School Name:</label>
                        <input id='school' type="text" placeholder='Town University' onChange={(e)=>setSchool(e.target.value)} />
                    </div>

                    <div>
                        <label htmlFor="major">Degree:</label>
                        <input id='major' type="text" placeholder='Computer Science' onChange={(e)=>setMajor(e.target.value)} />
                    </div>

                    <div>
                        <label htmlFor="complete">Degree Completion:</label>
                        <input id='complete' type="date" onChange={(e)=>setComplete(e.target.value)} />
                    </div>
                </section>
            </form>
            <div>
                <button className='navButton' onClick={()=>setProp({"one":0,"two":0,"three":1})}>v</button>
            </div>
        </div>
    </div>)
}
export default Education;