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
    modal: false,
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

  handleImgOpenClick = () => {
    this.setState({ modal: true });
    console.log('open');
  };

  handleImgCloseClick = () => {
    this.setState({ modal: false });
    console.log('close');
  };

  render() {
    const { images, loading, modal } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery>
          {images.map(image => (
            <ImageGalleryItem
              key={image.id}
              imgSrc={image.webformatURL}
              imgAlt={image.tags}
              onClick={this.handleImgOpenClick}
            >
              {modal && (
                <Modal
                  key={image.id}
                  onClose={this.handleImgCloseClick}
                  imgSrc={image.largeImageURL}
                  imgAlt={image.tags}
                />
              )}
            </ImageGalleryItem>
          ))}
        </ImageGallery>
        {images.length ? <Button onClick={this.handleBtnClick} /> : ''}
        {loading && <Loader />}
      </>
    );
  }
}

export default App;
