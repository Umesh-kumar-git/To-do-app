import React,{useState} from "react";

const Homepage = () => {

    const [input, setinput] = useState('')

    const [list ,setList]= useState([])


    const inputEvent = (event)=>{
         setinput(event.target.value)
        
    }
    const Handler = ()=>{
        if (input=="") {
            return alert("Enter Something")
        }
        setList([...list,input])
        setinput('')
    }

    
    const dlt_item=(i)=>{
      setList( list.filter((cur,id)=>
        {
           return  i !== id 
        }))
    }
  return (
    <>
      <div
        className="wapper"
        style={{
          width: "98vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div className="heading">
          {" "}
          <h1 style={{}}>Vicky To-do App </h1>{" "}
        </div>
        <div
          className="wapper"
          style={{ width: "50%", display: "flex", justifyContent: "center", backgroundColor:"blue"}}
        >
          <h3>Make your life easy with To-do App</h3>
        </div>
        <div className="inputbox"style={{ width:"50%", textAlign:"center" , backgroundColor:"cyan", display:"flex", justifyContent:"space-around"}} >
          <input type="text"  placeholder="  Text here..." value={input}  name="textArea" onChange={inputEvent} style={{outline:"none", border:"none", padding:"0.5rem 1rem",width:"320px",fontSize:"18px"}} />
          <button onClick={Handler} >Save</button>
        </div>
        <div className="lists" style={{ width:"50%",display:"flex", flexDirection:"column" }}>
        {list.map((elem ,i)=>{
      return(
        <div className="list" style={{ width:"100%", marginTop:"1rem" ,background:"blue", display:"flex" ,alignItems:"center"}}>
             <h3 style={{marginLeft:"5rem", width:"70%" }} key={i}>{elem}     </h3>
             <button onClick={()=>{dlt_item(i)}} style={{fontSize:"16px", height:"50%"}}>Delete</button>
        </div>
   
      )
    })} 
             </div>
     
      </div>

    </>
  );
};

export default Homepage;
