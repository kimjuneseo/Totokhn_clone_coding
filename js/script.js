const clamp = (num, min, max) => Math.min(Math.max(num, min), max);
const box = document.querySelector(".box");
const oneHeader = document.querySelector("#oneheader")
const twoHeader = document.querySelector("#twoheader");
const threeHeader = document.querySelector("#threeheader");
const thisPage = document.querySelector('.this_page');
const pages = document.querySelectorAll(".page");
const h = window.innerHeight;

const init = () => {
    box.style.height =`${h}px`;
    let scroll = 0;
    
    box.addEventListener("wheel", e => {
        const {deltaY} = e;
        console.log(e);
        scroll = clamp(scroll + deltaY/2, 0, h*(3-1));
        // console.log(deltaY)
        scroll = window.innerHeight
        pages[0].style.marginTop = `-${scroll}px`;
        
        let currentPage = Math.ceil(scroll / h);
        thisPage.innerHTML = currentPage + 1;
        changePage(currentPage);
    });
    
    pages.forEach(x => {
        x.style.height =`${h}px`;
        x.style.marginTop = `0`;
    });
    // scrollReveal().reveal(``)
}

init();
    const changePage = (currentPage) => {
        if(currentPage == 1)
        {
            let left = window.innerWidth - scroll;
            twoHeader.style.left = `${left}px`;
            return;
        }
        if(currentPage == 2){
            
            let left = window.innerWidth - scroll;
            console.log(h,scroll);
            threeHeader.style.left = `${left}px`
        }
    }


