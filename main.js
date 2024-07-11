const array = [2, 4, 9, 10, 45, 67, 8, 90]
const arr = []
for(let i = 0; i < array.length ;i++){
    if(array[i] % 2 == 0){
       arr.push(array[i]) 
    }
}
console.log(array, 'boshlanishta array');
console.log(arr, 'juft sonlarga ajratilgan array');
