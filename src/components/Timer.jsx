import React, {useState,useEffect} from 'react'

const Timer = (props) => {
    // console.log(props.initial)
    const [timer, setTimer] = useState(props.initial)
    useEffect(() =>{
        const id=setInterval(() => {
            if(timer===props.end){
                clearInterval(id);
            }
            else{
                setTimer(timer+1)
            }
        },1000)
        return ()=>{
            clearInterval(id)
        }
    },[timer])
    
  return (
    <div>
        Timer
        <div>{timer} sec</div>
    </div>
  )
}

export default Timer