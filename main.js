// К массиву
function calcValues(a, b) {
    return [
        a + b,
        a - b,
        a * b,
        undefined,
        a / b,
    ]
}

const [sum, , multiply, root = "Вычитания нет", ...other] = calcValues(10, 20)

// К Обьекту
const person = {
    name: "Said",
    age: 16,
    address: {
        country: "Russian",
        city: "Moscow"
    }
}

const {name: firstName = "Без имени", age, address: {country: home = "Дома нету", city}} = person

// К функции
function logPerson({name, age}) {
    return `${name} (${age})`
}

console.log(logPerson(person))

// {name = "Имени нет"} - значение по умолчанию
// {name: firstName} - изменении имени переменной
// {address: {county, city}} - дистуктуризация внутрених
// {name, ,address} - пропуск 