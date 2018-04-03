function handleShowMessage () {
  window.alert('Hello, world!')
}

function init () {
  app.commands.register('helloworld:show-message', handleShowMessage)
}

exports.init = init
