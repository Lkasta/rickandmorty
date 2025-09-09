type CharacterAction =
  | { type: "character/favorite"; payload: number[] }
  | { type: "character/unfavorite"; payload: number };

interface CharacterState {
  favorites: number[];
}

const initialState: CharacterState = {
  favorites: [1],
};

const charactersReducer = (state = initialState, action: CharacterAction) => {
  if (action.type === "character/favorite") {
    return { ...state, favorites: action.payload };
  }

  if (action.type === "character/unfavorite") {
    return {
      ...state,
      favorites: state.favorites.filter((id) => id !== action.payload),
    };
  }

  return state;
};

export default charactersReducer;
