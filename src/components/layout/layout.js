import Footer from "./footer";
import Header from "./header";
import Categories from "./categories";

function Layout ({filters, children, ...props}) {
    console.log(children)
    return (
        <div className="layout">
            <Header {...props}/>
            <main>
                <section>{children}</section>
            </main>
            <Footer className="" />
        </div>
    ); 
}

export default Layout;