import Tools from "../helper/tools.js"

const Card = (app, className, cardTitle, color, fn, component) => {
  let {classNameCard, classNameTitleBar, classNameCodeArea, fResult} = className
  let newCard = Tools.createElement("div")
  let titleBar = Tools.createElement("div")
  let codeArea = Tools.createElement("pre")
  let functionResult = Tools.createElement("span")

  newCard.className = classNameCard
  Tools.insertStyle(newCard, color)

  titleBar.className = classNameTitleBar
  Tools.insertStyle(titleBar, color, true)
  Tools.elementContent(titleBar,`<h1>${cardTitle}</h1>`)

  codeArea.className = classNameCodeArea
  Tools.elementContent(codeArea, fn)
  functionResult.className = fResult
  Tools.elementContent(functionResult, `Result: ${fn()}`)

  if(component){
    titleBar.appendChild(component)
  }
  newCard.appendChild(titleBar)
  newCard.appendChild(codeArea)
  newCard.appendChild(functionResult)
  app.appendChild(newCard)

};

export default Card;