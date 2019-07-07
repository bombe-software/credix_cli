import React from "react";
import Webcam from "react-webcam";
//import * as faceapi from 'face-api.js';
//import axios from 'axios';
//import  * as tf from '@tensorflow/tfjs';
//let model = null;
import { graphql } from 'react-apollo';
import prediccion from '../../queries/prediccion';

class WebcamCapture extends React.Component {
  constructor() {
    super()
    this.capture = this.capture.bind(this);
    this.runQuery = this.runQuery.bind(this);
  }

  setRef = webcam => {
    this.webcam = webcam;
  };

  async componentDidMount() {
    //model = await tf.loadLayersModel('http://localhost:3000/model/model.json');
    setInterval(this.capture, 5000);
  }

  runQuery(imagen) {
    console.log('esta funcionando');
    this.props.mutate({
      variables: {
        imagen
      }
    }).then((res) =>{
      console.log(res);
    }).catch((res) => {
      if (res.graphQLErrors) {
        const errors = res.graphQLErrors.map(error => error.message);
        const error = errors[0];
        this.setState({ error });
      }
    })
  }

  capture() {
    if (this.webcam.getScreenshot()) {
      // 
      this.runQuery(this.webcam.getScreenshot())
      /*
      var canvas = this.props.canvas.current; 
      canvas.height = 300;
      canvas.width = 150;
      var ctx = canvas.getContext("2d"); 
      var image = new Image(); 
      image.src = this.webcam.getScreenshot();
      image.onload = function() {
          ctx.drawImage(image, 0, 0); 
      };
      */
      //var image1 = ctx.getImageData(0, 0, canvas.height, canvas.width);
      /*
      var x = tf.browser.fromPixels(image1);
      x= x.reshape([1,300,150,3]);
      const prediction = model.predict(x);
      //console.log(prediction);
      const array_result = prediction.argMax().dataSync();
      */
      //console.log(array_result);
    }
  }

  render() {
    const videoConstraints = {
      width: 10,
      height: 10
    };
    return (
      <div>
        <Webcam
          audio={false}
          height={200}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={200}
          videoConstraints={videoConstraints}
        />
      </div>
    );
  }
}

export default graphql(prediccion)(WebcamCapture);