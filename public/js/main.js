import homeComponent from './components/homeComponent.js';  
import projectComponent from './components/projectComponent.js'; 

const routes = [
    { path: "/", name: "home", component: homeComponent },
    { path: "/project/:id", name: "project", component: projectComponent, params: true },
];

var scrollBehavior = function(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  };

const router = new VueRouter({

    routes,
    scrollBehavior: scrollBehavior

});

//then your vue instance
const vm = new Vue({
    data: {
        testmessage: "sup",
        navTrue: false,
        auth: false,
        admin: false,
        currentuser: []
    },

    created: function(){

    },

    methods: {
        
        toggleWork(){
            this.workClicked = (!this.workClicked) ? true : false;
            this.aboutClicked = false;
        },
    
        toggleAbout(){
            this.aboutClicked = (!this.aboutClicked) ? true : false;
            this.workClicked = false;
        },

        homeLink(){
            this.navTrue = false;
            this.homeClicked = true;
            this.workClicked = false;
            this.aboutClicked = false;
        },
    
        workLink(){
            this.navTrue = false;
            this.workClicked = true;
            this.aboutClicked = false;
        },
    
        aboutLink(){
            this.navTrue = false;
            this.workClicked = false;
            this.aboutClicked = true;
        },
    
        contactLink(){
            this.navTrue = false;
            this.workClicked = false;
            this.aboutClicked = false;
        },

        toggleNav(){
            this.navTrue = (!this.navTrue) ? true : false;
        }
    },
    
    created: function(){
        console.log('vm says hi');
    },

    router: router

}).$mount("#app");