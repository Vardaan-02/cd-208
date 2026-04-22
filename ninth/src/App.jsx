import { useState } from "react"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Main from "./components/main/Main"
import Sidebar from "./components/sidebar/Sidebar"

function App() {
  return (
    <div className="flex h-screen w-screen">
      <Sidebar />
      <div className="w-full flex flex-col h-screeen">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  )
}

export default App
