import { setAuthHeader, removeAuthHeader} from "../api/client";
import storage from "../components/auth/Login/storage";

export function CheckTokenonInit(){
    const token = storage.get('token')
    setAuthHeader(token)

    if(token){
        console.log(token)
        return true;
    } else {
        return false
    }
}
/*
export function RemoveandLogout(){
    
    removeAuthHeader()
    storage.remove('token')

}
*/