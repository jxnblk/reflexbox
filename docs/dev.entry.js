
const basic = document.createElement('link')
const bass = document.createElement('link')
const base = document.createElement('link')
const div = document.createElement('div')

basic.href = 'https://npmcdn.com/basscss-basic/index.css'
bass.href = 'https://npmcdn.com/basscss@8.0.0/css/basscss.min.css'
base.href = 'docs/base.css'

basic.rel = 'stylesheet'
bass.rel = 'stylesheet'
base.rel = 'stylesheet'

div.id = 'app'

document.head.appendChild(basic)
document.head.appendChild(bass)
document.head.appendChild(base)
document.body.appendChild(div)

