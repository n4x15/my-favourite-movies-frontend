const accounts = {
  admin: "JfzSTg",
  first: "yQKhEe",
  second: "RrG2WB",
  third: "0ZVGyB",
};
export const initAccounts = () => {
    localStorage.setItem('accounts', JSON.stringify(accounts));
}

export const checkPassword = (input: any) => {
  let users = localStorage.getItem("accounts");
  users = JSON.parse(users || "");
  if (users !== null) {
    if (input.password === users[input.login]) {
      localStorage.setItem("currentUser", input.login);
      return true;
    } else {
      return false;
    }
  }
};
