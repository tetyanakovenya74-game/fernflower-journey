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

}


/* =========================================
   КНОПКА
   ========================================= */

startButton.addEventListener(
    "click",
    startJourney
);
