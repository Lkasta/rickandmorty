type CharacterAction = { type: "character/favorite"; payload: number[] };

interface CharacterState {
  favorites: number[];
}

const initialState: CharacterState = {
  favorites: [1],
};

const characterdReducer = (state = initialState, action: CharacterAction) => {
  if (action.type === "character/favorite") {
    return { ...state, favorites: action.payload };
  }

  return state;
};

export default characterdReducer;
