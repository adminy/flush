const $ = id => document.getElementById(id),
   $is= id => typeof($(id)) != 'undefined' && $(id) !== null,
   $rm = id => {if($is(id)){return $(id).parentNode.removeChild($(id))}},
   $scrollBottom = id => $(id).scrollTop = $(id).scrollHeight,
   randomColour = () => "#"+((1<<24)*Math.random()|0).toString(16),
   $genRand = (min, max, decimalPlaces) => {
      const rand = Math.random()*(max-min) + min
      const power = Math.pow(10, decimalPlaces)
      return Math.floor(rand*power) / power
   },
   $randFromArray = array => array[Math.floor(Math.random()*array.length)],
   appendElement = (where, elementName, props) => {
      const element = document.createElement(elementName)
      where.appendChild(element)
      let html5Attr = new Set(['src', 'value', 'id', 'class', 'type', 'placeholder', 'checked', 'multiple', 'selected', 'disabled'])
      let html5Events = new Set(['onclick', 'onkeypress', 'onkeydown', 'onkeyup'])
      if(props)
         for(const propName in props)
            if(propName == 'text')
               element.appendChild(document.createTextNode(props.text))
            else if(html5Attr.has(propName))
               element.setAttribute(propName, props[propName])
            else if(html5Events.has(propName))
               element[propName] = props[propName]
            else if(propName == 'child') {
               const elementName = Object.keys(props[propName])[0]
               const elementProps = Object.values(props[propName])[0]
               appendElement(element, elementName, elementProps)
            } else if(propName == 'children') {
               for(const child of props.children) {
                  const elementName = Object.keys(child)[0]
                  const elementProps = Object.values(child)[0]
                  appendElement(element, elementName, elementProps)
               }
            }
            else
                 element.style[propName] = props[propName]
         element.style.minWidth = element.style.width
         element.style.maxWidth = element.style.width
      return element
   },
   style = appendElement(document.head, 'style', {}),
   css = (tagName, tagStyle) => {
      style.innerHTML += tagName + "{"
      for(const prop in tagStyle)
         style.innerHTML += prop + ':' + tagStyle[prop] + ';'
      style.innerHTML += "}"
   },
   blackOrWhite = colour => {
		if (colour.indexOf('#') === 0)
			colour = colour.slice(1)
		if (colour.length === 3)
			colour = colour[0] + colour[0] + colour[1] + colour[1] + colour[2] + colour[2];
		if (colour.length !== 6)
			throw new Error('Invalid colour color.');
		var r = parseInt(colour.slice(0, 2), 16),
			g = parseInt(colour.slice(2, 4), 16),
			b = parseInt(colour.slice(4, 6), 16);
		return (r * 0.299 + g * 0.587 + b * 0.114) > 186 ? '#000000' : '#FFFFFF'
	},
   FRIENDLY_COLOURS = ['#41B3A3', '#C38D9E', '#E8A87C', '#85DCB0', '#E27D60', '#659DBD', '#DAAD86', '#FBEEC1', '#5CDB95', '#97CAEF', '#AFD275'],
   BR = {br: {}},
   encoder = new TextEncoder(),
   decoder = new TextDecoder('utf-8')