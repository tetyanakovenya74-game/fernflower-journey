/* =========================================
   СТЕЖКА ДО ВЛАСНОЇ КВІТКИ ПАПОРОТІ
   СЦЕНА 1
   ========================================= */


/* =========================================
   ЕЛЕМЕНТИ
   ========================================= */

const startButton =
    document.getElementById("startButton");

const groups = [
    document.getElementById("group1"),
    document.getElementById("group2"),
    document.getElementById("group3")
];


const leafSound1 =
    document.getElementById("leafSound1");

const leafSound2 =
    document.getElementById("leafSound2");

const gongSound =
    document.getElementById("gongSound");


/* =========================================
   ЗВУК
   ========================================= */

function playSound(sound) {

    sound.currentTime = 0;

    sound.play().catch((error) => {

        console.log(
            "Не вдалося відтворити звук:",
            error
        );

    });
}


/* =========================================
   ПОКАЗ РЯДКА
   ========================================= */

function showLine(line) {

    line.classList.add("visible");

    playSound(leafSound1);
}


/* =========================================
   СХОВАТИ РЯДКИ ГРУПИ
   ========================================= */

function hideLines(group) {

    const lines =
        group.querySelectorAll(".line");

    lines.forEach((line) => {

        line.classList.remove("visible");

    });

}


/* =========================================
   ПОКАЗАТИ ПЕРШІ ДВА РЯДКИ
   ========================================= */

function showFirstTwo(group) {

    const lines =
        group.querySelectorAll(".line");

    showLine(lines[0]);

    setTimeout(() => {

        showLine(lines[1]);

    }, 1700);

}


/* =========================================
   ПОКАЗ ТРЕТЬОГО РЯДКА
   ========================================= */

function showThirdLine(group) {

    const lines =
        group.querySelectorAll(".line");

    setTimeout(() => {

        showLine(lines[2]);

    }, 3400);

}


/* =========================================
   ПЕРША ГРУПА
   ========================================= */

function playGroup1() {

    const group = groups[0];

    group.classList.add("active");

    showFirstTwo(group);

    showThirdLine(group);


    /*
       Після того як усі три рядки
       побули разом на екрані,
       група зникає.
    */

    setTimeout(() => {

        group.classList.add("fade-out");

    }, 6500);

}


/* =========================================
   ДРУГА ГРУПА
   ========================================= */

function playGroup2() {

    const group = groups[1];

    group.classList.add("active");

    showFirstTwo(group);

    showThirdLine(group);


    setTimeout(() => {

        group.classList.add("fade-out");

    }, 6500);

}


/* =========================================
   ТРЕТЯ ГРУПА
   ========================================= */

function playGroup3() {

    const group = groups[2];

    const lines =
        group.querySelectorAll(".line");


    group.classList.add("active");


    /*
       Перший рядок
    */

    showLine(lines[0]);


    /*
       Другий рядок
    */

    setTimeout(() => {

        showLine(lines[1]);

    }, 1700);


    /*
       Спеціальний шелест
       перед «квіткою папороті»
    */

    setTimeout(() => {

        playSound(leafSound2);

    }, 3400);


    /*
       Поява «квіткою папороті»
    */

    setTimeout(() => {

        lines[2].classList.add("visible");

    }, 3900);


    /*
       Сяйво
    */

    setTimeout(() => {

        lines[2].classList.add("glowing");

    }, 5000);


    /*
       Перший гонг
    */

    setTimeout(() => {

        playSound(gongSound);

    }, 9000);

}


/* =========================================
   ЗАПУСК МАНДРІВКИ
   ========================================= */

function startJourney() {


    /*
       Кнопка зникає
    */

    startButton.classList.add("hide");


    /*
       Група 1
    */

    setTimeout(() => {

        playGroup1();

    }, 1200);


    /*
       Група 2
    */

    setTimeout(() => {

        /*
           Перед новою групою
           прибираємо попередню.
        */

        groups[0].classList.remove("active");

        hideLines(groups[0]);


        playGroup2();

    }, 9700);


    /*
       Група 3
    */

    setTimeout(() => {

        groups[1].classList.remove("active");

        hideLines(groups[1]);


        playGroup3();

    }, 19400);

    // Після вступу та останнього гонга показуємо запитання
    setTimeout(() => {
        document.getElementById("introScene").hidden = true;
        document.getElementById("choiceScene").hidden = false;
    }, 30500);

}


/* =========================================
   КНОПКА
   ========================================= */

startButton.addEventListener(
    "click",
    startJourney
);

/* =================================
   ВИБІР ВІДПОВІДІ
================================= */

const choiceButtons = document.querySelectorAll(".choice-button");
const enterForestButton = document.getElementById("enterForestButton");

let selectedAnswer = null;

choiceButtons.forEach((button) => {
    button.addEventListener("click", () => {
        selectedAnswer = button.dataset.answer;

        choiceButtons.forEach((item) => {
            item.classList.remove("selected");
        });

        button.classList.add("selected");
        enterForestButton.hidden = false;
    });
});


/* =================================
   ВХІД ДО ЛІСУ
================================= */

enterForestButton.addEventListener("click", () => {
    document.getElementById("choiceScene").hidden = true;

    const forestScene = document.getElementById("forestScene");
    const forestImages = document.getElementById("forestImages");
    const lightDrop = document.getElementById("lightDrop");
    const chooseFlowerButton =
        document.getElementById("chooseFlowerButton");

    forestScene.hidden = false;

    // Початковий стан сцени
    forestImages.innerHTML = "";

    lightDrop.classList.remove(
        "approaching",
        "becoming-button"
    );
    lightDrop.hidden = false;

    chooseFlowerButton.hidden = true;
    chooseFlowerButton.classList.remove("appearing");

    // Поступова поява 12 образів у просторі лісу
    for (let i = 0; i < 12; i++) {
        const vision = document.createElement("div");
        const image = document.createElement("img");

        vision.className = "forest-vision";

        image.src = `Темнийліс${i + 1}.png`;
        image.alt = "";

        vision.appendChild(image);

        // Образи виникають один за одним
        vision.style.animationDelay = `${i * 3.5}s`;

        forestImages.appendChild(vision);
    }

    // Ледь помітна зоря починає оживати
    setTimeout(() => {
        lightDrop.classList.add("approaching");
    }, 49000);

    // Світло проривається крізь темряву
    setTimeout(() => {
        lightDrop.classList.remove("approaching");
        lightDrop.classList.add("becoming-button");
    }, 57000);

    // Сяйво перетворюється на кнопку
    setTimeout(() => {
        lightDrop.hidden = true;

        chooseFlowerButton.hidden = false;
        chooseFlowerButton.classList.add("appearing");
    }, 58800);
});
/* =================================
   ВИБІР КВІТКИ ПАПОРОТІ
================================= */

// Набори квіток відповідно до відповідей

const flowersByAnswer = {
    "1": [1, 2, 3, 5, 6, 8, 9, 10],
    "2": [1, 4, 7, 9, 10, 12],
    "3": [3, 6, 7, 10, 11],
    "4": [1, 3, 4, 5, 6, 8, 9, 10],
    "5": [2, 4, 7, 10, 11, 12]
};

const chooseFlowerButton =
    document.getElementById("chooseFlowerButton");

const flowerScene =
    document.getElementById("flowerScene");

const flowerImage =
    document.getElementById("flowerImage");

let flowerChosen = false;


// Поява квітки після натискання кнопки

chooseFlowerButton.addEventListener("click", () => {

    // Одна квітка за одну мандрівку
    if (flowerChosen || !selectedAnswer) {
        return;
    }

    flowerChosen = true;

    // Беремо відповідний набір
    const availableFlowers =
        flowersByAnswer[selectedAnswer];

    // Випадково обираємо одну квітку
    const randomIndex =
        Math.floor(Math.random() * availableFlowers.length);

    const flowerNumber =
        availableFlowers[randomIndex];

    // Формуємо назву файлу: 01.jpg, 02.jpg ... 12.jpg
    const flowerFile =
        String(flowerNumber).padStart(2, "0") + ".jpg";


    // Починаємо фінальну сцену
    document.getElementById("forestScene").hidden = true;

    flowerScene.hidden = false;

    // Гонг звучить на початку появи квітки
    playSound(gongSound);


    // Підготовка зображення
    flowerImage.classList.remove("flower-appearing");
    flowerImage.dataset.revealed = "false";

    function revealFlower() {

        if (flowerImage.dataset.revealed === "true") {
            return;
        }

        flowerImage.dataset.revealed = "true";

        // Перезапускаємо анімацію появи
        flowerImage.classList.remove("flower-appearing");

        void flowerImage.offsetWidth;

        flowerImage.classList.add("flower-appearing");
    }

    flowerImage.onload = revealFlower;

    flowerImage.src = flowerFile;

    // Якщо зображення вже завантажене з кешу
    if (flowerImage.complete && flowerImage.naturalWidth > 0) {
        revealFlower();
    }

});
