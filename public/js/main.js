(()=>{
    const vm = new Vue({
        el:'#portfolio',
    
        data: {
            navTrue: false,
            scroll: false,
            workClicked: false,
            aboutClicked: false,
            videoClicked: false,
            message: 'hellow'
        },
    
        created () {
            window.addEventListener('scroll', this.handleScroll);
        },
    
        methods : {   
            toggleNav(){
                this.navTrue = (!this.navTrue) ? true : false;
            },

            closeNav(){
                this.navTrue = false;
            },

            handleScroll(){
                this.scroll = (pageYOffset > 50) ? true : false;
            },

            toggleWork(){
                this.workClicked = (!this.workClicked) ? true : false;
                this.aboutClicked = false;
                this.videoClicked = false;
            },

            toggleAbout(){
                this.aboutClicked = (!this.aboutClicked) ? true : false;
                this.workClicked = false;
                this.videoClicked = false;
            },

            toggleVideo(){
                this.videoClicked = (!this.videoClicked) ? true : false;
                this.workClicked = false;
                this.aboutClicked = false;
            },

            workLink(){
                this.navTrue = false;
                this.workClicked = true;
                this.aboutClicked = false;
                this.videoClicked = false;
            },

            aboutLink(){
                this.navTrue = false;
                this.workClicked = false;
                this.aboutClicked = true;
                this.videoClicked = false;
            },

            videoLink(){
                this.navTrue = false;
                this.workClicked = false;
                this.aboutClicked = false;
                this.videoClicked = true;
            },

            contactLink(){
                this.navTrue = false;
                this.workClicked = false;
                this.aboutClicked = false;
                this.videoClicked = false;
            }
        }
    });
    })();