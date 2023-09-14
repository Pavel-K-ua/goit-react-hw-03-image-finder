import React from 'react';
import { getImgs } from '../fetchData/fetchData';
import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { Spinner } from './Spinner';

class App extends React.Component {
  state = {
    query: '',
    page: 1,
    per_page: 12,
    id: '',
    dataArr: [],
    isOpen: false,
    currentImg: null,
    currentId: null,
    loading: false,
  };

  fetchData = async () => {
    this.setState({ loading: true });
    try {
      const fetchArr = await getImgs(
        this.state.query,
        this.state.page,
        this.state.per_page
      );
      this.setState(prev => ({
        dataArr: [...prev.dataArr, ...fetchArr],
        // page: (prev.page += 1),
      }));
    } catch (error) {
      console.log(error.massage);
    } finally {
      this.setState({ loading: false });
    }
  };

  async componentDidMount() {
    await this.fetchData(
      this.state.query,
      this.state.page,
      this.state.per_page
    );
  }

  async componentDidUpdate(prevProps, prevState) {
    const { page, query, dataArr } = this.state;
    console.log(prevState.page);
    console.log(page);
    console.log(query);
    if (prevState.page !== page || prevState.query !== query) {
      const newArr = await this.fetchData(
        this.state.query,
        this.state.page,
        this.state.per_page
      );
    }
  }

  handleChangeQuery = queryStr => {
    this.setState({ query: queryStr, page: 1, dataArr: [] });
  };

  onLoadMore = () => {
    this.setState(prev => ({
      page: (prev.page += 1),
    }));
  };

  handleOpenModal = (img, id) => {
    this.setState(prev => ({
      isOpen: !prev.isOpen,
      currentImg: img,
      currentId: id,
    }));
  };
  render() {
    const { query, dataArr, currentImg, currentId, isOpen, loading } =
      this.state;
    return (
      <>
        <SearchBar onChangeQuery={this.handleChangeQuery} />
        {/* {loading && !dataArr.length ? <Spinner /> : } */}
        {loading && <Spinner />}

        <ImageGallery
          dataArr={dataArr}
          handleOpenModal={this.handleOpenModal}
        />
        {dataArr.length && <Button onLoadMore={this.onLoadMore} />}
        {/* <Loader /> */}
        {isOpen && (
          <Modal close={this.handleOpenModal}>
            <img src={currentImg} alt={currentId} />
          </Modal>
        )}
      </>
    );
  }
}

export default App;
