// todo: make node version
const style = document.createElement('style')
style.id = 'reflexbox'
style.type = 'text/css'
document.head.appendChild(style)

const sheet = style.sheet

sheet.insert = css => css.map(rule => {
  const l = sheet.cssRules.length
  sheet.insertRule(rule, l)
})

export default sheet
