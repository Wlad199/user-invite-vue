"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app = (0, vue_1.createApp)(App_vue_1.default);
var vue_1 = require("vue");
var pinia_1 = require("pinia");
var App_vue_1 = require("./App.vue");
require("./scss/null.scss");
require("./scss/style.scss");
//app.use(router)
app.use((0, pinia_1.createPinia)());
app.mount('#app');
