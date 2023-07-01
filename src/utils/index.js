import { toast } from 'react-toastify';

export const checkArrayOfPhotos = pictures => {
  if (pictures.length === 0) {
    toast.info(
      'Sorry, there are no images matching your search query. Please try again',
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
    return true;
  }
};

export const checkAmountOfPhotos = (page, totalPages) => {
  if (page >= totalPages) {
    toast.info("You've reached the end of search results.", {
      position: toast.POSITION.TOP_CENTER,
    });
    return true;
  }
};
