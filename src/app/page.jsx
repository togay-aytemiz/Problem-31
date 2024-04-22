'use client'
import { AppProvider } from '@/context/main'

import App from '@/App'

const Home = () => {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  )
}
export default Home
