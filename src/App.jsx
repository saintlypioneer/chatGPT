import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TopNavigation from './components/TopNavigation'
import InitialView from './components/InitialView'
import NewMessage from './components/NewMessage'
import Messages from './components/Messages'

function App() {

  return (
    <div className='font-soehne text-base leading-7 text-light-text-primary'>
      <div className='h-screen w-screen flex flex-col'>
        <TopNavigation />

        {/* only show when no messages are present in this chat */}
        {/* <InitialView /> */}

        <Messages />

        <NewMessage />
      </div>
    </div>
  )
}

export default App
