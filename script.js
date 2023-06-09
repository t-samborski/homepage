{
    console.log("Cześć");
    const buttonElement = document.querySelector(".button-js");
    const brightElement = document.querySelector(".body");
    const backgroundElement = document.querySelector(".background");

    buttonElement.addEventListener("click", () => {
        brightElement.classList.toggle("darkBackground-js");

  brightElement.classList.contains("darkBackground-js") ? backgroundElement.innerText="jasne" : backgroundElement.innerText="ciemne";

    })

}