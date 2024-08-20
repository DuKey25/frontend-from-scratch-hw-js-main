/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

function capitalizeWords(value) {
  let finalValue = '';
  let prevChar = ' ';
  for (let i = 0; i !== value.length; i++) {
    const char = value[i];
    if (prevChar === ' ') {
      finalValue += char.toUpperCase();
    } else {
      finalValue += char;
    }
    prevChar = char;
  }
  return finalValue;
}
