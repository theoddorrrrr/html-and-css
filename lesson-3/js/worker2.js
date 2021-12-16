onmessage = function (e) {
    let workerResult = 'Результат: ' + (+e.data[0] - +e.data[1]);
    postMessage(workerResult);
}