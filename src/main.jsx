import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { UserProvider } from './providers/UserContext'
import { TechnologyProvider } from './providers/TechnologyContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <TechnologyProvider>
          <App />
        </TechnologyProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
)
