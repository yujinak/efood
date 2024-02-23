import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import ListaRestaurantes from './components/ListaItens'
import Footer from './components/Footer'

import { GlobalCSS } from './styles'

import restaurantes from './data/restaurantes'
import Rotas from './rotas'

function App() {
  return (
    <BrowserRouter>
      <GlobalCSS />
      <Header />
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
