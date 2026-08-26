/* =========================================
   СТЕЖКА ДО ВЛАСНОЇ КВІТКИ ПАПОРОТІ
   СЦЕНА 1
   ========================================= */


/* -----------------------------------------
   Налаштування
   ----------------------------------------- */

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

const leafSound1 = document.getElementById("leafSound1");
const leafSound2 = document.getElementById("leafSound2");


/*
   Час між появою рядків.

   Можемо потім змінити,
   коли почуємо реальний темп сцени.
*/

const delayBetweenLines = 2200;


/*
   Пауза перед останнім рядком.
*/

const pauseBeforeFinalLine = 2600;


/*
   Пауза після появи останніх слів
   перед завершенням сцени.
*/

const pauseAfterFinalLine = 5000;


/* -----------------------------------------
   Функція відтворення звуку
   ----------------------------------------- */

function playSound(sound) {

    sound.currentTime = 0;

    const promise = sound.play();

    if (promise !== undefined) {
        promise.catch(() => {
            /*
               Браузер може заблокувати звук,
               якщо сторінка ще не отримала
               дозвіл на відтворення аудіо.
            */
        });
    }
}


/* -----------------------------------------
   Поява звичайного рядка
   ----------------------------------------- */

function showLine(index) {

    lines[index].classList.add("visible");

    playSound(leafSound1);
}


/* -----------------------------------------
   Поява останнього рядка
   ----------------------------------------- */

function showFinalLine() {

    /*
       Спочатку спеціальний шелест.
    */

    playSound(leafSound2);


    /*
       Невелика пауза між шелестом
       і появою слів.
    */

    setTimeout(() => {

        lines[8].classList.add("visible");

    }, 450);


    /*
       Після появи слова починають світитися.
    */

    setTimeout(() => {

        lines[8].classList.add("glowing");

    }, 1900);

}


/* -----------------------------------------
   Запуск сцени
   ----------------------------------------- */

function startIntro() {

    /*
       Перший рядок.
    */

    showLine(0);


    /*
       Наступні рядки.
    */

    for (let i = 1; i < 8; i++) {

        setTimeout(() => {

            showLine(i);

        }, delayBetweenLines * i);

    }


    /*
       Останній рядок.
    */

    setTimeout(() => {

        showFinalLine();

    }, (delayBetweenLines * 8) + pauseBeforeFinalLine);


    /*
       Тут пізніше буде перший гонг
       і перехід до наступної сцени.
    */

    setTimeout(() => {

        console.log(
            "Сцена 1 завершена. Тут буде перший гонг."
        );

    }, (delayBetweenLines * 8) + pauseBeforeFinalLine + pauseAfterFinalLine);

}


/* -----------------------------------------
   Запуск після завантаження сторінки
   ----------------------------------------- */

window.addEventListener("load", () => {

    startIntro();

});
