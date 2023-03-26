const searchReducer = (statePart = [], action) => {
  switch (action.type) {
    case 'SEARCH_TITLE':
      return action.payload;
    case 'RESET_STRING':
      return '';
    default:
      return statePart;
  }
};

export default searchReducer;
