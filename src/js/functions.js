
import arrays from "../data/array.js"
import objetos from "../data/objeto.js"

const Push = () => {
  let numbers = [0,1,2,3]
  numbers.push(4,5)
  return numbers
};

const Pop = () => {
  let numbers = [0,1,2,3]
  numbers.pop()
  return numbers
};

const Shift = () => {
  let numbers = [0,1,2,3]
  numbers.shift()
  return numbers
};

const Filter = () => {
  let numbers = [0,1,2,3]
  let filtered = numbers.filter(
    item => item >= 2
  )
  return filtered
};

const ForEach = () => {
  let myArray = [0,1,true,false,'a']
  myArray.forEach( item => {
    if (typeof item == 'number'){
     return item += item
    }
  })
};

const Map = () => {
  let myArray = [0,1,true,false,'a']
  let newArray = myArray.map(item => {
    if(typeof item == "boolean"){
      return item
    }
  }).filter(item => item != null)
  return newArray
};

const Functions = {
  Push,
  Pop,
  Shift,
  Filter,
  ForEach,
  Map,
}
export default Functions;