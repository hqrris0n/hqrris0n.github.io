window.addEventListener('scroll', () => {
    const pattern = document.getElementById("pattern")
    if (window.scrollY > (window.innerHeight * 0.7)) {
        pattern.style.opacity = 0.5;
    } else {
        pattern.style.opacity = 1;
    }
    pattern.style.transform = 
        `rotate(${(scrollY/(document.body.offsetHeight-innerHeight))*360}deg)`;
})

const form = document.getElementById("contact_form");
form.addEventListener('submit', (event) => {
    event.preventDefault();

    let formData = {
            name: document.getElementById('name__input').value,
            email: document.getElementById('email__input').value,
            message: document.getElementById('message__input').value
        };

    let jsonText = JSON.stringify(formData);
    console.log(jsonText);

    fetch('https://script.google.com/macros/s/AKfycbzxeg3ITwHSj6nKOXpDRsmljoxH3KQ2-DQH87e0SBJuX55heEE6dXj3Ct-fVLP31bNEcw/exec', {
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(formData),
    })
        .then((res) => res.json())
        .then((data) => console.log('data', data))
        .catch((err) => console.log('err', err));
        
    form.reset();
})

window.addEventListener('resize', () =>  {
    if (window.innerWidth > 900) {
        const menu = document.querySelector(".hamburger__links");
        const icon = document.querySelector(".hamburger__icon");
        menu.classList.remove("open");
        icon.classList.remove("open");
    }
})

function toggleMenu() {
    const menu = document.querySelector(".hamburger__links");
    const icon = document.querySelector(".hamburger__icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

let clickCount = 0;
function easterEgg() {
    clickCount++;
    if (clickCount === 5) {
        const mudkip = document.querySelector(".mudkip");
        mudkip.style.display = "block"
    }
    console.log(clickCount);
}

function changeName(appNum) {
    console.log("Hello");
    const appNames = ["Huffman Compression", "Critters", "Keyboard and Mouse Replay"];
    const appYears = ["2024", "2023", "2024"];
    const appDetails = ["Java", "Java", "Python • TKinter"];
    document.querySelector(".projects__app-name").innerHTML = appNames[appNum];
    document.querySelector(".projects__app-year").innerHTML = appYears[appNum];
    document.querySelector(".projects__app-detail").innerHTML = appDetails[appNum];
}