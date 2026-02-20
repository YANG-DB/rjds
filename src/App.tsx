import { Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import Layout from './components/Layout'
import AdmissionsPage from './pages/AdmissionsPage'
import AdmissionWizard from './pages/AdmissionWizard'

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<AdmissionsPage />} />
          <Route path="/admissions" element={<AdmissionsPage />} />
          <Route path="/apply" element={<AdmissionWizard />} />
        </Route>
      </Routes>
      <Analytics />
    </>
  )
}

export default App
