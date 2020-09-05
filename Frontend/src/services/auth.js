//simulando api auth
import api from './apiTeste';
export const TOKEN_KEY = "@token-user";

const isAuthenticated = (email) => {
    let indexUser = api.map(user => user.email).indexOf(email);
    if (indexUser !== -1) {
        localStorage.setItem(TOKEN_KEY, indexUser);
        return TOKEN_KEY;
    } 
    else return null;

}

export default isAuthenticated;