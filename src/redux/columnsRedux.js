import shortid from 'shortid';

//selectors
export const getAllColumns = (state) => state.columns;

export const getColumnsByList = ({ columns }, list) =>
  columns.filter((column) => column.listId === list);

//actions
const createActionName = (actionName) => `app/columns/${actionName}`;
const ADD_COLUMN = createActionName('ADD_COLUMN');

//actions creator
export const addColumn = (payload) => ({ type: ADD_COLUMN, payload });

const columnsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_COLUMN:
      return [...statePart, { ...action.payload, id: shortid() }];
    default:
      return statePart;
  }
};

export default columnsReducer;
