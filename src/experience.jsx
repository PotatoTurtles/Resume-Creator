import { useState } from 'react'

function Experience(){
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
                <h1>Experience</h1>

                <section>
                    <div>
                        <label htmlFor="company">Company Name:</label>
                        <input id='company' type="text" placeholder='Town University'/>
                    </div>

                    <div>
                        <label htmlFor="position">Position title:</label>
                        <input id='position' type="text" placeholder='Computer Science'/>
                    </div>

                    <div>
                        <label htmlFor="desc">Position Description</label>
                        <textarea name="description" id="desc"></textarea>
                    </div>

                    <div>
                        <label htmlFor="start">Start Date:</label>
                        <input id='start' type="date" />
                    </div>
                    <div>
                        <label htmlFor="end">End Date:</label>
                        <input id='end' type="date" />
                    </div>
                </section>
            </form>
            <div>
                <button></button>
            </div>
        </div>
    </>)
}
export default Experience;