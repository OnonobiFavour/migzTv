import React from 'react'
import Loader from './Loader'
import SignUp from './SignUp'
import { useEffect } from 'react'
import './Home.css'
import { useState } from 'react'

const Home = () => {
    const [url, setUrl] = useState()
    const [load, setLoad] = useState(true)
    const [delay, setDelay] = useState(7000)
    
    useEffect(() =>{
        const timer = setTimeout(() =>{
            setLoad(false)
            fetch(url).then((res) => res.json).then((data) =>{
                // console.log(data)
            })
            .catch((err)=>{
                console.log(err)
            })
        }, delay)
        return () => clearTimeout(timer)
        
    }, [url, delay])
  return (
        <>
         {load ? <Loader/> :
         <SignUp/>
        }
        </>

  )
}

export default Home