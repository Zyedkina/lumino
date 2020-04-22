import React from "react";
import './FaceRecognition.css';

const FaceRecognition = ({url, box}) => {
    let a = url;
    let b = box;
    console.log("Face Box ", box);
    return (
        <div className="center ma" >
            <div className="center absolute mt2">
                <img id='image' alt="" src={a} width='500px' height='auto' />
                <div className="bounding-box" style={{top: b.topRow, right: b.rightCol, bottom: b.bottomRow,left: b.leftCol }}></div>
            </div>
        </div>
    );
}

export default FaceRecognition;

