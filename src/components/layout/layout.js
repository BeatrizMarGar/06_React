import Footer from "./footer";
import Header from "./header";
import Categories from "./categories";

function Layout ({children}) {
    return (
        <div classname="layout">
            <Header />
            <Categories />
            <main>
                <section>{children}</section>
            </main>
            <Footer className="" />
        </div>
    ); 
}

export default Layout;