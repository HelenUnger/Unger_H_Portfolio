(()=>{
    const vm = new Vue({
        el:'#portfolio',
    
        data: {
            navTrue: false,
            scroll: false,
            workClicked: false,
            aboutClicked: false,
            videoClicked: false,
            skillClicked:false,
            interestClicked: false,
            
            singleproject: [],
            allprojects: [],
            filteredprojects: [],
            allTypes:[],

            projectName: "",
            projectType: "",
            projectDesc: "",
            projectHomeImg: "",
            projectImg1: "",
            projectImg2: "",
            showDetails: false,
        },
    
        created () {
            window.addEventListener('scroll', this.handleScroll);
            this.fetchTypes();
            this.fetchAllData();
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
                this.skillClicked = false;
                this.interestClicked = false;
            },

            toggleAbout(){
                this.aboutClicked = (!this.aboutClicked) ? true : false;
                this.workClicked = false;
                this.videoClicked = false;
                this.skillClicked = false;
                this.interestClicked = false;
            },

            toggleSkill(){
                this.skillClicked = true;
                this.interestClicked = false;
            },

            toggleInterest(){
                this.interestClicked = true;
                this.skillClicked = false;
            },

            toggleVideo(){
                this.videoClicked = (!this.videoClicked) ? true : false;
                this.workClicked = false;
                this.aboutClicked = false;
                this.skillClicked = false;
                this.interestClicked = false;
            },

            workLink(){
                this.navTrue = false;
                this.workClicked = true;
                this.aboutClicked = false;
                this.videoClicked = false;
                this.skillClicked = false;
                this.interestClicked = false;
            },

            aboutLink(){
                this.navTrue = false;
                this.workClicked = false;
                this.aboutClicked = true;
                this.videoClicked = false;
                this.skillClicked = false;
                this.interestClicked = false;
            },

            videoLink(){
                this.navTrue = false;
                this.workClicked = false;
                this.aboutClicked = false;
                this.videoClicked = true;
                this.skillClicked = false;
                this.interestClicked = false;
            },

            contactLink(){
                this.navTrue = false;
                this.workClicked = false;
                this.aboutClicked = false;
                this.videoClicked = false;
                this.skillClicked = false;
                this.interestClicked = false;
            },

            loadProject(e){
                id = e.currentTarget.dataset.project;
                currentData = this.allprojects.filter(project=>project.project_id === id);
                console.log(currentData);
                this.projectName = currentData[0].project_name;
                this.projectType = currentData[0].type_name;
                this.projectDesc = currentData[0].project_desc;
                this.projectHomeImg = currentData[0].project_main_img;
                this.projectImg1 = currentData[0].project_img1;
                this.projectImg2 = currentData[0].project_img2;
    
                this.showDetails = true;
            },

            filterProjects(e){
                id = e.currentTarget.dataset.type;
                currentData = this.allprojects.filter(project=>project.type_id === id);
                this.filteredprojects = currentData;
                console.log(currentData);
            },
            
            fetchTypes(){
                url = './private/json.php?getTypes=true';
    
                fetch(url)
                .then(res=>res.json())
                .then(data =>{
                    console.log(data);
                    //getting all the projects
                    this.allTypes = data;
                })
            },

            fetchAllData(){
                url = './private/json.php';
    
                fetch(url)
                .then(res=>res.json())
                .then(data =>{
                    console.log(data);
                    //getting all the projects
                    this.allprojects = data;
                    this.filteredprojects = data;
                })
            }
        }
    });
    })();