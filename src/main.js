import Vue from 'vue'
import App from './App'
// import store from './store'
import router from 'vue-router'
import './components/ep/index'

var options = {
	el: '#app',
	// store,
	router,
	...App
};

new Vue(options)