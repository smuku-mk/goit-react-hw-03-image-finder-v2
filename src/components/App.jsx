import { Component } from 'react';

import { Searchbar } from './Searchbar';
import { fetchImages } from '../services/images';
import { ImageGallery } from './ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem';
import { Button } from './Button';
import { Loader } from './Loader';
import { Modal } from './Modal';

class App extends Component {
  state = {
    page: 1,
    images: [],
    query: '',
    loading: false,
    selectedImage: null,
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

  handleBtnClick = async () => {
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

  handleImgOpenClick = image => {
    this.setState({ selectedImage: image });
  };

  handleImgCloseClick = image => {
    this.setState({ selectedImage: null });
  };

  render() {
    const { images, loading, selectedImage } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery>
          <ImageGalleryItem images={images} onClick={this.handleImgOpenClick} />
        </ImageGallery>
        {loading && <Loader />}
        {images.length ? <Button onClick={this.handleBtnClick} /> : ''}
        {selectedImage && (
          <Modal
            onClose={this.handleImgCloseClick}
            imgSrc={selectedImage.largeImageURL}
            imgAlt={selectedImage.tags}
          />
        )}
      </>
    );
  }
}

export default App;
