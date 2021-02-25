import React from 'react';
import ReactDom from 'react-dom';



class App extends React.Component{
    state = { latitude : null,errorMessage : ''};
       
    
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({latitude : position.coords.latitude});
            },
            err => {
                this.setState({errorMessage:err.message});
            }
        );
    }
    

    render(){
       if(this.state.errorMessage && !this.state.latitude){
            return <div> Error : {this.state.errorMessage}</div>
       }
       if(!this.state.errorMessage && this.state.latitude){
           return <div> Latitude:{this.state.latitude}</div>
       }
       return <div>Loading </div>;
        }
}

ReactDom.render(
    <App />,
    document.querySelector('#root')
);