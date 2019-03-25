export default {
    params: ['id'],

    template: `
    <div id="portfolio">
    <header>
    
    <div class="head-container" :class="{headColor : true}">
    <a class="logo-link" href="/">
        <div class="logo">
            <svg class="logoSVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 718.8 648.71">
                <title>logo</title>
                <g id="ed51bf4e-35e0-466f-9e99-e6e016129db8" data-name="Layer 2">
                    <g id="2f4f36e1-eeec-4e9c-a149-bd94ed8bbccd" data-name="Layer 1">
                    <path d="M640.36,341.81c-32.56,0-1.41-.06-34,.39a1597.36,1597.36,0,0,1-2.47-189c1.46-29.91-44.25-29.51-46.3,0-3.2,46.09-3.73,92.31-3.71,138.49,0,17.12.11,34.24.21,51.36q-40.22.84-80.42,2.14h0q-.06-96-.13-192c0-29.79-46.33-29.84-46.31,0q.08,91.26.13,182.5c0,3.71,0,7.44-.05,11.15q-41.19,1.61-82.36,3.69c-.91-65.88,3.38-131.91,10.77-197.34,1.41-12.44-11.65-23.15-23.15-23.15-13.69,0-21.75,10.67-23.16,23.15-7.5,66.44-11.51,133.2-10.42,199.82q-43.54,2.47-87.08,5.48L232,192.65l14.16-117c2.18-18,9.59-62.89-9.32-73.66-14.62-8.33-38.72,12.22-50.55,22.5-13.87,12.05-27.17,30.25-38.59,44.64C101.79,127,20.28,294,127,163.34c31-37.92,29.24-30,46-47.07,8.68-8.85,12.82-9.64,21.75-18.25-1.95,13.42-1.93,18.93-3.47,31.65-5.72,47.25-9.43,94.49-15.14,141.74l-11,90.51c-25.51,1.93,25.53-1.54,0,0-176.49,10.62-248,61.51-29.28,48.56,23.65-1.4,0,0,23.62-1.81-10.1,83.48-2.8,23.11-12.9,106.6-1.5,12.43-17.53,133.44,3.31,133.44,22.76,0,26.68-49.32,28.55-61.74,12.64-84,15.73-96.36,27.76-181.74q47.15-3.3,94.34-6A1090.34,1090.34,0,0,0,316,534c5.26,29.28,49.9,16.87,44.65-12.31a1005.54,1005.54,0,0,1-14.14-124.85q40.33-2,80.67-3.6c0,9.88.15,19.76.5,29.62.95,26.61,5.75,53.42,22.23,75,32,42,89.6,37.89,122.35-1.22,1.4-1.68,2.72-3.4,4-5.13q1.68,11.81,3.46,23.61c1.87,12.33,17.46,19.26,28.48,16.17,13.22-3.7,18.06-16,16.17-28.48q-8.61-56.88-14.15-114.35c31.28-.41-14-.21,17.28-.21C740.29,388.24,753.15,341.81,640.36,341.81Zm-88.5,89.35c-3.32,18.36-10.69,36.53-27.51,46.32-15.34,8.94-30.26,4.24-39.76-10.4-11.87-18.3-10.8-42.11-10.85-63,0-4.18,0-8.35,0-12.53q40.44-1.3,80.88-2.14C554.71,403.43,554.33,417.51,551.86,431.16Z"/>
                    </g>
                </g>
            </svg>
        </div>
    </a>

        <nav class="menu">
            <h2 class="hidden">Main Navigation</h2>
            <div v-on:click="toggleNav" class="ham-menu">
                <i class="fas fa-bars"></i>
            </div>
            <div class="nav-links" :class="{openNav : navTrue}">
                <div v-on:click="toggleNav" class="exit"><i class="fas fa-times"></i></div>
                <ul class="links">
                <li v-on:click="homeLink"><router-link class="yellow" :to="{path:'/', hash: 'portfolio'}">home</router-link></li>
                <li v-on:click="workLink"><router-link class="blue" :to="{path:'/', hash: 'my-work'}">work</router-link></li>
                <li v-on:click="aboutLink"><router-link class="pink" :to="{path:'/', hash: 'about-me'}">about</router-link></li>
                <li v-on:click="contactLink"><router-link class="green" :to="{path:'/', hash: 'contact'}">contact</router-link></li>
                </ul>
                <ul class="social">
                    <li><a href="https://github.com/HelenUnger"><i class="fab fa-github-square"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/helen-unger/"><i class="fab fa-linkedin"></i></a></li>
                    <li><a href="https://www.instagram.com/img_src__/"><i class="fab fa-instagram"></i></a></li>
                </ul>
            </div>
        </nav>
    </div>
    </header>
    
    <main id="project-content">
    <section>
    <h2>{{projectData.project_name}}</h2>
    <h3 class="type">{{projectData.type_name}}</h3>

    <div class="desc">
    <h3>Project Description</h3>
    <p>{{projectData.project_desc}}</p>
    </div>

    <div class="ps-cont" v-if="projectData.project_solution != ''">
        <div class="problem">
        <h3>Problem</h3>
        <p>{{projectData.project_problem}}</p>
        </div>

        <div class="solution">
        <h3>Solution</h3>
        <p>{{projectData.project_solution}}</p>
        </div>
    </div>

    <div class="images"> 
    <img :src="'./public/images/' + projectData.project_img1">
    <img v-if="projectData.project_img2 !=''" :src="'./public/images/' + projectData.project_img2">
    </div>
    </section>
    </main>


    </div>`,
    
    data() {
       return{
        scroll: false,
        navTrue: false,
        homeClicked: false,
        workClicked: false,
        aboutClicked: false,

        projectData: []
       }
    },
    
    created () {
        window.addEventListener('scroll', this.handleScroll);

        this.fetchProject();
    },

    
    
    methods : { 
        fetchProject(){
        let url = `./private/json.php?getProject=${this.$route.params.id}`;

        fetch(url)
        .then(res=>res.json())
        .then(data =>{
            //getting single projects
            this.projectData = data;
        })
        },

        toggleNav(){
            this.navTrue = (!this.navTrue) ? true : false;
        },
    
        closeNav(){
            this.navTrue = false;
        },
    
        toggleWork(){
            this.workClicked = (!this.workClicked) ? true : false;
            this.aboutClicked = false;
            this.skillClicked = false;
            this.interestClicked = false;
        },
    
        toggleAbout(){
            this.aboutClicked = (!this.aboutClicked) ? true : false;
            this.workClicked = false;
            this.skillClicked = false;
            this.interestClicked = false;
        },
        
        handleScroll(){
            this.scroll = (pageYOffset > 50) ? true : false;
        },

        homeLink(){
            this.navTrue = false;
            this.homeClicked = true;
            this.workClicked = false;
            this.aboutClicked = false;
            this.skillClicked = false;
            this.interestClicked = false;
        },
    
        workLink(){
            this.navTrue = false;
            this.workClicked = true;
            this.aboutClicked = false;
            this.skillClicked = false;
            this.interestClicked = false;
        },
    
        aboutLink(){
            this.navTrue = false;
            this.workClicked = false;
            this.aboutClicked = true;
            this.skillClicked = false;
            this.interestClicked = false;
        },
    
        contactLink(){
            this.navTrue = false;
            this.workClicked = false;
            this.aboutClicked = false;
            this.skillClicked = false;
            this.interestClicked = false;
        },
    },
    
    }