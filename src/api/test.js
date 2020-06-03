import request from "@/utils/request";

export function login(data) {
  return request({
    url: "/@Components/frontend/echo.php",
    method: "post",
    data: data
  });
}

export function getInfo(uid) {
  return request({
    url: "/@Components/frontend/success.php",
    method: "get",
    params: { uid: uid }
  });
}

export function logout() {
  return request({
    url: "/vue-admin-template/user/logout",
    method: "post"
  });
}
