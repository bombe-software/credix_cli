import React from "react";
import Webcam from "react-webcam";
//import * as faceapi from 'face-api.js';
//import axios from 'axios';
//import  * as tf from '@tensorflow/tfjs';
//let model = null;

class WebcamCapture extends React.Component {
  constructor() {
    super()
    this.capture = this.capture.bind(this);
  }

  setRef = webcam => {
    this.webcam = webcam;
  };

  async componentDidMount() {
    //model = await tf.loadLayersModel('http://localhost:3000/model/model.json');
    setInterval(this.capture, 8000);
  }

  capture() {
    if (this.webcam.getScreenshot()) {
      var VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');

      var visualRecognition = new VisualRecognitionV3({
        version: '2018-03-19',
        iam_apikey: 'vUt4mo3qJw0Gbg0B_iNG6dmel_PJptPlym-08bL4k-LH'
      });

      var params = {
        images_file: this.webcam.getScreenshot(),
        classifier_ids: ["DefaultCustomModel_1460318682"],
        threshold: 0.2
      };

      //this.props.handleEstadoEmocional();

      visualRecognition.classify(params, function(err, response) {
        if (err) { 
          console.log(err);
        } else {
          console.log(JSON.stringify(response, null, 2))
        }
      });

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

export default WebcamCapture