window.onload = function() {
    if (window.Worker) {
        document.addEventListener('click', documentActions);

        const first = document.querySelector('#number1');
        const second = document.querySelector('#number2');
        const result = document.querySelector('.result');

        const worker1 = new Worker("js/worker1.js");
        const worker2 = new Worker("js/worker2.js");
        const worker3 = new Worker("js/worker3.js");
        const worker4 = new Worker("js/worker4.js");


        function documentActions(e) {
            const targetElement = e.target;

            if (targetElement.classList.contains('plus')) {
                worker1.postMessage([first.value, second.value]); 
                worker1.onmessage = function (e) {
                    result.innerText = e.data;
                };
                e.preventDefault();
            }
            if (targetElement.classList.contains('minus')) {
                worker2.postMessage([first.value, second.value]);
                worker2.onmessage = function (e) {
                    result.innerText = e.data;
                }; 
                e.preventDefault();
            }
            if (targetElement.classList.contains('divide')) {
                worker3.postMessage([first.value, second.value]);
                worker3.onmessage = function (e) {
                    result.innerText = e.data;
                }; 
                e.preventDefault();
            }
            if (targetElement.classList.contains('multiple')) {
                worker4.postMessage([first.value, second.value]);
                worker4.onmessage = function (e) {
                    result.innerText = e.data;
                }; 
                e.preventDefault();
            }
        }
    }
}

window.onload = function () {
    let $ = function (id) { return document.getElementById(id) }
    let v = $("video");

    v.currentTime = localStorage.getItem('time');

    $("rewaindForward").onclick = function () {
        v.currentTime += 5;//Перемотка в перед на 5 секунд
    };

    $("rewaindBack").onclick = function () {
        v.currentTime -= 5; //Перемотка назад на 5 секунд
    };

    $("stopButton").onclick = function () {
        v.pause();
        v.currentTime = 0;
        $("playButton").src = "img/icons8_play.png";
    };
    $("fullButton").onclick = function () {
        let elem = $("video");
        //Метод requestFullscreen() используется для отображение елемента во весь экран

        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        }
    };

    $("playButton").onclick = function (e) {
        if (v.paused) {
            v.play();
            e.target.src = "img/icons8-pause.png";

        }
        else {
            v.pause();
            e.target.src = "img/icons8_play.png";
        }
    };

    setInterval( () => localStorage.setItem('time', v.currentTime), 1000)
}