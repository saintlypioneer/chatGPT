import './App.css'
import TopNavigation from './components/TopNavigation'
import InitialView from './components/InitialView'
import NewMessage from './components/NewMessage'
import Messages from './components/Messages/Messages'
import { useDispatch, useSelector } from 'react-redux'
import '@mantine/core/styles.css';

import 'highlight.js/styles/default.css'; // Choose your style

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { MantineProvider } from '@mantine/core';
import Sidebar from './components/Sidebar/Sidebar'
import { closeSidebar, openSidebar, toggleSidebar } from './components/Sidebar/SidebarSlice'

function App() {

  const { data: messages } = useSelector(state => state.messages);

  const dispatch = useDispatch();
  const {isOpen: isSidebarOpen} = useSelector(state => state.sidebar);

  return (
    <MantineProvider>
      <div className='font-soehne text-base leading-7 text-light-text-primary flex'>
        <Sidebar />

        {/* sidebar handling button [only on medium and bigger screens] */}
        <div className='h-screen w-0 flex-col justify-center relative hidden md:flex'>
          <button className='absolute' onClick={()=>{
            dispatch(toggleSidebar());
          }}>
            {
              (isSidebarOpen==true) ? (<FaChevronLeft />) : (<FaChevronRight />)
            }</button>
        </div>


        <div className='h-screen w-screen flex flex-col'>
          <TopNavigation />

          {/* only show when no messages are present in this chat */}
          {
            (messages && messages.length > 0) ? (<Messages />) : (<InitialView />)
          }

          <NewMessage />
        </div>
      </div>
    </MantineProvider>
  )
}

export default App
