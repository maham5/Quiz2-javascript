 //Quiz 
 //Section 1: Strings & String Methods//
 //+++++++++++++1+++++++++++++//
 
 function extractFirstWord(str){
  return str.substring(0,7)
}
let message = "Welcome to JavaScript Programming!";
console.log(extractFirstWord(message));

//++++++++++2++++++++++//
function emailMask(email) {
	let maskedEmail = email.replace(/([^@\.])/g, "*").split('');
	let previous	= "";
	for(i=0;i<maskedEmail.length;i++){
		if (i<=1 || previous == "." || previous == "@"){
			maskedEmail[i] = email[i];
		}
		previous = email[i];
	}
	return maskedEmail.join('');
}
console.log(emailMask("maham34@gmail.com"));

//Section 2: Arrays & Array Methods//
//++++++++++1+++++++++++//

function doubleNumbers(){
    let num = numbers.map((x)=>{
       return x*2;
    });
    return num;
}
let numbers = [1, 2, 3, 4, 5];
console.log(doubleNumbers());

//++++++++++++++2+++++++++++++++//

function removeDuplicates(arr){
   let array = [...new Set(arr)]
return array;
    
}
console.log(removeDuplicates(["apple", "banana", "apple", "orange", "banana"]))


//Section 3: Objects//
//+++++++++++1++++++++++//
const student ={
    name:"Maham fatima",
    age:45,
    newsubjects :[]
}
function addSubjects (student , subject){
 return student.newsubjects.push(subject);
    
}

addSubjects(student , "mathematics");
console.log(student.newsubjects);

//++++++++++++++2++++++++++++//
function mergeobject (obj1 ,obj2){
  return {...obj1 , ...obj2};
}
const merge = mergeobject({name: "John", age: 25}, {age: 30, city: "New York"});
console.log(merge);

//Section 4: Loops//
//+++++++++++1++++++++++//

function sumOfNumbers(arr){
   let sum =0;
   arr.forEach((num)=> {
    sum += num;
   });
   return sum;
}
console.log(sumOfNumbers([10, 20, 30, 40]));

//++++++++++2++++++++++++//
function findLongestWord(arr){
   let array= arr.sort((a,b)=>{
        return b.length - a.length;
    })
    return array[0];
}

console.log(findLongestWord(["apple", "banana", "cherry", "blueberry"]))


//Section 5: Arrow Functions//
//+++++++++++1++++++++++++//
const multiply = (a , b)=>{
    return a * b;
}
console.log(multiply(4 , 6));

//++++++++++2+++++++++++//
const filterEvenNumbers =(array)=>{
   return array.filter(x=> x % 2 === 0)

}
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]))


//Section 6: Async JS & Fetch
//++++++++++++1++++++++++++++++//
//function fetchData(){

/*fetch("https://api.github.com/users/maham5")
.then((response)=>{
     return response.json();
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
  console.log(error)
})
}
console.log(fetchData());*/


//++++++++++2++++++++++++//

async function fetchData1(){
    try{
    const response = await fetch("https://api.github.com/users/maham5");
    const data = await response.json();
    console.log(data);
}
catch{
    console.log('E :', error);
}
  
}
fetchData1()

//Section 7: Promises
//+++++++++++1+++++++++++++//
const delay = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};


const waitAndLog = (ms) => {
    delay(ms).then(() => {
        console.log("Done!");
    });
};

console.log(waitAndLog(1000));

//++++++++++++2+++++++++++++//

const fetchData3=new Promise((resolve, reject) => {
    setTimeout(()=>{
        const userdata = {
            username :"Maham fatima",
            password: "234",
            id :"45"
        }
        resolve(userdata)
    },2000)
})
fetchData3.then((data)=>{
console.log(data);
})

//Section 8: AJAX & APIs
///++++++++++1++++++++++++//
function fetchData4() {
   
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);


    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
           
            const data = JSON.parse(xhr.responseText);
            console.log(data);
        } else {
            console.error('Request failed with status', xhr.status);
        }
    };

    
    xhr.onerror = function() {
        console.error('Request failed');
    };
    xhr.send();
}
fetchData4();

//+++++++++++2+++++++++++//
function getWeatherData(cityName) {
    const apiKey = 'YOUR_API_KEY_HERE'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`; // Using metric units for temperature in Celsius

    const xhr = new XMLHttpRequest();
    
    xhr.open('GET', url, true);
    
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            const data = JSON.parse(xhr.responseText);
            console.log(`Current weather in ${data.name}:`);
            console.log(`Temperature: ${data.main.temp}°C`);
            console.log(`Weather: ${data.weather[0].description}`);
        } else {
            console.error('Failed to fetch weather data. Status:', xhr.status);
        }
    };

    xhr.onerror = function() {
        console.error('Request failed');
    };
    
    xhr.send();
}

getWeatherData('London'); 