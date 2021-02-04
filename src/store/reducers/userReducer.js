const initialState = {
  users: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
      };
    case "POST_USERS":
      console.log(action.payload);
      break;
    default:
      break;
  }
  return state;
}
