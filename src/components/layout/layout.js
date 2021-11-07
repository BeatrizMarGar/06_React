import Footer from "./footer";
import Header from "./header";
import Categories from "./categories";

function Layout ({filters, children}) {
    return (
        <div classname="layout">
            <Header/>
            <Categories filters={filters}/>
            <main>
                <section>{children}</section>
            </main>
            <Footer className="" />
        </div>
    ); 
}

export default Layout;