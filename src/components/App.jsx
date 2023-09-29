import { useState, useEffect } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Loader } from "./Loader/Loader";
import { Button } from "./Button/Button";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getRequestData } from "../API/API";

export function App() {
  
  const [request, setRequest] = useState('');
  const [page, setPage] = useState(1);
  const [imagesList, setImagesList] = useState([]);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState('');

  const reset = () => {
    setPage(1);
    setImagesList([]);
  };

  const handleMoreBtn = () => {
    setPage(s => s + 1)
  };

  const currentRequest = data => {
    reset();
    setRequest(data)
  };

  useEffect(() => {
    if (!request) return; 
      setIsLoading(true)
      const apidata = async () => {
        try {
          const {hits, totalHits} = await getRequestData(request, page);
          setImagesList(s => [...s, ...hits]);
          setTotal(totalHits);
        !totalHits && toast.info(`Sorry, no results...`, {
          autoClose: 3000,
          hideProgressBar: true,
          theme: 'colored',
        });

      } catch (error) {
          setError(error);
      } finally {
        setIsLoading(false)
      }
  } 
    apidata()
  }, [request, page])


  return(
    <>
    <Searchbar onSubmit={currentRequest}/>
    {isLoading && <Loader/>}
    <ImageGallery data={imagesList}/>
    {page < Math.ceil(total / 12 ) && <Button loadMore={handleMoreBtn}/>}
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
    )
};