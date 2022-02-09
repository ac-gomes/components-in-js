import Tools from "../helper/tools.js";
import doc from "../data/documentation.js";

const Icon = (label, className, color, link) => {
  let icon = Tools.createElement('span')
  let functionDoc = Tools.createElement('a')

  functionDoc.href = doc.push
  functionDoc.target="_blank"
  functionDoc.title = "Documentation"
  functionDoc.rel="noopener noreferrer"
  Tools.elementContent(functionDoc, label)
  icon.appendChild(functionDoc)

  icon.className = className
  Tools.insertStyle(icon, color,true)

  return icon
}



export default Icon;