//////////1 task/////////
const students = ['Ruslan', 'Asema', 'Samir', 'Adilet'];

function getStudents(arr){

    const str = arr.join(', ')

    if(arr.length > 3){
        console.log('большая группа');
        
    }else{
        console.log('маленькая группа');
    }


    console.log(str);
    return str;
}
getStudents(students);
//////////1 task/////////
//////////2 task/////////



const skills = 'HTML, CSS, JavaScript, React';

function getSkills(arr1){

    const str1 = arr1.split(', ')

     for (let i = 0; i < str1.length; i++) {
        console.log(str1[i]);
    }

    return str1
    
}
getSkills(skills)
//////////2 task/////////
//////////3 task/////////
const frontend = ['HTML', 'CSS', 'JavaScript'];

const backend = ['Node.js', 'Python', 'PHP'];

function combineSkills(array1, array2){
    const backFront = array1.concat(array2)

    if (backFront.length > 5) {
        console.log('много навыков');
    }

    for (let i = 0; i < backFront.length; i++) {
        console.log(backFront[i]);
    }
    
    return backFront;
}
const mySkills = combineSkills(frontend, backend);
//////////3 task/////////
//////////4 task/////////
const scores = [75, 90, 60, 85, 100, 45];
function getTopScores(arr2){
    const scoreCopy = arr2.slice(0, 3)
    scoreCopy[0] = 100;
    console.log(arr2);
    console.log(scoreCopy);
    // потому что тут примитивный тип данных. Когда примитивы копируются через slice(), они копируются по значению. Это значит, что в новый массив записались независимые дубликаты этих чисел. И когда действует метод slice(),создают абсолютно новый массив которая независима от старого. Если че я сам написал!
}
getTopScores(scores)
//////////4 task/////////
//////////5 task/////////
const data = [
    'Hello',

100,

true,

['HTML', 'CSS'],

{ name: 'Ruslan' },

null

];

function checkData(arr3){
 
  let count = 0;

  for (let i = 0; i < arr3.length; i++) {
    if (Array.isArray(arr3[i])) {
       console.log("Это массив: " + arr3[i].join(", "));
      count = count + 1;
    } else {
      console.log("Это не массив" );
    }
  }

  return count;
}
const totalArrays = checkData(data);
console.log("Всего вложенных массивов: " + totalArrays);

//////////5 task/////////