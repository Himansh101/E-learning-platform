import Login from '@/pages/auth/Login'
import Register from '@/pages/auth/Register'
import Home from '@/pages/user/Home'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ProtectedRoutes } from './ProtectedRoute'
import SingleCourse from '@/pages/user/SingleCourse'
import YourCourse from '@/pages/user/YourCourse'
import SinglePurchasedCourse from '@/pages/user/SinglePurchasedCourse'
import Dashboard from '@/pages/admin/Dashboard'
import DashboardAnalytics from '@/pages/admin/DashboardAnalytics'
import DasbhoardProducts from '@/pages/admin/DashboardProducts'
import CreateModule from '@/pages/admin/CreateModule'
import Quiz from '@/pages/user/Quiz'
import Cancel from '@/pages/admin/Cancel'
import PaymenSuccess from '@/pages/admin/PaymentSuccess'

const MainRoutes = () => {
  return (
   <Routes>

    <Route path='/' element={
        <ProtectedRoutes>
            <Home/>
        </ProtectedRoutes>
    }/>
    <Route path='/cancel' element={
        <ProtectedRoutes>
            <Cancel/>
        </ProtectedRoutes>
    }/>
    <Route path='/purchase' element={
        <ProtectedRoutes>
            <PaymenSuccess/>
        </ProtectedRoutes>
    }/>
    <Route path='/singleCourse/:id' element={
        <ProtectedRoutes>
            <SingleCourse/>
        </ProtectedRoutes>
    }/>
    <Route path='/YourCourse' element={
        <ProtectedRoutes>
            <YourCourse/>
        </ProtectedRoutes>
    }/>
    <Route path='/YourCourse/:id' element={
        <ProtectedRoutes>
            <SinglePurchasedCourse/>
        </ProtectedRoutes>
    }/>
    <Route path='/quiz/:id' element={
        <ProtectedRoutes>
            <Quiz/>
        </ProtectedRoutes>
    }/>

    <Route path='/dashboard' element={
        <ProtectedRoutes>

            <Dashboard/>
        </ProtectedRoutes>
        } >
      
      <Route index  element={
        <ProtectedRoutes>
            
            <DashboardAnalytics/>
        </ProtectedRoutes>
        }/>
      <Route path='dashboardProduct' element={
          <ProtectedRoutes>
            <DasbhoardProducts/>

        </ProtectedRoutes>
        }/>
        <Route path='CourseModule/:id' element={
            <ProtectedRoutes>
                <CreateModule/>
            </ProtectedRoutes>
        }/>
    </Route>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
   </Routes>
  )
}

export default MainRoutes