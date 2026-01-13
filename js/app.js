window.addEventListener("DOMContentLoaded", () => {

    let input = document.querySelector(".input_main");
    let text = document.querySelector(".texto_main");

    input.addEventListener("keydown", (e) => {
        let search = input.value;

        if (search.trim() != "" && e.code =="Enter"){
            let regExp = new RegExp(search, "gi");
            /*
            && e.code =="Enter" se acciona solo al presionar enter
            g refiere a una búsqueda global
            e i refiere a una búsqueda tiene en cuenta mayúsculas y minúsculas */

            text.innerHTML = text.textContent.replace(regExp, "<span class='buscar'>$&</span>");
        }
    });

})
