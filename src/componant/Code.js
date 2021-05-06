import React from 'react'
import "../styles/Code.css";
function Code(props) {

    const { offsetX, offsetY, blur, spread, color, set } = props;

    const code = `box-shadow:${set} ${offsetX}px ${offsetY}px ${blur}px ${spread}px ${color};`;

    return (
        <React.Fragment>
            <div style={{position:"relative"}}>
                <div className="code-container">
                    <pre>{code}</pre>
                </div>
                <i class="fas fa-clipboard" onClick={()=>{
                    navigator.clipboard.writeText(code);
                    
                }}></i>
            </div>

        </React.Fragment>
    )
}

export default Code;
