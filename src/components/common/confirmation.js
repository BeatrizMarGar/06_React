
import { useLocation } from "react-router"
import { deleteAdvert } from "../Ads/service";
import { useHistory } from "react-router-dom"

function Conf({advid, hide}){
    const history = useHistory();
    const handleDelete = () => {
        deleteAdvert(advid)
        history.push('/')
        
    }
    return (
        <div>
            <button onClick={handleDelete}>SI</button>
            <button onClick={hide}>NO</button>

        </div>
    )
}
export default Conf;