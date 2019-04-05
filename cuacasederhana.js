
import React from 'react';
import { StyleSheet, Text, View, AppRegistry,Button,TextInput } from 'react-native';

export default class App extends React.Component {

getWeather=() =>{
let url = 'http://api.openweathermap.org/data/2.5/weather?q='+this.state.city+ '&appid=7fb00d5313a4577c055411e5ea605746&units=metric';
fetch (url)
.then((response) => response.json())
.the((responseJson) =>{
console.log(responseJson);
this.setState({
  forencast: {
    main: responseJson.weather[0].main,
    description: responseJson.weather[0].description,
    temp: responseJson.main.temp
  }
});
