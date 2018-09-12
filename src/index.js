import Vue from 'vue'
import Home from './pages/home.vue'
import _ from 'lodash'
require('./style/index.scss')

console.log(_.add(1, 2))

/* eslint-disable-next-line */
let app = new Vue({
  el: '#app',
  name: 'App',
  render: h => h(Home)
})

console.log('Hello world')
