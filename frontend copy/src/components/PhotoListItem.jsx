import React from 'react';
import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';

// PhotoListItem component that displays a single photo item.
const PhotoListItem = (props) => {
  // Destructure props to access the data passed to this component.
  const { id, imageSource, username, userCity, userCountry, photoFavourites, selectFavourite, userProfile, onClick } = props;

  // Define a function to handle click events on the photo item.
  const handleClick = (event) => {
    onClick(event);
  };

  return (
    <div className="photo-list--item" onClick={handleClick}>
      {/* Render the PhotoFavButton component with relevant props. */}
      <PhotoFavButton
        id={id}
        photoFavourites={photoFavourites}
        selectFavourite={selectFavourite}
      />
      <div className="photo-list--image-container">
        {/* Display the image of the photo. */}
        <img className="photo-list--image" src={imageSource} />
        <div className="photo-list--user-details">
          {/* Display user profile image and user information. */}
          <img className="photo-list--user-profile" src={userProfile} />
          <div className="photo-list--user-info">
            {username}
            <div className="photo-list--user-location">
              {userCity}, {userCountry}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export the PhotoListItem component for use in other parts of the application.
export default PhotoListItem;
