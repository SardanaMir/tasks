//task 1
const arr = [1, 2, 3, 4, 5, 6];

function toReversed(array){
    let newArr = [];
    for(let i = 0; i < array.length; i++){
        newArr[i] = arr[array.length-1 - i]
    }
    return newArr
}

const reversedArr = toReversed(arr);

console.log(reversedArr); // [6, 5, 4, 3, 2, 1]

//task 2
const array2 = ["apple", "fly", "banana", "5", "cat", "12", "dog"];
//output "5"
function isNum(array){
    for(let i = 0; i < array.length; i++){
        if(!isNaN(Number(array[i]))){
            return array[i]
        }
    }
}
console.log(isNum(array2))

//task 3
const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];

function isEqual(array1, array2){
    let count = 0;
    if(array1.length !== array2.length){
        return false
    }else{
        for (let i = 0; i < array1.length; i++){
            if(array1[i] === array2[i]){
                count++
            }else{
                return false
            }
        }
    }
    return count === array1.length
}

console.log(isEqual(arr1, arr2)); // true

//task4
const arr4 = [1, false, "42", "", null, 67, undefined, -45, 0, "apple", NaN];

function withoutEmpty(array){
    // for(let i = 0; i < array.length; i++){
    //     switch(array[i]){
    //         case false

    //     }
    // }
    let newArray = array.reduce((accum, elem) =>{
        if (elem !== false && elem !== "" && elem !== undefined && !isNaN(elem) && elem !== null && elem !== 0){
            accum.push(elem)
        }
        return accum
    }, [])
    return newArray
}


const newArr = withoutEmpty(arr4);
console.log(newArr); // [1, "42", 67, -45, "apple"]

const dog = {
	name: "Рекс",
	age: 3,
	breed: "Немецкая овчарка",
	city: "Москва",
	address: "ул. Ленина, 2",
};

function makeString(obj){
    let str = '';
    for(key in obj){
        str += `${key}: ${obj[key]} `
        console.log(`${key}: ${obj[key]} `)
    }
}
makeString(dog)

const movies = [
	{title: "Зеленая миля", director: "Фрэнк Дарабонт"},
	{title: "Побег из Шоушенка", director: "Фрэнк Дарабонт"},
	{title: "Форрест Гамп", director: "Роберт Земекис"},
	{title: "1+1", director: "Оливье Накаш"},
	{title: "Список Шиндлера", director: "Стивен Спилберг"},
];

function createStr(arr){
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i])
    }

}
createStr(movies)
