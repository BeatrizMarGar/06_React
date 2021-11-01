import Footer from "./footer";
import Header from "./header";
import Ads from "./ads";
import Categories from "./categories";

function Layout ({}) {
    return (
        <div classname="layout">
            <Header />
            <Categories />
            <Ads />
            <Footer className="" />
        </div>
    ); 
}

export default Layout;