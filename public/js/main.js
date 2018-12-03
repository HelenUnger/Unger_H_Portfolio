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
            toggleNav(e){
                if (!this.navTrue){
                    this.navTrue = true;
                }else{
                    this.navTrue = false;
                }
            },

            closeNav(e){
                this.navTrue = false;
            },

            handleScroll(e){
                console.log(e.pageYOffset);
                if (e.scrollTop > 500) {
                    scroll = true;
                  } else {
                    scroll= false;
                  }
            },

            toggleWork(e){
                if (!this.workClicked){
                    this.workClicked = true;
                }else{
                    this.workClicked = false;
                }
            },

            toggleAbout(e){
                if (!this.aboutClicked){
                    this.aboutClicked = true;
                }else{
                    this.aboutClicked = false;
                }
            },

            toggleVideo(e){
                if (!this.videoClicked){
                    this.videoClicked = true;
                }else{
                    this.videoClicked = false;
                }
            }
        }
    });
    })();