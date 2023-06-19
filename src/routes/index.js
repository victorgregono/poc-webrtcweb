import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import { Suspense, lazy } from 'react'
import { useNavigateContext } from "../Context/NavigateContext"

const Home = lazy(() => import("../Pages/Home"));
const ChamadaDeVideo = lazy(() => import('../Pages/ChamadaDeVideo'));
const HomeComponent = lazy(() => import("../Components/Home"));
const NotFound = lazy(() => import("../Components/NotFound"));
const Header = lazy(() => import("../Components/Header"));
const ListaDeEspera = lazy(() => import("../Pages/ListaEspera"));

const RoutesComponent = () => {
  const { isOverlay } = useNavigateContext();


  return (
      <Router>
        <Suspense fallback={<></>}>
          <HomeComponent>
            {isOverlay ? ( <Header />) : (<></>)}
          
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/chamada-de-video" element={<ChamadaDeVideo />} />
              <Route path="/lista-de-espera" element={<ListaDeEspera />} />
              <Route path="*" element={<NotFound />} />
            </Routes>

          </HomeComponent>
        </Suspense>
      </Router>
  )
}

export default RoutesComponent