let btn = document.querySelector(".btn");
let root = document.querySelector("ul");
let bgColor = document.querySelector(".bg");
let input = document.querySelector(".text");
let cmdArr = [];

function handleEvent(event) {
  let num1 = getRandomNumber1();
  let num2 = getRandomNumber(allCommands);
  cmdArr = [
    {
      command: `${allCommands[num1].command}`,
      description: `${allCommands[num1].description}`,
    },
  ];
  console.log(getRandomNumber(), getRandomNumber1());

  cmdArr.push({
    command: `${allCommands[num2].command}`,
    description: `${allCommands[num2].description}`,
  });
  createUI(cmdArr);
}

function createUI(arr = cmdArr) {
  root.innerHTML = "";
  arr.forEach((elm) => {
    let li = document.createElement("li");

    let h3 = document.createElement("h3");
    h3.innerText = elm.command;
    let p = document.createElement("p");
    p.innerText = elm.description;

    li.append(h3, p);

    root.append(li);
  });
}

function getRandomNumber(arr = allCommands) {
  let len = arr.length;
  let num = Math.floor(Math.random() * 25);
  return num;
}
function getRandomNumber1() {
  let num = Math.floor(Math.random() * 25);
  return num;
}
function getRandomNumber2() {
  let num = Math.floor(Math.random() * 90);
  return num;
}

function changeBgColor(event) {
  document.body.style.background = allColors[getRandomNumber2()];
  console.log(allColors[getRandomNumber2()]);
}

function searchCommand(event) {
  let searchCommand = event.target.value;
  let filterdCommand = allCommands.filter((n) =>
    n.command.toLowerCase().includes(searchCommand.toLowerCase())
  );
  createUI(filterdCommand);
  console.log(filterdCommand);
}

btn.addEventListener("click", handleEvent);
bgColor.addEventListener("click", changeBgColor);
input.addEventListener("keyup", searchCommand);
