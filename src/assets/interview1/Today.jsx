import My_will from "./My_will";
import { Link, Route } from "react-router-dom";
function Today(){
  
    const today=new Date();
    const month =today.toLocaleDateString("en-IN",{
        month:"long",
    })
    const day =today.toLocaleDateString("en-IN",{
        day:"2-digit",
    })
    const year =today.toLocaleDateString("en-IN",{
        year:"numeric",
    })
    return(
        <>
        <div className="container today">
            <div className="container ">
            <h5>Good morging, Vinoth!</h5>
            <p>Today is {month} {day}, {year}</p>
            </div>
        </div>
        
            <My_will/>
            <Link to='/home'><div className="container sticky-bottom s-button">
            <div className="container text-center ">
              <div className="row ">
                <div className="col text-start p-3" >
                  <button style={{ backgroundColor: 'white' }} className="p-2">
                    <span style={{ backgroundColor: 'red', padding: '10px', borderRadius: '20%', margin: '0', color: "white" }}>+</span>
                    ADD NEW</button>
                </div>
              </div>
            </div>
          </div>
          </Link>
        </>
    )
}
export default Today;