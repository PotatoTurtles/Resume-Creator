import { useState } from 'react'

function GenInfo({prop,setProp}){
    const [name,setName] = useState('Joe Shmoe');
    const [email,setEmail] = useState('example@gmail.com');
    const [phone,setPhone] = useState('000-000-0000');

    return(<div className={'container ' + (prop['one']?'show':'hide')}>
        <div className='display'>
            <div>
                <h2>General Information</h2>
                <div style={{display:'flex',justifyContent:'start',gap:'2vw'}}>
                    <span>{name}</span>
                    <span>{email}</span>
                    <span>{phone}</span>
                </div>
            </div>
        </div>
        <div className='sidebar'>
            <form>
                <h1>General Information</h1>

                <section>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input id='name' type="text" placeholder='Joe Shmoe' onChange={(e)=>{setName(e.target.value)}}/>
                    </div>

                    <div>
                        <label htmlFor="email">Email:</label>
                        <input id='email' type="email" placeholder='example@gmail.com' onChange={(e)=>{setEmail(e.target.value)}}/>
                    </div>

                    <div>
                        <label htmlFor="phone">Phone Number:</label>
                        <input id='phone' type="tel" placeholder='000-000-0000'  onChange={(e)=>{setPhone(e.target.value)}}/>
                    </div>
                </section>
            </form>
            <div>
                <button className='navButton' onClick={()=>setProp({"one":0,"two":1,"three":0})}>v</button>
            </div>
        </div>
    </div>)
}
export default GenInfo;