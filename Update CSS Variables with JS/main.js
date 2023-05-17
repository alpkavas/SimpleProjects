const space = document.querySelector("#space")
const blur = document.querySelector("#blur")
const color = document.querySelector("#color")
const picColumn = document.querySelector(".pic-column")
const spanColor = document.querySelector("#JSspan")


space.addEventListener("input", () =>{
    picColumn.style.padding = space.value + "px"
})

blur.addEventListener("input", () => {
    picColumn.style.filter ="blur(" + blur.value + "px)";
})

color.addEventListener("input", () => {
    picColumn.style.backgroundColor  = color.value
    spanColor.style.color = color.value
})

