import React from 'react';
import { StarFill } from 'react-bootstrap-icons';


const Card = (props)=>{


  return(
    
     <div className="comment">
                  <div className="starContainer">
                      <StarFill style={{color: 'orange'}}/>
                      <StarFill style={{color: 'orange'}}/>
                      <StarFill style={{color: 'orange'}}/>
                  </div> 
                  <p>some commetn sdf df sd fsdf sd fsd ff ssss sssss sssss some commetn sdf df sd fsdf sd fsd ff ssss sssss ssss</p>                
       </div>  
    
  )
}

export default Card;