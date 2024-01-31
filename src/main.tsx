import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './i18n'
import './styles/main.scss'
import { paths } from './constants/'
import { Cv, Errorpage, Home } from './pages'

const router = createBrowserRouter([
	{
		path: paths.home,
		element: <Home />,
		errorElement: <Errorpage />,
	},
	{ path: paths.cv, element: <Cv />, errorElement: <Errorpage /> },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
