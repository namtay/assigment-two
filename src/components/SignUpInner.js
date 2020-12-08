import React from 'react';

function SignUpInner(props) {
    return (
        
        <div className="row form-group">             
                                           
        <label style={{color:"white"}} htmlFor={props.labelname} id={props.labelname} className="col-12 col-sm-4 col-form-label" >{props.name}</label>  
                    
        <div className="col-12 col-md-8">                                 
            <input onChange={props.onChange} value ={props.value} className="form-control" type={props.type}/>
        </div>
     </div>
        
    )
}

export default SignUpInner
