import React, { useEffect, useState } from 'react';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';
import './App.scss';

const App = () => {
  // Define state variables for photos and topics using the useState hook.
  const [photos, setPhotos] = useState([]);
  const [topics, setTopics] = useState([]);

  // Use the custom hook useApplicationData to access application state and actions.
  const { state, actions } = useApplicationData();
  const { selectedPhoto, photoFavourites } = state;
  const { openModal, closeModal, selectFavourite } = actions;

  // Use useEffect to fetch photos and topics when the component mounts.
  useEffect(() => {
    // Define an asynchronous function to fetch photos and topics.
    const fetchPhotosAndTopics = async () => {
      try {
        // Fetch photos data from the API.
        const photosResponse = await fetch('/api/photos');
        const photosData = await photosResponse.json();
        setPhotos(photosData);

        // Fetch topics data from the API.
        const topicsResponse = await fetch('/api/topics');
        const topicsData = await topicsResponse.json();
        setTopics(topicsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchPhotosAndTopics function when the component mounts.
    fetchPhotosAndTopics();
  }, []);

  // Define a function to handle topic click and fetch related photos.
  const handleTopicClick = async (topicId) => {
    try {
      if (topicId) {
        // Fetch photos related to the clicked topic from the API.
        const response = await fetch(`http://localhost:8001/api/topics/photos/${topicId}`);
        const data = await response.json();
        setPhotos(data);
      }
    } catch (error) {
      console.error('There was an error fetching the related photos', error);
    }
  };

  // Render the main application with HomeRoute and PhotoDetailsModal components.
  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        openModal={openModal}
        photoFavourites={photoFavourites}
        selectFavourite={selectFavourite}
        handleTopicClick={handleTopicClick}
      />
      {selectedPhoto &&
        <PhotoDetailsModal
          selectedPhoto={selectedPhoto}
          selectFavourite={selectFavourite}
          photoFavourites={photoFavourites}
          closeModal={closeModal}
          openModal={openModal}
          photos={photos}
          topics={topics}
        />}
    </div>
  );
};

export default App;
