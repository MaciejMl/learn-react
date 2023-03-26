import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import { strContains } from '../utils/strContains';

//selectors
export const getFilteredCards = ({ cards, searchString }, columnId) =>
  cards.filter(
    (card) =>
      card.columnId === columnId && strContains(card.title, searchString)
  );

export const getAllColumns = (state) => state.columns;

export const getListById = ({ lists }, listId) =>
  lists.find((list) => list.id === listId);

export const getColumnsByList = ({ columns }, list) =>
  columns.filter((column) => column.listId === list);

export const getAllLists = (state) => state.lists;
export const getAllCards = (state) =>
  state.cards.map((star) => star.isFavorite);

export const getFavorites = (state) =>
  state.cards.filter((card) => card.isFavorite);

//kreator akcji
export const addColumn = (payload) => ({ type: 'ADD_COLUMN', payload });
export const addCard = (payload) => ({ type: 'ADD_CARD', payload });
export const addList = (payload) => ({ type: 'ADD_LIST', payload });
export const searchingCards = (payload) => ({ type: 'SEARCH_TITLE', payload });
export const resetSearchString = (payload) => ({
  type: 'RESET_STRING',
  payload,
});
export const toggleFavorite = (payload) => ({
  type: 'TOGGLE_CARD_FAVORITE',
  payload,
});

const columnsReducer = (statePart = [], action) => {
  switch (action.type) {
    case 'ADD_COLUMN':
      return [...statePart, { ...action.payload, id: shortid() }];
    default:
      return statePart;
  }
};

const cardsReducer = (statePart = [], action) => {
  switch (action.type) {
    case 'ADD_CARD':
      return [...statePart, { ...action.payload, id: shortid() }];
    case 'TOGGLE_CARD_FAVORITE':
      return statePart.map((card) =>
        card.id === action.payload
          ? { ...card, isFavorite: !card.isFavorite }
          : card
      );
    default:
      return statePart;
  }
};

const listsReducer = (statePart = [], action) => {
  switch (action.type) {
    case 'ADD_LIST':
      return [...statePart, { ...action.payload, id: shortid() }];
    default:
      return statePart;
  }
};

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

const reducer = (state, action) => {
  const newState = {
    columns: columnsReducer(state.columns, action),
    cards: cardsReducer(state.cards, action),
    lists: listsReducer(state.lists, action),
    searchString: searchReducer(state.searchString, action),
  };
  return newState;
};

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'ADD_COLUMN':
//       return {
//         ...state,
//         columns: [...state.columns, { ...action.payload, id: shortid() }],
//       };
//     case 'ADD_CARD':
//       return {
//         ...state,
//         cards: [
//           ...state.cards,
//           { ...action.payload, id: shortid(), isFavorite: false },
//         ],
//       };
//     case 'ADD_LIST':
//       return {
//         ...state,
//         lists: [...state.lists, { ...action.payload, id: shortid() }],
//       };
//     case 'SEARCH_TITLE':
//       return { ...state, searchString: action.payload };
//     case 'RESET_STRING':
//       return { ...state, searchString: '' };
//     case 'TOGGLE_CARD_FAVORITE':
//       return {
//         ...state,
//         cards: state.cards.map((card) =>
//           card.id === action.payload
//             ? { ...card, isFavorite: !card.isFavorite }
//             : card
//         ),
//       };
//     default:
//       return state;
//   }
// };

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
