//actions
const createActionName = (actionName) => `app/search/${actionName}`;
const SEARCH_TITLE = createActionName('SEARCH_TITLE');
const RESET_STRING = createActionName('RESET_STRING');

//action creators
export const searchingCards = (payload) => ({ type: SEARCH_TITLE, payload });
export const resetSearchString = (payload) => ({
  type: RESET_STRING,
  payload,
});

const searchReducer = (statePart = [], action) => {
  switch (action.type) {
    case SEARCH_TITLE:
      return action.payload;
    case RESET_STRING:
      return '';
    default:
      return statePart;
  }
};

export default searchReducer;
