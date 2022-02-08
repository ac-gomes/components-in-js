
const createElement = (elementType) => {
  let newElement = document.createElement(elementType);
  return newElement
};

const insertStyle = (element, color, hasBgColor = false) => {
  if (hasBgColor != false){
    element.style.backgroundColor = color
  }
  if (color != false){
    element.style.borderColor = color
  }
};

const elementContent = (element, content) => {
  if (content){
    element.innerHTML= content
  }
};

const Tools = {
  createElement,
  insertStyle,
  elementContent,
};

export default Tools;