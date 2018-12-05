(()=>{
    const vm = new Vue({
        el:'#portfolio',
    
        data: {
            navTrue: false,
            scroll: false,
            workClicked: false,
            aboutClicked: false,
            videoClicked: false,
            
            
            singleproject: [],
            allprojects: [],

            projectName: "",
            projectDesc: "",
            projectHomeImg: "",
            projectImg1: "",
            projectImg2: "",
            showDetails: false,
        },
    
        created () {
            window.addEventListener('scroll', this.handleScroll);
            this.fetchProjectData(null);
        },
    
        methods : {   
            toggleNav(){
                this.navTrue = (!this.navTrue) ? true : false;
            },

            closeNav(){
                this.navTrue = false;
            },

            closeDetails(){
                this.showDetails = false;
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
            },



            // fetchSpecific(e){
            //     console.log("ONE");
            //     this.fetchProjectData(e.currentTarget.dataset.project); //this will be a number (id)
            // },

            loadProject(e){
                id = e.currentTarget.dataset.project;
                currentData = this.allprojects.filter(project=>project.project_id === id);
                console.log(currentData);
                this.projectName = currentData[0].project_name;
                this.projectDesc = currentData[0].project_desc;
                this.projectHomeImg = currentData[0].project_main_img;
                this.projectImg1 = currentData[0].project_img1;
                this.projectImg2 = currentData[0].project_img2;
    
                this.showDetails = true;
            },


            fetchProjectData(project){
                url = project ? `./private/index.php?project=${project}` : './private/index.php';
    
                fetch(url)//pass in one or many query
                .then(res=>res.json())
                .then(data =>{
                    if(project){
                        console.log(data);
                        //getting one movie , so use the single array
                        this.singleproject = data;
                    }else{
                        //push all the data
                        console.log(data);
                        this.allprojects = data;
                    }
                })
            }
        }
    });
    })();