import React from 'react';
import './App.css';

const unsplashId= '7c567bc4b1005e169e49b8918e1150d58979f65b09e30db07ba0ab4a8a979aa5';
const endpoint= 'https://api.unsplash.com/search/photos';

class App extends React.Component {

constructor(){
  super();
  this.query = '';
  this.trackQueryValue = this.trackQueryValue.bind(this);
  this.searchButton = this.searchButton.bind(this);

  this.state= {
    imagesResult: []
  }
}

searchButton(){
  fetch(`${endpoint}?query=${this.query}&client_id=${unsplashId}`)
  .then(res=>{
    return res.json()
  }).then(jsonResponse=>{
    console.log("JSON", jsonResponse)
    this.setState({
      imagesResult: jsonResponse.results
    })
  })
}

trackQueryValue(event){
  this.query = event.target.value;
}

imagesResult(){
return this.state.imagesResult.map(images=>{
  return <img src={images.urls.thumb} alt="" key={images.id}/>
})
}
  render(){
    return (
      <>
      <div className="App">

<input type="text" onChange={this.trackQueryValue}/>
<button onClick={this.searchButton}>search here</button>
<div>{this.imagesResult()}</div>
      </div>
      </>
    );
  }
 
}

export default App;
