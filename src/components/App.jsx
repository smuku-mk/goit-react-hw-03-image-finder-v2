import { Component } from 'react';

import { Searchbar } from './Searchbar';
import { fetchImages } from '../services/images';
import { ImageGallery } from './ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem';
import { Button } from './Button';
import { Loader } from './Loader';

class App extends Component {
  state = {
    page: 1,
    images: [],
    query: '',
    loading: false,
  };

  handleSubmit = async evt => {
    evt.preventDefault();

    const form = evt.currentTarget;
    const { input } = form.elements;
    this.setState({ loading: true });
    const response = await fetchImages({ query: input.value });
    this.setState({
      images: response,
      query: input.value,
      loading: false,
    });

    form.reset();
  };

  handleClick = async () => {
    const { page, query } = this.state;
    const nextPage = page + 1;
    this.setState({ loading: true });
    const response = await fetchImages({ query: query, page: nextPage });
    this.setState(prevState => ({
      images: [...prevState.images, ...response],
      page: nextPage,
      loading: false,
    }));
  };

  render() {
    const { images, loading } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery>
          {images.map(image => (
            <ImageGalleryItem
              key={image.id}
              imgSrc={image.webformatURL}
              imgAlt={image.tags}
            />
          ))}
        </ImageGallery>
        {images.length ? <Button onClick={this.handleClick} /> : ''}
        {loading && <Loader />}
      </>
    );
  }
}

export default App;
