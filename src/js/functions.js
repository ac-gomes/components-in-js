
import arrays from "../data/array.js"
import objetos from "../data/object.js"

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

const Find = () => {
  let myArray = [0,1,2,3]
  const found = myArray.find(
    item => item > 1
  )
  return found
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

const IndexOf = () => {
  let myArray = [0,1,true,false,'a']
  const index = myArray.indexOf(true)
  return index
};

const Every = () => {
  let myArray = [0,1,2,3]
  const trueOrFalse = myArray.every(
    item => item > 2
  )
  return trueOrFalse
};

const Some = () => {
  let myArray = [0,1,2,3]
  const trueOrFalse = myArray.some(
    item => item > 2)
  return trueOrFalse
};

const Includes = () => {
  let array = ['Tio','Pai','Mãe']
  const trueOrFalse = array.includes('Pai')
  return trueOrFalse
};

const Functions = {
  Push,
  Pop,
  Shift,
  Filter,
  Find,
  Map,
  IndexOf,
  Every,
  Includes,
  Some,
}
export default Functions;