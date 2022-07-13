// задание - destruct array
// напишите код, который используя деструктуризацию положит:
// четные числа в переменные even1, even2,
// нечетные в odd1, odd2, odd3,
// буквы в отдельный массив

// let arr = [1,2,3,4,5, "a", "b", "c"];
// let indexEven = 1;
// let indexOdd = 1;
// let varName;
// let arrSymbol = [];
// for (let arrOnes of arr) {
//     if (arrOnes % 2 > 0) {
//         varName = ('odd' + indexOdd);
//         this[varName] = arrOnes;
//         indexOdd++;
//         console.log(varName);
//     } else if (arrOnes % 2 === 0) {
//         varName = ('even' + indexEven);
//         this[varName] = arrOnes;
//         indexEven++;
//         console.log(varName);
//     } else {
//         arrSymbol.push(arrOnes);
//         console.log(arrSymbol);
//     }
// }



// задание - destruct string
// напишите код, который используя деструктуризацию положит:
// число в переменную number
// букву a в переменную s1
// букву b в переменную s2
// букву c в переменную s3

// let arr = [1, "abc"];
// let indexNum = 1;
// let indexSymbol = 1;
// let strArr = [];
// let varName;
// for (let arrOnes of arr) {
//     if (typeof arrOnes === 'number') {
//         varName = ('number' + indexNum);
//         this[varName] = arrOnes;
//         indexNum++;
//         console.log(varName + ' = ' + arrOnes);
//     } else if (typeof arrOnes === 'string') {
//         strArr = arrOnes.split('');
//         for (let i = 0; i < strArr.length; i++) {
//             varName = ('s' + indexSymbol);
//             this[varName] = strArr[i];
//             indexSymbol++;
//             console.log(varName + ' = ' + strArr[i]);
//         }
//         console.log(strArr)
//     }
// }



// задание - destruct 2
//  извлеките используя деструктуризацию имена детей в переменные name1 и name2

// let obj = {
//     name: 'Ivan',
//     surname: 'Petrov',
//     children: [{ name: 'Maria' }, { name: 'Nikolay' }]
// }
// let [{name: name1}, {name: name2}] = obj.children;
// console.log(name1 + ' , ' + name2);



// задание - destruct 3
// извлеките используя деструктуризацию объектов два первых элемента и длину массива в переменные a, b и length

// let arr = [1, 2, 3, 4, 5, 6, 7, 10];
// let [a, b] = arr;
// let arrLenght = arr.length;
// console.log(a + ' ' + b + ' ' + arrLenght);