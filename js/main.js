document.write('ДЗ 10. <br>Створити масив, довжину та елементи якого задає користувач.<br>Відсортувати масив за зростанням.<br>Видалити елементи з масиву з 2 по 4 (включно!).<br>У міру змін виводити вміст масиву на сторінку.<br><br>');


let arr = [];
while (true) {
    let element = prompt('Введіть назву овоча');
    if (element === null) {
        break;
    }
    arr.push(element);
}

document.write('Ваш масив: ' + arr.join(', ') + '<br>');

arr.sort();
document.write('Відсортований за зростанням масив: ' + arr.join(', ') + '<br>');

arr.splice(1, 3);
document.write('Масив без елементів з 2-4: ' + arr.join(', ') + '<br>');