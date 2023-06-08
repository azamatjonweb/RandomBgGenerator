const container = document.querySelector('.container');
const generate = document.querySelector('.generate');

generate.addEventListener('click', RandomBg);
RandomBg();

function RandomBg() {
    const colors = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
    ];

    function randomColor() {
        let color = "#";

        for(let i = 0; i < 6; i++) {
            const random = Math.floor(Math.random() * colors.length);
            color += colors[random];
        }
        return color;
    }

    const color1 = randomColor();
    const color2 = randomColor();

    const randomDeg = Math.floor(Math.random() * 360);
    container.style.background = `linear-gradient(${randomDeg}deg, ${color1}, ${color2})`;
};