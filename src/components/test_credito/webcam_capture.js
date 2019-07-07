import React from "react";
import Webcam from "react-webcam";
//import * as faceapi from 'face-api.js';
//import axios from 'axios';
//import  * as tf from '@tensorflow/tfjs';
//let model = null;
import { graphql } from 'react-apollo';
import prediccion from '../../queries/prediccion';
import string_nativo from '../../queries/string_nativo';
import suscribe_to_prueba from '../../subscriptions/prueba';
import io from 'socket.io-client';

var socket = io('http://localhost:9000');

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
    console.log('lol')
    socket.on('connect', function(e){
      console.log(e)
    });
    //model = await tf.loadLayersModel('http://localhost:3000/model/model.json');
    setInterval(this.capture,3000);
  }



  runQuery(imagen) {;
    socket.emit('lol', imagen);
    socket.on('image', e=>{
      this.props.handleEstadoEmocional(JSON.parse(e.string)[0].class, JSON.parse(e.string)[1].class,e);
    })
    /*
    this.props.mutate({
      variables: {
        imagen
      }
    }).then((res) =>{
      console.log('');
    }).catch((res) => {
      if (res.graphQLErrors) {
        const errors = res.graphQLErrors.map(error => error.message);
        const error = errors[0];
        this.setState({ error });
      }
    })
    */
  }

  capture() {
    if(this.webcam){
      if (this.webcam.getScreenshot()) { 
        this.runQuery(this.webcam.getScreenshot())
      }
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

export default graphql(string_nativo)(graphql(prediccion)(WebcamCapture));