import { Component } from 'react';

import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';

export class App extends Component {
  state = {
    query: '',
  };

  handleSubmit = data => {
    const { input } = data;
    this.setState({
      query: input,
    });
  };

  render() {
    const { query } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery query={query} />
      </>
    );
  }
}
