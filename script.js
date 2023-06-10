{
    const welcome = () => {
        console.log("Cześć");
    }

    const onChangeBackgroundClick = () => {
        const brightElement = document.querySelector(".body");
        const backgroundElement = document.querySelector(".background");
        brightElement.classList.toggle("darkBackground-js");
        brightElement.classList.contains("darkBackground-js") ? backgroundElement.innerText = "jasne" : backgroundElement.innerText = "ciemne";
    }
    const init = () => {
        const buttonElement = document.querySelector(".button-js");
        buttonElement.addEventListener("click", onChangeBackgroundClick);
        welcome();
    }
    init();

}