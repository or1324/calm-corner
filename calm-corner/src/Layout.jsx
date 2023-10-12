import { Outlet} from "react-router-dom";
import NavigationBar from "./components/NavigationBar";

const Layout = () => {
    return (
        <div className="layout">
            <NavigationBar />
            <Outlet />
            {/* footer */}
        </div>
    )
};

export default Layout;