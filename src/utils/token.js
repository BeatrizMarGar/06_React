import { setAuthHeader, removeAuthHeader} from "../api/client";
import storage from "../components/auth/Login/storage";

export function CheckTokenonInit(){
    const token = storage.get('token')
    //const token = localStorage.getItem('Token')
    setAuthHeader(token)
    if(!token){
        console.log(token)
        return false;
    } else {
        return true
    }
}

export function RemoveandLogout(){
    
    removeAuthHeader()
    storage.remove('token')
}
