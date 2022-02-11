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
  Icon('i', className.icon, colors.White,Functions.Push),
);

Card(
  app,
  className,
  'Array - pop()',
  colors.BlueViolet,
  Functions.Pop,
  Icon('i', className.icon, colors.White,Functions.Pop)
)

Card(
  app,
  className,
  'Array - shift()',
  colors.Orange,
  Functions.Shift,
  Icon('i', className.icon, colors.LightGray,Functions.Shift)
)

Card(
  app,
  className,
  'Array - filter()',
  colors.Salmon,
  Functions.Filter,
  Icon('i', className.icon, colors.LightGray,Functions.Filter)
)

Card(
  app,
  className,
  'Array - Map()',
  colors.DarkCyan,
  Functions.Map,
  Icon('i', className.icon, colors.LightGray,Functions.Map)
)

Card(
  app,
  className,
  'Array - find()',
  colors.Brown,
  Functions.Find,
  Icon('i', className.icon, colors.LightGray,Functions.Find)
)

Card(
  app,
  className,
  'Array - indexOf()',
  colors.Blue,
  Functions.IndexOf,
  Icon('i', className.icon, colors.LightGray,Functions.IndexOf)
)

Card(
  app,
  className,
  'Array - every()',
  colors.Gold,
  Functions.Every,
  Icon('i', className.icon, colors.SeaGreen,Functions.Every)
)

Card(
  app,
  className,
  'Array - includes()',
  colors.Red,
  Functions.Includes,
  Icon('i', className.icon, colors.Gold,Functions.Includes)
)

Card(
  app,
  className,
  'Array - some()',
  colors.BlueViolet,
  Functions.Some,
  Icon('i', className.icon, colors.White,Functions.Some)
)

// console.log(app.childNodes)
// console.log(app.childNodes)

//Link do app: http://172.18.10.31:5500/