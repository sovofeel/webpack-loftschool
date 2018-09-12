import Vue from "vue"

import styles from "./style/index.scss"
import Home from "./pages/home.vue"
import _ from "lodash"

console.log(_.add(1, 2))

const App = new Vue({
  el: "#app",
  name: "App",
  render: h => h(Home)
})

console.log("Hello world")
