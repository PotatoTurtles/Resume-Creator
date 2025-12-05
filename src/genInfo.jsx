import { useState } from 'react'

function GenInfo(){
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
                <button></button>
            </div>
        </div>
    </>)
}
export default GenInfo;