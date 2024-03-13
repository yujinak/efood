import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import Footer from './components/Footer'
import { GlobalCSS } from './styles'
import Rotas from './rotas'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCSS />
        <Rotas />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
