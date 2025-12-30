import { useEffect, useState } from 'react';
import Form from '../components/Form/Form';
import Text from '../components/Text/Text';
import PhotosGallery from '../components/PhotosGallery/PhotosGallery';
import { getPhotos } from '../apiService/photos';
import Button from '../components/Button/Button';
import Loader from '../components/Loader/Loader';

const Photos = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [hasMoreImages, setHasMoreImages] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      setIsLoading(true);
      try {
        const { photos, total_results, per_page } = await getPhotos(
          query,
          page
        );
        if (photos.length === 0) {
          setIsEmpty(true);
          return;
        }
        setHasMoreImages(page < Math.ceil(total_results / per_page));
        setImages(prevState => [...prevState, ...photos]);
      } catch (error) {
        setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [page, query]);

  const getQuery = inputValue => {
    setQuery(inputValue);
    setImages([]);
    setPage(1);
    setHasMoreImages(false);
    setIsError(false);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <>
      <Form onSubmit={getQuery} />
      <PhotosGallery photos={images} />
      {hasMoreImages && <Button onClick={handleLoadMore}>Load more</Button>}
      {isEmpty && (
        <Text textAlign="center"> We found nothing with {query}...</Text>
      )}
      {!query && <Text textAlign="center">Let`s begin search 🔎</Text>}
      {isLoading && <Loader />}
      {isError && (
        <Text textAlign="center">Sorry, somrthing went wrong... {isError}</Text>
      )}
    </>
  );
};

export default Photos;
