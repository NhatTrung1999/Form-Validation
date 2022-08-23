import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
function Admin() {
  const users = useSelector((state) => state.user.listUser);
  const userOld = () => {
    const user = JSON.parse(localStorage.getItem("login"));
    const findUser = users.find((role) => role.username === user.username);
    if (findUser.role === "admin") {
      return true;
    } else {
      return false;
    }
  };
  return userOld() ? <Outlet /> : "Không có quyền truy cập";
}
export default Admin;
