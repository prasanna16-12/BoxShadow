import React from 'react'
import '../styles/DisplayStyle.css'
const DisplayStyle = (props) => {

    // console.log(props);

    const { offsetX, offsetY, blur, spread, color, set } = props;

    console.log(offsetX, offsetY, blur, spread, color, set);

    const style = {
        "boxShadow": set + offsetX + "px " + offsetY + "px " + blur + "px " + spread + "px " + color
    }

    return (
        <div className='preview-container' style={style}>

        </div>
    )
}

export default DisplayStyle
