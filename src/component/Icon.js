import Tools from "../helper/tools.js";

const Icon = (label, className, color) => {
  let icon = Tools.createElement('span')
  icon.className = className
  Tools.insertStyle(icon, color,true)
  Tools.elementContent(icon, label)
  return icon
}

export default Icon;