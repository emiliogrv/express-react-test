import Countries from './components/Countries'
import Index from './components/Index'
import Slot from './components/Slot'
import Error404 from './components/Error404'

export default [
  {
    path: '/',
    component: Index,
    exact: true
  },
  {
    path: '/countries/',
    component: Countries
  },
  {
    path: '/slot/',
    component: Slot
  },
  {
    component: Error404
  }
]
