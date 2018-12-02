(()=>{
    const vm = new Vue({
        el:'#portfolio',
    
        data: {
            navTrue: false,
            scroll: false
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
            }
        }
    });
    })();