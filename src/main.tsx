import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Cv } from './components/cv/Cv.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './i18n'
import './styles/index.css'
import { Errorpage } from './components'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <Errorpage />,
	},
	{ path: '/cv', element: <Cv /> },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
