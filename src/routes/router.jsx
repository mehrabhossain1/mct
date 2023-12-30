import { createBrowserRouter } from 'react-router-dom'
import Main from '../layout/Main'
import Home from '../pages/Home/Home'
import { Instructors } from '../pages/Instructors/Instructors'
import { Classes } from '../pages/Classes/Classes'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      },

      {
        path: '/instructors',
        element: <Instructors />,
      },

      {
        path: '/classes',
        element: <Classes />,
      },
    ],
  },
])
