
function change_theme() {
    const button = document.querySelector(".theme-change")
    const path = document.querySelector("#theme-svg")
    const center = document.querySelector(".center-bubble img")
    const top_right = document.querySelector(".top-right img")
    const top_left = document.querySelector(".top-left img")
    const bottom_right = document.querySelector(".bottom-right img")
    const bottom_left = document.querySelector(".bottom-left img")
    const code_theme = document.querySelector(".code_theme")

    if (button.classList == "bi bi-brightness-high-fill theme-change position-fixed") {
        path.setAttribute('d', "M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278")
        button.setAttribute("class", "bi bi-moon-fill theme-change position-fixed")
        document.querySelector("html").setAttribute('color-mode', 'light')
        center.src = "img/django-light.png"
        top_right.src = "img/api-light.png"
        top_left.src = "img/bootstrap-light.png"
        bottom_right.src = "img/react-light.png"
        bottom_left.src = "img/q-light.png"
        code_theme.href = "styles/base16/solarized-light.css"
    }
    else if (button.classList == "bi bi-moon-fill theme-change position-fixed") {
        path.setAttribute('d', "M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708")
        button.setAttribute("class", "bi bi-brightness-high-fill theme-change position-fixed")
        document.querySelector("html").setAttribute('color-mode', 'dark')
        center.src = "img/django.png"
        top_right.src = "img/api.png"
        top_left.src = "img/bootstrap.png"
        bottom_right.src = "img/react.png"
        bottom_left.src = "img/q.png"
        code_theme.href = "styles/base16/spacemacs.css"
    }
}


let curx = 0;
let cury = 0;
let tgx = 0;
let tgy = 0;

if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
    document.addEventListener("DOMContentLoaded", () => {
        const interBubble = document.querySelector(".interactive")
        function move() {
            curx += (tgx - curx) / 15
            cury += (tgy - cury) / 15
            interBubble.style.transform = `translate(${Math.round(curx)}px, ${Math.round(cury)}px)`;
            requestAnimationFrame(() => {
                move();
            });
        }

        window.addEventListener("mousemove", (e) => {
            tgx = e.clientX
            tgy = e.clientY
        });

        move()
    })
}

const elements = document.querySelectorAll(".experience-info")

elements.forEach((elem) => {
    const ex_1 = document.querySelector(".ex-1")
    const ex_2 = document.querySelector(".ex-2")
    const ex_3 = document.querySelector(".ex-3")
    elem.addEventListener("mouseenter", function () {

        if (elem.classList.contains("ex-1")) {
            ex_2.classList.add("hovered")
            ex_3.classList.add("hovered")
        }
        if (elem.classList.contains("ex-2")) {
            ex_1.classList.add("hovered")
            ex_3.classList.add("hovered")
        }
        if (elem.classList.contains("ex-3")) {
            ex_1.classList.add("hovered")
            ex_2.classList.add("hovered")
        }
    })
    elem.addEventListener("mouseout", function () {

        if (elem.classList.contains("ex-1")) {
            ex_2.classList.remove("hovered")
            ex_3.classList.remove("hovered")
        }
        if (elem.classList.contains("ex-2")) {
            ex_1.classList.remove("hovered")
            ex_3.classList.remove("hovered")
        }
        if (elem.classList.contains("ex-3")) {
            ex_1.classList.remove("hovered")
            ex_2.classList.remove("hovered")
        }
    })
})

// langs section
const typer = () => {
    const code = `langs = [
    "python 🚀",
    "JS 🤓",
    "SQL 💉",
    "HTML ❓",
    "CSS 📝",
    "RUST(Beginner) 🦀"
]`;
    const block = document.getElementById("code-block");
    let i = 0;

    function typeCode() {
        if (i <= code.length) {
            block.textContent = code.substring(0, i);

            delete block.dataset.highlighted;

            hljs.highlightElement(block);

            i++;
            setTimeout(typeCode, 45); // Typing speed
        }
    }

    typeCode();
    hljs.highlightAll();
}

typer()

const addLang = () => {
    const codeContainer = document.querySelector(".codes")
    codeContainer.classList.add("active")
    typer()
}

const addFrame = () => {
    const framworkContainer = document.querySelector(".framework")
    framworkContainer.classList.add("active")
}

const addTool = () => {
    const framworkContainer = document.querySelector(".tools")
    framworkContainer.classList.add("active")
}

const buttons = document.querySelectorAll(".filter-btn")

const code = document.querySelector(".codes").classList
const framework = document.querySelector(".framework").classList

buttons.forEach((val) => {

    val.addEventListener("click", () => {
        buttons.forEach((val) => {
            val.classList.remove("active")
        })
        val.classList.add("active")


        const contains = document.querySelectorAll(".contain")
        contains.forEach((container) => {
            container.classList.remove("active")
        })

        switch (val.id) {

            case "langs":

                addLang()
                hljs.highlightAll();
                break;
            case "fws":

                addFrame()
                break
            case "tools":
                addTool()
                break

        }

    })
})

const scrollToTopBtn = document.querySelector(".scrollToTopBtn");
const targetElement = document.querySelector(".about-me-sec");

window.addEventListener("scroll", () => {
  const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;

  if (window.scrollY > targetPosition) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
