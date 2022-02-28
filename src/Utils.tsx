const accounts = {
  admin: "JfzSTg",
  first: "yQKhEe",
  second: "RrG2WB",
  third: "0ZVGyB",
};
export const initAccounts = () => {
    localStorage.setItem('accounts', JSON.stringify(accounts));
}

export const checkPassword = (login: any, password: string) => {
  let users = localStorage.getItem("accounts");
  users = JSON.parse(users || "");
  if (users !== null) {
    if (password === users[login]) {
      localStorage.setItem("currentUser", login);
      return true;
    } else {
      return false;
    }
  }
};