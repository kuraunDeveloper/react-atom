import './App.css'
import { Router } from './router/Router'

const user = {
  name: 'みや',
  image: 'https://plus.unsplash.com/premium_photo-1673967831980-1d377baaded2?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  email: 'miyamiya@gmail.co.com',
  phone: '080-1234-5678',
  company: {
    name: 'みやの会社',
    url: 'https://google.com',
  },
  website: 'https://google.com',
};

function App() {
  return (
    <Router />
  )
}

export default App
