import Navbar from "../ui/dashboard/navbar/navbar";
import Sidebar from "../ui/dashboard/sidebar/sidebar";

const Layout = ({ children }) => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
