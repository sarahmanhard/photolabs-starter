import { useReducer } from 'react';

// Define the initial state for the application.
const initialState = {
  selectedPhoto: null, // Initially, no photo is selected.
  photoFavourites: {}   // An object to store photo favourites.
};

// Define a reducer function to handle state changes based on actions.
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_SELECTED_PHOTO':
      // Update the selected photo in the state.
      let newState = { ...state, selectedPhoto: action.payload };
      return newState;

    case 'SET_PHOTO_FAVOURITES':
      // Update the photo favorites in the state.
      return { ...state, photoFavourites: action.payload };

    case 'TOGGLE_FAVOURITE':
      const { id } = action.payload;
      if (state.photoFavourites[id]) {
        // If the photo is already a favorite, remove it from favorites.
        return {
          ...state,
          photoFavourites: {
            ...state.photoFavourites,
            [id]: !state.photoFavourites[id]
          }
        };
      } else {
        // If the photo is not a favorite, add it to favorites.
        return {
          ...state,
          photoFavourites: {
            ...state.photoFavourites,
            [id]: true
          }
        };
      }

    default:
      return state; // Return the current state if the action is unknown.
  }
};

// Create a custom hook called useApplicationData.
const useApplicationData = () => {
  // Use the useReducer hook to manage state using the defined reducer and initial state.
  const [state, dispatch] = useReducer(reducer, initialState);

  // Define functions to perform actions and dispatch corresponding actions to the reducer.
  const openModal = (photo) => {
    dispatch({ type: 'SET_SELECTED_PHOTO', payload: photo });
  };

  const closeModal = () => {
    dispatch({ type: 'SET_SELECTED_PHOTO', payload: null });
  };

  const selectFavourite = (id) => {
    dispatch({ type: 'TOGGLE_FAVOURITE', payload: { id } });
  };

  // Return the current state and action functions as an object.
  return {
    state,
    actions: {
      openModal,
      closeModal,
      selectFavourite
    },
  };
};

// Export the useApplicationData custom hook for use in other components.
export default useApplicationData;
