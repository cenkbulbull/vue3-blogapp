import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home"
import MakaleEkle from "../views/MakaleEkle"
import MakaleDetay from "../views/MakaleDetay"

const routes = [
  {
    path:"/",
    name:"Home",
    component:Home
  },
  {
    path:"/ekle",
    name:"Ekle",
    component:MakaleEkle
  },
  {
    path:"/makale/:id",
    name:"Detay",
    component:MakaleDetay,
    props:true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
