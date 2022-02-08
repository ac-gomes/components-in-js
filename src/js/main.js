const app = document.getElementById('app-id')

import Card from "../component/Cartd.js"
import Helper from "../helper/index.js"
import Functions from "./functions.js"
import Icon from "../component/Icon.js"
let {className, colors} = Helper


document.body.onload = Card(
  app,
  className,
  'Array - push()',
  colors.SeaGreen,
  Functions.Push,
  Functions.Push(),
  Icon('i',className.icon,colors.White)
);

Card(
  app,
  className,
  'Array - pop()',
  colors.BlueViolet,
  Functions.Pop,
  Functions.Pop(),
  Icon('i',className.icon,colors.White)
)

Card(
  app,
  className,
  'Array - shift()',
  colors.Orange,
  Functions.Shift,
  Functions.Shift()
)

Card(
  app,
  className,
  'Array - filter()',
  colors.Salmon,
  Functions.Filter,
  Functions.Filter()
)

Card(
  app,
  className,
  'Array - Map()',
  colors.DarkCyan,
  Functions.Map,
  Functions.Map()
)

// console.log(app.childNodes)
// console.log(app.childNodes)

//Link do app: http://172.18.10.31:5500/