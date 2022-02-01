import Footer from "./footer";
import Header from "./header";
import Categories from "./categories";
import { useEffect } from "react";

function Layout ({filters, children, fil}) {
    console.log(fil)

    useEffect(() => {}, [fil])
    return (
        <div className="layout">
            <Header/>
            <Categories filters={filters}/>
            <main>
                <section>{fil, children}</section>
            </main>
            <Footer className="" />
        </div>
    ); 
}

export default Layout;