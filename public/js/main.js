(()=>{
    const vm = new Vue({
        el:'#portfolio',
    
        data: {
            navTrue: false,
        },
    
        created : function(){
        },
    
        methods : {   
            toggleNav(e){
                if (navTrue){
                    navTrue = false;
                }else{
                    navTrue = true;
                }
            }
        }
    });
    })();