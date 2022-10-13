const initialState = {
  list: [],
};

const saveReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE":
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case "DELETE_CARDS":
      const LeftCard = state.list.filter((item) => item.id !== action.id);
      return {
        ...state,
        list: LeftCard,
      };
    case "DELETE_ALL_CARDS":
      return {
        ...state,
        list: [],
      };

    default:
      return state;
  }
};

export default saveReducer;
