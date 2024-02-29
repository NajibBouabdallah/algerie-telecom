import React from 'react';
import { useState } from 'react';
import { client } from '../../../sanityfrontend/src/client';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '../util/data';
import { useEffect } from 'react';


const Pauserequest = () => {

    const [name,setName] = useState("");
    const [phone,setphone] = useState("");
    const [password,setpassword] = useState("");
    const [nd,setND] = useState(0);
    const navigate = useNavigate() 

const handle = () =>{

client.createIfNotExists(doc).then(()=>{
  navigate('./',{repalce:true})
})
}
    const doc={
        _id:name,
        _type:'user',
        Name:name,
        PhoneNumbe:phone,
        password:password,
        nd:nd,
        
    };

    const query= useQuery(name);
    

  return (
    <div className='flex flex-row w-full h-screen bg-primary rounded-2xl'>
      <form>
        <label>Name</label><br/>
        <input type='text' onChange={(e)=>{
          setName(e.target.value)
        }} />
        <label>Phone Number</label><br/>
        <input type='text' onChange={(e)=>{
          setphone(e.target.value)
        }} />
        <label>Password</label>
        <input type='password' onChange={(e)=>{
          setpassword(e.target.value)}}/>
        <label>Number of Stop Days</label>
        <input type='range' />  
        <button type='submit' onClick={handle()}>Submit</button>
      </form>
    </div>
  );
      }

export default Pauserequest;
 