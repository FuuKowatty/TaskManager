import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import { AppProvider } from './AppProvider'
import { Home } from './pages/Home'
import { LoginPage } from './pages/Login'
import { DashboardHome } from './pages/dashboardPages/DashboardHome'
import DashboardCreateTask from './pages/dashboardPages/DashboardCreateTask'
import { DashboardTeam } from './pages/dashboardPages/DashboardTeam'
import { DashboardCreateUser } from './pages/dashboardPages/DashboardCreateUser'
import DashboardSettings from './pages/dashboardPages/DashboardSettings'
import { DashboardTask } from './pages/dashboardPages/DashboardTask'


function App() {

  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/dashboard' element={<DashboardHome />} />
          <Route path='/dashboard/tasks' element={<DashboardTask />} />
          <Route path='/dashboard/tasks/create-task' element={<DashboardCreateTask />} />
          <Route path='/dashboard/team' element={<DashboardTeam />} />
          <Route path='/dashboard/team/create-user' element={<DashboardCreateUser />} />
          <Route path='/dashboard/settings' element={<DashboardSettings />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  )
}

export default App
