import { useState } from 'react'
import { PrimaryButton } from './components/atoms/button/PrimaryButton'
import { SecondaryButton } from './components/atoms/button/SecondaryButton'
import { SearchInput } from './components/molecules/SearchInput'
import { UserCard } from './components/organisms/user/UserCard'
import './App.css'
import { HeaderOnly } from './components/templates/HeaderOnly'
import { BrowserRouter } from 'react-router-dom'
import { DefalutLayout } from './components/templates/DefaultLayout'

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
    <BrowserRouter>
      <DefalutLayout>
        <PrimaryButton>test</PrimaryButton>
        <SecondaryButton>みや</SecondaryButton>
        <br />
        <SearchInput />
        <UserCard user={user} />
      </DefalutLayout>
    </BrowserRouter>
  )
}

export default App
