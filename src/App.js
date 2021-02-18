import React, {useState,useEffect} from "react";
import socketClient  from "socket.io-client";

const server = "http://localhost:8080";
function App(){
    
    const [cx, setCx] = useState("");
    const [cy, setCy] = useState("");
    const [sx, setSx] = useState("");
    const [sy, setSy] = useState("");

    useEffect(() => {
        const socket = socketClient(server);
        socket.on("serverMessage", data => {
          setCx(data.circle.location.x);
          setCy(data.circle.location.y);
          setSx(data.square.location.x);
          setSy(data.square.location.y);
        });
      });
    
        return(
            <div id="main">
                <svg height="500" width="500" >
                    <circle cx={cx} cy={cy} r = "40" stroke="black" strokeWidth="2" fill = "red" id="circle" />
                </svg>
                <svg width="500" height="500" >
                    <rect x={sx} y = {sy} width="40" height="40" stroke = "black" strokeWidth = "2" fill = "red" id="square" />
                </svg>
            </div>
        )}



export default App;