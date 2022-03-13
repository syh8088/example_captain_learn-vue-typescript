import Vue from "vue";
import VueRouter, { NavigationGuardNext, Route } from "vue-router";
import { ItemView, UserView } from "../views/index";
import createListView from "../views/CreateListView";
import bus from "../utils/bus";
import store from "../store/index";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/news",
    },
    {
      path: "/news",
      name: "news",
      component: createListView("NewsView"),
      async beforeEnter(
        routeTo: Route,
        routeFrom: Route,
        next: NavigationGuardNext
      ) {
        bus.$emit("on:progress");

        // try {
        //   await store.dispatch("FETCH_LIST", routeTo.name);
        //   next();
        // } catch (error) {
        //   new Error("failed to fetch news items");
        // }
        next();

        // store
        //   .dispatch("FETCH_LIST", routeTo.name)
        //   .then(() => next())
        //   .catch(() => new Error("failed to fetch news items"));
      },
    },
    {
      path: "/ask",
      name: "ask",
      component: createListView("AskView"),
      async beforeEnter(
        routeTo: Route,
        routeFrom: Route,
        next: NavigationGuardNext
      ) {
        bus.$emit("on:progress");
        try {
          await store.dispatch("FETCH_LIST", routeTo.name);
          next();
        } catch (error) {
          new Error("failed to fetch news items");
        }
        // store
        //   .dispatch("FETCH_LIST", routeTo.name)
        //   .then(() => next())
        //   .catch(() => new Error("failed to fetch news items"));
      },
    },
    {
      path: "/jobs",
      name: "jobs",
      component: createListView("JobsView"),
      async beforeEnter(
        routeTo: Route,
        routeFrom: Route,
        next: NavigationGuardNext
      ) {
        bus.$emit("on:progress");
        try {
          await store.dispatch("FETCH_LIST", routeTo.name);
          next();
        } catch (error) {
          new Error("failed to fetch news items");
        }
        // store
        //   .dispatch("FETCH_LIST", routeTo.name)
        //   .then(() => next())
        //   .catch(() => new Error("failed to fetch news items"));
      },
    },
    {
      path: "/item/:id",
      component: ItemView,
      async beforeEnter(
        routeTo: Route,
        routeFrom: Route,
        next: NavigationGuardNext
      ) {
        bus.$emit("on:progress");
        const itemId = routeTo.params.id;
        try {
          await store.dispatch("FETCH_LIST", itemId);
          next();
        } catch (error) {
          new Error("failed to fetch item details");
        }
        // store
        //   .dispatch("FETCH_LIST", itemId)
        //   .then(() => next())
        //   .catch((err) => new Error("failed to fetch item details"));
      },
    },
    {
      path: "/user/:id",
      component: UserView,
      async beforeEnter(
        routeTo: Route,
        routeFrom: Route,
        next: NavigationGuardNext
      ) {
        bus.$emit("on:progress");
        const itemId = routeTo.params.id;
        try {
          await store.dispatch("FETCH_LIST", itemId);
          next();
        } catch (error) {
          new Error("failed to fetch user profile");
        }
        // store
        //   .dispatch("FETCH_LIST", itemId)
        //   .then(() => next())
        //   .catch((err) => new Error("failed to fetch user profile"));
      },
    },
  ],
});
