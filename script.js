//Select The Elements
let toggleBtn //= document.querySelector(".toggle-btn");
let bigWrapper //= document.querySelector(".big-wrapper");
let hamburgerMenu
//Apply new toggle button and hamBar on cloned mode
declare = () => {
    toggleBtn = document.querySelector(".toggle-btn");
    bigWrapper = document.querySelector(".big-wrapper");
    hamburgerMenu = document.querySelector(".hamburger-menu")

}
const main = document.querySelector("main")

declare();

let dark = false

toggleAnimation = () => {
    //Clone the Wrapper
    dark = !dark
    let clone = bigWrapper.cloneNode(true);
    if(dark){
        clone.classList.remove("light");
        clone.classList.add("dark")
    }else{
        clone.classList.remove("dark");
        clone.classList.add("light")
    }
    clone.classList.add("copy")
    main.appendChild(clone)

    //Apply scroll when animation appeared
    document.body.classList.add("stop-scrolling");

    //Delete first Wrapper and make pure from copied
    clone.addEventListener("animationend", () => {
        document.body.classList.remove("stop-scrolling");
        bigWrapper.remove();
        clone.classList.remove("copy");
        //Reset Variables and Events
        declare();
        events();
    })

}
events = () =>{
    toggleBtn.addEventListener("click", toggleAnimation);
    hamburgerMenu.addEventListener("click", () => {
        bigWrapper.classList.toggle("active")
    })
}

events();



