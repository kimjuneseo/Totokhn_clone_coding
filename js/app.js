
 const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

class App {
    constructor() {
        this.scroll = 0;
        this.pages = [];
        this.thisPage;
        this.currentPage = 0;
        this.oneHeader;
        this.twoHeader;
        this.threeHeader;
        this.h;
        this.init();
    }

    init() {
        const box = document.querySelector(".box");
        this.oneHeader = document.querySelector("#oneheader")
        this.twoHeader = document.querySelector("#twoheader");
        this.threeHeader = document.querySelector("#threeheader");
        this.thisPage = document.querySelector('.this_page');

        
        const h = this.h = window.innerHeight;
        this.pages = document.querySelectorAll(".page");
        box.style.height =`${h}px`;

        box.addEventListener("wheel", e => {
            const {deltaY} = e;
            this.scroll = clamp(this.scroll + deltaY/2, 0, h*(3-1));
            console.log(deltaY)
            // this.scroll = window.innerHeight
            this.pages[0].style.marginTop = `-${this.scroll}px`;

            this.currentPage = Math.ceil(this.scroll / h);
            this.thisPage.innerHTML = this.currentPage + 1;
            this.changePage();
        });

        this.pages.forEach(x => {
            x.style.height =`${h}px`;
            x.style.marginTop = `0`;
        });
        
    }

    changePage()
    {
        if(this.currentPage == 1)
        {
            let left = window.innerWidth - this.scroll;
            this.twoHeader.style.left = `${left}px`;
            return;
        }
        if(this.currentPage == 2){
            
            let left = window.innerWidth - this.scroll;
            console.log(this.h,this.scroll);
            this.threeHeader.style.left = `${left}px`
        }
    }
}

window.onload = () => {
    let app = new App();
};

//시험