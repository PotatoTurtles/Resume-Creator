import { useState } from 'react'

function Experience(){
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
                <button className='navButton'>v</button>
            </div>
        </div>
    </div>)
}
export default Experience;