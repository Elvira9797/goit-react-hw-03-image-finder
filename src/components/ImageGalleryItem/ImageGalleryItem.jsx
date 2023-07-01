import {
  StyledImageGalleryItem,
  ImageGalleryItemImage,
} from './ImageGalleryItem.styled';

const ImageGalleryItem = ({
  image: { webformatURL, largeImageURL, tags },
  openModal,
}) => {
  return (
    <StyledImageGalleryItem onClick={() => openModal({ largeImageURL, tags })}>
      <ImageGalleryItemImage src={webformatURL} alt="" />
    </StyledImageGalleryItem>
  );
};
export default ImageGalleryItem;
