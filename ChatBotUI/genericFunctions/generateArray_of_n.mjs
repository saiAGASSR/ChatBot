const random_array_generator = (n) => 
    Array.from({ length: n }, () => Math.floor(Math.random() * 10));


const array_sum = (array) => array.reduce((sum, currValue) => sum + currValue, 0);

// const winCondition = (array) => {
//     return array.every((value)=> value === array[0] )
// };

const winCondition = (array) => {
    return array.length > 0 && array[0] === 1;
};
export { random_array_generator, array_sum , winCondition };


random_array_generator(5)
console.log("random_array_generator ==> ", random_array_generator(5));