import React from 'react';
import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ id, photoFavourites, selectFavourite }) {


  const handleLikeClick = (event) => {
    event.stopPropagation();
    selectFavourite(id);
  };

  const checkIfLiked = (photoFavourites, id) => {
    if (!photoFavourites) {
      return '#EEEEEE';
    } else if (Object.keys(photoFavourites).length === 0) {
      return '#EEEEEE';
    } else if (!photoFavourites[id]) {
      return '#EEEEEE';
    }

    return '#FF0000';
  }

  return (
    <div className="photo-list--fav-icon" onClick={handleLikeClick}>
      <FavIcon fill={checkIfLiked(photoFavourites, id)} />
    </div>
  );
}

export default PhotoFavButton;