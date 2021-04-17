import React ,{Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './components/containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
 
  render(){
    return(
      <div>
        <div className='theBurgerTop'></div>
        <div className='theBurgerSeeds1'></div>
        <div className='theBurgerSeeds2'></div>
        <div className='theBurgerSeeds3'></div>
        <div className='theBurgerSeeds4'></div>
        <div className='theBurgerMeat'></div>
        <div className='theBurgerCheese'></div>
        <div className='theBurgerSalad'></div>
        <div className='theBurgerBottom'></div>
     

        <Layout>
          <BurgerBuilder />
        </Layout>
        </div>
    );
  }
}

export default App;
