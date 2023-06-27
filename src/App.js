import { Route, Routes } from "react-router"
import Home from './components/pages/Home/Home';
import Table from './components/pages/Table/Table';
import NotFound from './components/pages/NotFound/NotFound';
import Header from "./components/views/Header/Header";
import Footer from "./components/views/Footer/Footer";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/table/:id" element={<Table />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Container>
  )
}

export default App;