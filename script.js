/* =========================================
   СТЕЖКА ДО ВЛАСНОЇ КВІТКИ ПАПОРОТІ
   СЦЕНА 1
   ========================================= */


/* =========================================
   РЯДКИ
   ========================================= */

const lines = [
    document.getElementById("line1"),
    document.getElementById("line2"),
    document.getElementById("line3"),
    document.getElementById("line4"),
    document.getElementById("line5"),
    document.getElementById("line6"),
    document.getElementById("line7"),
    document.getElementById("line8"),
    document.getElementById("line9")
];


/* =========================================
   ЗВУКИ
   ========================================= */

const leafSound1 =
    document.getElementById("leafSound1");

const leafSound2 =
    document.getElementById("leafSound2");

const gongSound =
    document.getElementById("gongSound");


/* =========================================
   ФУНКЦІЯ ЗВУКУ
   ========================================= */

function playSound(sound) {

    sound.currentTime = 0;

    const promise = sound.play();

    if (promise !== undefined) {

        promise.catch(() => {

            console.log(
                "Браузер заблокував автоматичне відтворення звуку."
            );

        });

    }
}


/* =========================================
   ПОКАЗ РЯДКА
   ========================================= */

function showLine(index) {

    lines[index].classList.remove("fade-out");

    lines[index].classList.add("visible");

    playSound(leafSound1);
}


/* =========================================
   СХОВАТИ ГРУПУ
   ========================================= */

function hideGroup(start, end) {

    for (let i = start; i <= end; i++) {

        lines[i].classList.remove("visible");

        lines[i].classList.add("fade-out");

    }

}


/* =========================================
   ПОКАЗАТИ ГРУПУ
   ========================================= */

function showGroup(start, end, delay) {

    for (let i = start; i <= end; i++) {

        setTimeout(() => {

            showLine(i);

        }, delay + (i - start) * 1700);

    }

}


/* =========================================
   ГРУПА 1
   ========================================= */

function firstGroup() {

    /*
       Кажуть
       що квітки папороті
       не існує.
    */

    showGroup(0, 2, 0);


    /*
       Через приблизно 7 секунд
       перша група зникає.
    */

    setTimeout(() => {

        hideGroup(0, 2);

    }, 6500);

}


/* =========================================
   ГРУПА 2
   ========================================= */

function secondGroup() {

    /*
       Але деякі стежки
       ведуть тебе
       у темряву твоїх страхів.
    */

    showGroup(3, 5, 0);


    /*
       Зникнення другої групи.
    */

    setTimeout(() => {

        hideGroup(3, 5);

    }, 6500);

}


/* =========================================
   ГРУПА 3
   ========================================= */

function thirdGroup() {

    /*
       І саме така подорож
       винагороджує тебе
       квіткою папороті
    */

    showLine(6);


    setTimeout(() => {

        showLine(7);

    }, 1700);


    /*
       Перед останніми словами
       використовується другий шелест.
    */

    setTimeout(() => {

        playSound(leafSound2);

    }, 3400);


    /*
       Після спеціального шелесту
       з'являється:
       «квіткою папороті»
    */

    setTimeout(() => {

        lines[8].classList.add("visible");

    }, 3850);


    /*
       Слова починають світитися.
    */

    setTimeout(() => {

        lines[8].classList.add("glowing");

    }, 5200);


    /*
       Після завершення сяйва
       звучить гонг.
    */

    setTimeout(() => {

        playSound(gongSound);

    }, 9000);

}


/* =========================================
   ЗАПУСК УСІЄЇ СЦЕНИ
   ========================================= */

function startIntro() {

    /*
       Група 1
    */

    firstGroup();


    /*
       Група 2 починається після
       завершення першої.
    */

    setTimeout(() => {

        secondGroup();

    }, 8200);


    /*
       Група 3 починається після
       завершення другої.
    */

    setTimeout(() => {

        thirdGroup();

    }, 16400);

}


/* =========================================
   ЗАПУСК
   ========================================= */

window.addEventListener("load", () => {

    startIntro();

});
