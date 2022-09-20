import Footer from "../components/footer";
import Nav from "../components/nav";

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
