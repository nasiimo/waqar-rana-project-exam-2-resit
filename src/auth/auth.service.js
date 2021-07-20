export function getUser() {
  const user = localStorage.getItem("user");
  return user;
}

export function setUser(user) {}

export function checkUserExist() {
  const user = getUser();
  if (user && user.email && user.password) {
    return true;
  } else {
    return false;
  }
}
export function registerUser(user) {
  if (!checkUserExist()) {
    localStorage.setItem("user", JSON.stringify(user));
    return true;
  } else {
    return false;
  }
}
export function loginUser(user) {}

export function isLoggedIn() {
  // if email and password match with localstorage
}
