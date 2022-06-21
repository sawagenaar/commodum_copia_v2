import {createRouter, createWebHistory, createWebHashHistory} from "vue-router"

const routerHistory = createWebHashHistory();

import HomePage from './pages/Home.vue';
import CategoriesPage from './pages/Categories.vue';
import ProductCategoriePage from "./pages/ProductCategorie.vue";
import SalesPage from './pages/Sales.vue';
import CartPage from './pages/Cart.vue';
import OrderPage from './pages/Order.vue';
import NotFound from "./pages/NotFound.vue";
import AlgemeneVoorwaardenPage from "./pages/AlgemeneVoorwaarden.vue";
import LeveringVerzendingPage from "./pages/LeveringVerzending.vue";
import PrivacybeleidPage from "./pages/Privacybeleid.vue";
import AboutOnsPage from "./pages/AboutOns.vue";

const routers = createRouter({
  history: routerHistory,
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: '/categories',
      name: "categories",
      component: CategoriesPage,
    },
    {
      path: '/categories/:id',
      name: "producten",
      component: ProductCategoriePage
    },
    {
      path: "/sales",
      name: "sales",
      component: SalesPage,
    },
    {
      path: "/cart",
      name: "cart",
      component: CartPage,
    },
    {
      path: "/order",
      name: "order",
      component: OrderPage,
    },
    {
      path: '/:CatchAll(.*)',
      name: "notFound",
      component: NotFound,
    },
    {
      path: "/algemene-voorwaarden",
      name: "AlgemeneVoorwaarden",
      component: AlgemeneVoorwaardenPage,
    },
    {
      path: "/verzending-and-levering",
      name: "LeveringVerzending",
      component: LeveringVerzendingPage,
    },
    {
      path: "/privacybeleid",
      name: "Privacybeleid",
      component: PrivacybeleidPage,
    },
    {
      path: "/about-ons",
      name: "AboutOns",
      component: AboutOnsPage,
    },
  ],
})

export default routers;