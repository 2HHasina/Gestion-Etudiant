import axios from "axios";
import URL from "../../config/config";

export const GetUsers = () => async (dispatch) => {
  try {
    const res = await axios.get(URL);
    dispatch({
      type: "GET_USERS",
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: "USERS_ERROR",
      payload: console.log(e),
    });
  }
};

export const PostUsers = (data) => async (dispatch) => {
  try {
    const res = await axios.post(URL, data);
    dispatch({
      type: "POST_USERS",
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: "USERS_ERROR",
      payload: console.log(e),
    });
  }
};
