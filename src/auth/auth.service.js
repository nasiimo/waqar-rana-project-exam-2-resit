export function getUser(user) {
  const users = getUsers();

  const match = users.find((storedUser) => {
    const emailMatches = storedUser.email === user.email;
    const passwordMatches = storedUser.password === user.password;
    return emailMatches && passwordMatches;
  });

  return match;
}

export function getUsers() {
  return JSON.parse(localStorage.getItem("users"));
}

export function checkUserExist() {
  const user = getUser(user.email);
  return user && user.email && user.password;
}
export function registerUser(newUser) {
  let users = getUsers();

  if (!users) {
    users = [newUser];
  } else {
    const matchingUser = users.find(function (user) {
      return user.email === newUser.email;
    });

    if (!matchingUser) {
      users.push(newUser);
    }
  }

  localStorage.setItem("users", JSON.stringify(users));
}

export function checkUserMatches(user) {
  const storedUser = getUser(user);
  if (storedUser) {
    sessionStorage.setItem("auth", "true");
    window.location = "/browse";
  } else {
    console.log("user creds invalid");
  }
}

export function isLoggedIn() {
  return Boolean(sessionStorage.getItem("auth"));
}
