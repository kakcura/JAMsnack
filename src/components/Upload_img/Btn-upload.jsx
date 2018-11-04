import React, { Component } from 'react';
import './Btn.style.css';


class UploadBtn extends Component {
  state = { 
    uploadFileName: ''
   }

  handleChangeFileName = (e) => {
    this.setState({
      uploadFileName: e.target.files[0].name
    })
  }

  render() { 
    const { uploadFileName } = this.state;
    return ( 
      <form id='upload-image-form'>
        <input type="file" name="pic" accept="image/*;capture=camera" id='input-image' onChange={(e) => this.handleChangeFileName(e)}/>
        <button type='submit' className='btn-submit' htmlFor='input-image'>
          Browse
        </button>
        <span className='file-name'>{uploadFileName}</span>
        <p className='some-text'>Lets see what if its healthy</p>
      </form>
     );
  }
}
 
export default UploadBtn;