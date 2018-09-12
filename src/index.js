import Vue from "vue"

import styles from "./style/index.scss"
import Home from "./pages/home.vue"

const App = new Vue({
  el: "#app",
  name: "App",
  render: h => h(Home)
})

console.log("Hello world")
