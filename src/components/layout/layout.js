import Footer from "./footer";
import Header from "./header";
import Categories from "./categories";
import { useEffect } from "react";

function Layout ({filters, children, fil, searchAd}) {

    useEffect(() => {}, [fil])
    return (
        <div className="layout">
            <Header/>
            <Categories filters={filters} searchAd={searchAd}/>
            <main>
                <section>{children}</section>
            </main>
            <Footer className="" />
        </div>
    ); 
}

export default Layout;