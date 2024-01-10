import React from 'react'
import "./dashboardPage.css";
import { Nav } from "./Nav"
import { Sidebar } from "./Sidebar"
import { Content } from "./Content"


export const DashboardPage = () => {
  return (
    <div className='dashboard-container'>
      <Nav/>
      <Sidebar/>
      <Content/>
    </div>
  )
}

