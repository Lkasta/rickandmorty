import CharacterActionsTypes from "./action-types";

type CharacterAction =
  | { type: typeof CharacterActionsTypes.FAVORITE; payload: number[] }
  | { type: typeof CharacterActionsTypes.UNFAVORITE; payload: number };

interface CharacterState {
  favorites: number[];
}

const initialState: CharacterState = {
  favorites: [1],
};

const charactersReducer = (
  state: CharacterState = initialState,
  action: CharacterAction
): CharacterState => {
  switch (action.type) {
    case CharacterActionsTypes.FAVORITE:
      return { ...state, favorites: action.payload as number[] };

    case CharacterActionsTypes.UNFAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter(
          (id) => id !== (action.payload as number)
        ),
      };

    default:
      return state;
  }
};

export default charactersReducer;
