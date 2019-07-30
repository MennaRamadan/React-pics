//semantic UI
//handling onChange for input type
//onClick, onSubmit, onChange
//talking about uncontrolled input to controlled one
//trigger search after click on enter button
//props is to pass values from parent to child
//here is an example of calling child to parent (searchBar and app.js)
//integration with unsplash API to get list of images with specific keyword
//using axios to get data
//using away and async
//key props for each element of items
//display grid
//accessing html elements in react using ref
//eventHandler
//to be alble to make child communicate with parent we pass callback from parent to child and child will call it
//every time we need to render list we will use .map function


import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(<App/> , document.querySelector("#root"));