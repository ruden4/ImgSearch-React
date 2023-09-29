import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Loader } from "./Loader/Loader";
import { Button } from "./Button/Button";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getRequestData } from "../API/API";

export class App extends Component {
  state = {
    request: '',
    page: 1,
    imagesList: [],
    total: 0,
    isLoading: false,
    error: ''
  }
  reset = () => {
    this.setState({ page: 1, imagesList: [] });
  };

  handleMoreBtn = () => {
    this.setState(prevState => ({
      page: prevState.page + 1
    }))
  }

  currentRequest = data => {
    this.reset();
    this.setState({request: data})
  }

  async componentDidUpdate(_, prevState) {
    const { request, page } = this.state;
    if (page !== prevState.page || request !== prevState.request) {
      this.setState({isLoading:true})
      try {
        const data = await getRequestData(request, page);
        this.setState(prevState => ({
          imagesList: [...prevState.imagesList, ...data.hits],
          total: data.totalHits,
        }));

        !data.totalHits && toast.info(`Sorry, no results...`, {
          autoClose: 3000,
          hideProgressBar: true,
          theme: 'colored',
        });

      } catch (error) {
        console.log(error)
      } finally {
        this.setState({isLoading:false})
      }
    }
  }

render() {
  const { currentRequest, state } = this;
  const { imagesList, isLoading, total, page} = state;
  return(
    <>
    <Searchbar onSubmit={currentRequest}/>
    {isLoading && <Loader/>}
    <ImageGallery data={imagesList}/>
    {page < Math.ceil(total / 12 ) && <Button loadMore={this.handleMoreBtn}/>}
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
/>
    </>
  )}};