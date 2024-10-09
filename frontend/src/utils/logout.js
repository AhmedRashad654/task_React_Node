import { request } from "../axios/axios";
import { setLogout } from "../redux/features/userSlice";

export async function logout(dispatch) {
  try {
    const response = await request.get("/api/user/logout");
    if (response.data.message === "user logout successfully") {
      localStorage.removeItem("informUser");
      dispatch(setLogout());
    }
  } catch (error) {
    console.log(error);
  }
}
