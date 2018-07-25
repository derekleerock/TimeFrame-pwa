export function setInputText(component, inputName, inputText) {
  const input = component.findWhere(element => {
    if (element.name() === 'input' && element.props().name === inputName) {
      return element
    }
  })

  const enteredNameEvent = {
    target: {
      name: inputName,
      value: inputText,
    }
  }

  input.simulate('change', enteredNameEvent)
}

export function clickButton(component, searchText) {
  const button = component.findWhere(element => {
    if (element.name() === 'button' && element.props().children === searchText) {
      return element
    }
  })

  button.simulate('click')
}
