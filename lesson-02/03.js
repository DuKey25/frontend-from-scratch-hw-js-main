/*
 * Напишите код, который будет определять оценку студента (grade) в зависимости от балла (score).
 * Балл может быть целым числом от 0 до 100, а оценки 'F' (0 - 49), 'D' (50 - 69), 'C' (70-79), 'B' (80 - 89), 'A' (90 - 100)
 * Результат сохраните в переменной grade.
 */

const score = 75// тестовое значение, можно изменять
let grade = (score < 50) ? 'F' :
(score < 70) ? 'D' :
(score < 80) ? 'C' :
(score < 90) ? 'B' :
(score <= 100) ? 'A' : 'Please enter correctly score'

// console.log(grade);

if (score >= 0 && score <= 49) {
    grade = 'F'
}
else if (score >= 50 && score <= 69) {
    grade = 'D'
}
else if (score >= 70 && score <= 79) {
    grade = 'C'
}
else if (score >= 80 && score <= 89) {
    grade = 'B'
}
else if (score >= 90 && score <= 100) {
    grade = 'A'
} else {
    console.log('Please enter correctly score');
}

// console.log(`Grade ${grade}`);





// your code
