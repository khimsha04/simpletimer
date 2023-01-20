import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';

function App() {

  const [seconds,setSeconds]=useState(0);
  const [minutes,setMinutes] = useState(0);
  
  var timer;
  useEffect(()=>{
     timer=setInterval(()=>{
      setSeconds(seconds+1);

        if(seconds===59){
          setMinutes(minutes + 1)
          setSeconds(0)
        }
    },1000)

    return ()=>clearInterval(timer);

  });

  const restart =()=>{
    setMinutes(0);
    setSeconds(0);
  };
  
  const stop=()=>{
    clearInterval(timer); 
  }



 if(seconds===10){
  alert('Timeeeee!!!!');
  setMinutes(0);
  setSeconds(0);
 }

  return (
    <div className="App">
     <div style={styles.container}>
      <h1 style={styles.timer}>timer</h1>
      <h1 style={styles.time} >{minutes<10?"0"+minutes:minutes}:{seconds<10?'0'+seconds:seconds}  </h1>

      <div style={styles.buttons}>
        <button
        style={styles.restart}
        onClick={restart} >restart</button>
        <button
        style={styles.stop}
        onClick={stop} >stop</button>
        </div>
      
     </div>
    </div>
  );
}

const styles={
  container:{
    width:700,
    height:400,
    border:'1px solid black',
    margin:'0px auto',
    marginTop:50
  },
  timer:{
    fontSize:50,
    color:'green',
  },
  time:{
    fontSize:40
  },
  restart:{
    width:100,
    height:40,
    border:'none',
    color:'white',
    backgroundColor:"green",
    fontSize:15,
    borderRadius:10,
    margin:20
  },
  stop:{
    width:100,
    height:40,
    border:'none',
    color:'white',
    backgroundColor:"red",
    fontSize:15,
    borderRadius:10,
    margin:20
  },

}

export default App;
