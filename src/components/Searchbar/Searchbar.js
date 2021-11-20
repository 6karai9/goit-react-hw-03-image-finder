import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { ImSearch } from 'react-icons/im';

class Searchbar extends Component {
  state = {
    name: '',
  };

  handleNameChange = event => {
    this.setState({ name: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.name.trim() === '') {
      return toast.error('enter something');
    }
    this.props.onSubmit(this.state.name);
    this.setState({ name: '' });
  };

  render() {
    return (
      <header className="Searchbar">
        <form onSubmit={this.handleSubmit} className="SearchForm">
          <button type="submit" className="SearchForm-button">
            <ImSearch />
            <span className="SearchForm-button-label"></span>
          </button>

          <input
            onChange={this.handleNameChange}
            value={this.state.name}
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
