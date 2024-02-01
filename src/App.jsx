import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TopNavigation from './components/TopNavigation'
import InitialView from './components/InitialView'
import NewMessage from './components/NewMessage'
import Messages from './components/Messages/Messages'
import { useSelector } from 'react-redux'

function App() {

  const {data: messages} = useSelector(state => state.messages);

  return (
    <div className='font-soehne text-base leading-7 text-light-text-primary'>
      <div className='h-screen w-screen flex flex-col'>
        <TopNavigation />

        {/* only show when no messages are present in this chat */}
        {
          (messages && messages.length>0) ? ( <Messages />) : (<InitialView />)
        }

        <NewMessage />
      </div>
    </div>
  )
}

export default App
