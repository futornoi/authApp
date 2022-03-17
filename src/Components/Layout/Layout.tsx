import Header from "./Header";
import Footer from "./Footer";
import { Container } from "react-bootstrap";
import "src/Styles/Pages/Layout.scss";

const Layout:React.FC = ({ children }) => {
  return (
    <div className="layout">
      <Header/>
      <main id="main">
        <Container>
          {children}
        </Container>
      </main>
      <Footer/>
    </div>
  )
}

export default Layout