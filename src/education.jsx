import { useState } from 'react'

function Education(){
    return(<>
        <div className='display'>
            <div>
                <h2></h2>
                <p></p>
            </div>
        </div>
        <div className='sidebar'>
            <div>
                <button></button>
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
                <button></button>
            </div>
        </div>
    </>)
}
export default Education;