import { useState } from 'react'

function Education(){
    return(<div className='container'>
        <div className='display'>
            <div>
                <h2>Bluh Bluh Blahh</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At debitis nobis impedit accusamus, odit commodi ratione vero reprehenderit quidem dolores, neque error facere. Delectus qui assumenda, neque eum ad dignissimos.</p>
            </div>
        </div>
        <div className='sidebar'>
            <div>
                <button className='navButton'>^</button>
            </div>
            <form>
                <h1>Education</h1>

                <section>
                    <div>
                        <label htmlFor="school">School Name:</label>
                        <input id='school' type="text" placeholder='Town University'/>
                    </div>

                    <div>
                        <label htmlFor="major">Major:</label>
                        <input id='major' type="text" placeholder='Computer Science'/>
                    </div>

                    <div>
                        <label htmlFor="complete">Degree Completion:</label>
                        <input id='complete' type="date" />
                    </div>
                </section>
            </form>
            <div>
                <button className='navButton'>v</button>
            </div>
        </div>
    </div>)
}
export default Education;