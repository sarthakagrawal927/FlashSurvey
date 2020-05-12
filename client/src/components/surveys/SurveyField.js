// Survey field contains logic to render single input and label
import React from 'react';
//spread operator used below
export default ({ input, label,meta :{error,touched} })=>{
    return (
        <div>
            <label>{label}</label>
            <input {...input} style={{marginBottom: '5px'}}/>
            <div className="red-text" style={{ marginBottom: '20px'}}>
                {touched && error}
            </div>
        </div>
    )
}