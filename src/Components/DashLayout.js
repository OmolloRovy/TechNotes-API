import {Outlet} from 'react-router-dom';
import DashHeader from './DashHeader';
import DashFooter from './DashFooter';
import React from 'react'

function DashLayout() {
  return (
    <>
    <DashHeader />
    <div className='dash-container'>
        <Outlet />
        </div>
        <DashFooter />
    </>
  )
}

export default DashLayout