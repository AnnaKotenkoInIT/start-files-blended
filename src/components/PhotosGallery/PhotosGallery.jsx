import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';
import PhotosGalleryItem from '../PhotosGalleryItem/PhotosGalleryItem';

const PhotosGallery = ({ photos }) => {
  return (
    <Grid>
      {photos.map(photo => (
        <GridItem key={photo.id}>
          <PhotosGalleryItem
            src={photo.src}
            alt={photo.alt}
            avg_color={photo.avg_color}
          />
        </GridItem>
      ))}
    </Grid>
  );
};
export default PhotosGallery;
