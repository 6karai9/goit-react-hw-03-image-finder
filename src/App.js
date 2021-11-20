import React, { Component } from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';

class App extends Component {
  state = {
    name: '',
  };

  handleFormSubmit = name => {
    this.setState({ name: name });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />{' '}
        <ToastContainer autoClose={2000} />
        <ImageGallery name={this.state.name} />
      </>
    );
  }
}

export default App;
