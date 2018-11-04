import React, { Component } from 'react'

class MediaDevice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      media: ''
    }
    this.video = React.createRef();
  }


    foo = () => {
    console.log(this.video, 'fasfs')
    const constraints = {
      audio: true,
      video: {
        width: { ideal: 1280 },
        height: { ideal: 720 }
      }
    }

    navigator.mediaDevices.getUserMedia(constraints)
      .then((stream) => {
        console.log(stream);
        // this.video.src = 'https://www.youtube.com/embed/tgbNymZ7vqY';
        this.setState({
          media: stream
        })
        // this.video.onloadedmetadata = function(e) {
        //   this.video.play();
        // };
      }).catch((err) => {
        console.error(err)
      });
  }

  render() { 
    return ( 
      <div>
        <button onClick={() => this.foo()}>BTN</button>
        <video autoPlay title='for-streaming' ref={this.video} src={this.state.media}   width="320" height="240">
        </video>
      </div>
  
     );
  }
}

export default MediaDevice;