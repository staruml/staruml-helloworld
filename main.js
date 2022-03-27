function handleShowMessage() {
  window.alert("Hello, world!");
}

function init() {
  app.commands.register(
    "helloworld:show-message",
    handleShowMessage,
    "Show Message"
  );
}

exports.init = init;
