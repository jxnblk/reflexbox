const flex = ({
  flex,
  wrap,
  align,
  justify,
  ...rest
}) => {
  const css = {}
  if (flex) css['display'] = 'flex'
  if (wrap) css['flex-wrap'] = 'wrap'
  if (align) css['align-items'] = align
  if (justify) css['justify-content'] = justify

  rest.css = { ...rest.css, ...css }

  return rest
}

export default flex
