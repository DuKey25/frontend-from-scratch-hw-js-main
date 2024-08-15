/*
Напишите функцию `doubleEachCharacter`, которая принимает строку и возвращает новую строку, где каждый символ из исходной строки повторяется дважды.

Входные данные:

- **`str`**: Строка, символы которой нужно удвоить.

Выходные данные:

- Новая строка с каждым символом, повторенным дважды.

Пример работы функции: `doubleEachCharacter('hello')` вернёт `'hheelllloo'`
*/

function doubleEachCharacter(string) {
    let newString = ''
    let myString = string.split("");
    for (let i = 0; i < myString.length; i++) {
        let repeat = 0;
        while (repeat < 2) {
            newString = newString + myString[i]
            repeat++
        }
    }
    return newString
}
