const accounts = {
    admin: 'admin',
    first: '1',
    second: '2',
    third: '3',
}
export const initAccounts = () => {
    localStorage.setItem('accounts', JSON.stringify(accounts));
}
