function handleHello() {
  console.log("Hello, world!");
}

function init() {
  app.commands.register("hello-world:hello", handleHello, "Hello World");
}

exports.init = init;
