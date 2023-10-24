import React from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';


const HomeRoute = function(props) {

  const { photoFavourites, selectFavourite } = props;

  return (
    <div className="home-route">
      <TopNavigationBar
        topics={props.topics}
        photoFavourites={photoFavourites}
        selectFavourite={selectFavourite}
        handleTopicClick={props.handleTopicClick}
      />
      <PhotoList
        photos={props.photos}
        topics={props.topics}
        photoFavourites={photoFavourites}
        selectFavourite={selectFavourite}
        similarPhotos={props.photos.similar_photos}
        openModal={props.openModal} />
    </div>
  );
};

export default HomeRoute;