import { createRouter, createWebHashHistory } from "vue-router";

import Home from "@/App.vue";
// import Dashboard from "@/views/dashBoard.vue";
const routes = [
  {
    path: "/",
    name: "home",
    meta: {
      title: "home page",
      needNav: true,
      needFooter: true,
    },
    // redirect: "/home",
    component: () => import("@/views/HomePage.vue"),
  },
  {
    path: "/coupon",
    name: "coupon",
    meta: {
    },
    // redirect: "/home",
    component: () => import("@/views/coupon.vue"),
  },
  // {
  //   path: "/:pathMatch(.*)*",
  //   name: "NotFound",
  //   component: () => import("@/views/notFound.vue"),
  // },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   if (!store.getters.g_isLogin && to.name !== "Login") {
//     const _authData = sessionStorage.getItem("authData")
//       ? JSON.parse(sessionStorage.getItem("authData"))
//       : null;

//     if (!!_authData?.token) {
//       store.commit("m_setUserData", _authData);
//       next();
//     } else {
//       next({ name: "Login" });
//     }
//   } else {
//     next();
//   }
// });

export default router;
