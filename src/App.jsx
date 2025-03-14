import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Body from './components/Body'
import { Provider } from 'react-redux'
import store from './utils/store'
import Head from './components/Head'
import MainContainer from './components/MainContainer'
import WatchPage from './components/WatchPage'

function App() {
  return (
    <Provider store={store}>
    <div>
      <Head/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body/>}>
            <Route index element={<MainContainer/>}/>
            <Route path="watch" element={<WatchPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  </Provider>
  )
    
}

export default App
