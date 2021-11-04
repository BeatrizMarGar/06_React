//import { storage } from '../../utils/storage'
import client, {
    setAuthHeader,
    removeAuthHeader,
} from "../../api/client";

const storage = {
    get(key) {
      const value = localStorage.getItem(key);
      if (!value) {
        return null;
      }
      return JSON.parse(value);
    },
  
    set(key, value) {
      localStorage.setItem(key, JSON.stringify(value));
    },
  
    remove(key) {
      localStorage.removeItem(key);
    },
  };

export const login = credentials => {
    return client.post('http://localhost:3001/api/auth/login', credentials).then(({accessToken}) => {
        console.log(accessToken)
        setAuthHeader(accessToken)
        storage.set('auth', accessToken)
    })
}

export const logout = () => 
    Promise.resolve().then(() => {
    removeAuthHeader();
    //storg.remove('auth')
})