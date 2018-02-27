let initialState = [];

export default (state=initialState, action) => {
  let {type, payload} = action;
  switch(type) {
  case 'CATEGORY_CREATE' : return [...state, payload]; // Redux Store Create New Using Payload
  case 'CATEGORY_UPDATE' : return state.map(category => category._id === payload._id ? payload : category); // Redux Store Update Old Using Payload
  case 'CATEGORY_DELETE' : return state.filter(category => category._id !== payload._id); // Redux Store Delete Old Using Payload
  case 'CATEGORY_RESET' : return initialState; // Redux Store Reset To Initial
  default : return state;
  }
};