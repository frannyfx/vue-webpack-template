// Imports
import Vue from "vue";
import VueApp from "./components/App.vue";

class App {
    constructor() {
        this.app = new Vue({
            el: "#app",
            ...VueApp
        });
    }
}

let app = new App();