type CharacterAction = { type: "character/favorite"; payload: [] };

interface CharacterState {
  favorites: [];
}

const initialState: CharacterState = {
  favorites: [],
};

const characterdReducer = (state = initialState, action: CharacterAction) => {
  if (action.type === "character/favorite") {
    return { ...state, favorites: action.payload };
  }
};

export default characterdReducer;
