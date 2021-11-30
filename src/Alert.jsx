import React from 'react'
import {first} from './App'

const Alert = () => {

    return(
        
    <first.Consumer>
        {(alert)=>{
            return ( 
                <div style={{height:'40px'}}>
               { alert && <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
            <strong>{alert.message}</strong>
          </div>}
          </div>
                  
              )
          }
        }
        </first.Consumer>)}
        

export default Alert;
