import { Route, Routes } from "react-router"
import Home from './components/pages/Home/Home';
import Table from './components/pages/Table/Table';
import NotFound from './components/pages/NotFound/NotFound';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/table/:id" element={<Table />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App;