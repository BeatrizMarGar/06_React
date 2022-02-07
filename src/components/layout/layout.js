import Footer from "./footer";
import Header from "./header";

function Layout ({filters, children, ...props}) {
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