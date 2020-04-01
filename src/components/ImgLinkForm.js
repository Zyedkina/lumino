import React from "react";
import './ImgLinkForm.css';

const ImgLinkForm = ({onChangeURL, onSubmit}) => {
    return (
      <div className="">
          <p className="fontA">{'This is an A.I. based face detection system. Give it a try.'}</p>
          <div className='center'>
              <div className='nice pa4 br3 center shadow-5'>
                  <input type='text' className='w-70 f4 pa2 center'
                    placeholder='Enter your image link'
                    onChange={onChangeURL}
                  />
                  <button onClick={onSubmit} className='fontRS w-30 grow f4 link ph3 pv2' style={{ borderColor: "grey", backgroundColor: "#F17D16" }}>Detect</button>
              </div>
          </div>
      </div>
    );
}

export default ImgLinkForm;
