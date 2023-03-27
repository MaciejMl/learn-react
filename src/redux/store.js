import { combineReducers, createStore } from 'redux';
import initialState from './initialState';
import listsReducer from './listsRedux';
import columnsReducer from './columnsRedux';
import cardsReducer from './cardsRedux';
import searchReducer from './searchRedux';

// const reducer = (state, action) => {
//   const newState = {
//     columns: columnsReducer(state.columns, action),
//     cards: cardsReducer(state.cards, action),
//     lists: listsReducer(state.lists, action),
//     searchString: searchReducer(state.searchString, action),
//   };
//   return newState;
// };

const subreducers = {
  columns: columnsReducer,
  cards: cardsReducer,
  lists: listsReducer,
  searchString: searchReducer,
};

const reducer = combineReducers(subreducers);

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
