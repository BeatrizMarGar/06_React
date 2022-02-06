import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { AllAds } from "../service";
import Layout from "../../layout/layout";
import Ad from "../ad";
import AdvertFilter from "./Ads_control";

const EmptyList = () => (
  <div style={{ textAlign: "center" }}>
    <p>Sea el primero en publicar un anuncio</p>
    <Link to="/new-ad">
      <button>
        Crear anuncio
      </button>
    </Link>
  </div>
);

function ShowAllAds({ history, ...props }) {
  const [adverts, setAdverts] = useState([]);

  useEffect(() => {
    AllAds().then((adverts) => setAdverts(adverts));
  }, []);

  return (
    <Layout {...props}>
      <AdvertFilter filterAds={ads => setAdverts(ads)} selectedAds={adverts}/>
      {adverts.length ? (
        <ul >
          {adverts.map(({ ...ad }) => (
            <li key={ad.id}>
                <Link id={ad.id} key={ad.id} to={`/adverts/${ad.id}`}>
                    <Ad {...ad} />
                </Link>
            </li>
          ))}
        </ul>
      ) : (
        <EmptyList />
      )}
    </Layout>
  );
}

export default ShowAllAds;