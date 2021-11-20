import React, { Component } from 'react';
import Loading from '../Loader/Loader';
import FetchImages from '../Services/imgApiService';
import Error from '../Error/Error';
import ImageGalleryView from '../ImageGalleryView/ImageGalleryView';
import Button from '../Button/Button';

class ImageGallery extends Component {
  state = {
    data: null,
    status: 'idle',
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.name;
    const nextName = this.props.name;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevName !== nextName) {
      this.setState({ status: 'pending' });
      FetchImages(nextName)
        .then(response =>
          this.setState({
            data: response.data.hits,
            status: 'resolved',
          }),
        )
        .catch(error => this.setState({ error, status: 'rejected' }));
    } else if (nextPage !== prevPage) {
      FetchImages(nextName, nextPage).then(response =>
        this.setState(prevState => ({
          data: [...prevState.data, ...response.data.hits],
        })),
      );
    }
    window.scrollTo({
      top: 10000,
      behavior: 'smooth',
    });
  }

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { data, status } = this.state;
    const { loadMore } = this;

    if (status === 'idle') {
      return <h1>Let's find some images</h1>;
    }

    if (status === 'pending') {
      return <Loading />;
    }

    if (status === 'rejected') {
      return <Error />;
    }

    if (status === 'resolved') {
      return (
        <>
          <ImageGalleryView imgObj={data} />
          {data.length !== 0 && <Button loadMore={loadMore} />}
        </>
      );
    }
  }
}

export default ImageGallery;
