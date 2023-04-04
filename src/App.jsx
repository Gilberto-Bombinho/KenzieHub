import { useEffect, useState } from 'react'
import { AppRoutes } from './routes'
import { Link } from 'react-router-dom'
import { api } from './services/axios'
import { GlobalStyle } from './style/globalStyle'
import { ToastContainer } from 'react-toastify'
import { UserProvider } from './providers/UserContext'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    async function request() {
      try {
        const response = await api.get('users')
        setCount(response.data)
      } catch (error) {}
    }
    request()
  }, [])

  return (
    <div className="App">
      <GlobalStyle />
      <AppRoutes />
      <ToastContainer />
    </div>
  )
}

export default App
