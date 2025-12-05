import { useState } from 'react'

function GenInfo(){
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
                <h1>General Information</h1>

                <section>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input id='name' type="text" placeholder='Joe Shmoe'/>
                    </div>

                    <div>
                        <label htmlFor="email">Email:</label>
                        <input id='email' type="email" placeholder='example@gmail.com'/>
                    </div>

                    <div>
                        <label htmlFor="phone">Phone Number:</label>
                        <input id='phone' type="tel" placeholder='000-000-0000'/>
                    </div>
                </section>
            </form>
            <div>
                <button className='navButton'>v</button>
            </div>
        </div>
    </div>)
}
export default GenInfo;