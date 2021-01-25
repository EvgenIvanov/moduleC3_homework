// **
// задание 4
// **

function Device(type, power) {
  this.type = type;
  this.power = power;
  this.state = false;
}

Device.prototype.isOn = function () {
  console.log(`Power is ${this.state ? "on" : "off"}`);
};

Device.prototype.toggleSwitch = function (action = undefined) {
  if (action === undefined) {
    this.state = !this.state;
  } else {
    if (action.toLowerCase() === "on") {
      action = true;
    } else if (action.toLowerCase() === "off") {
      action = false;
    }
    this.state = action;
  }
  this.isOn();
};
function Lamp(
  type,
  power,
  ledWatt,
  flowOfLight,
  colorTemperature,
  fnSmart = false
) {
  this.type = type;
  this.power = power;
  this.ledWatt = ledWatt || 8;
  this.flowOfLight = flowOfLight || 700;
  this.colorTemperature = colorTemperature || 2700;
  this.hasFnSmart = fnSmart;
}
Lamp.prototype = new Device();

Lamp.prototype.getLedWatt = function () {
  console.log(`Led ${this.ledWatt} Watt`);
};
Lamp.prototype.changeColor = function () {
  if (this.hasFnSmart) {
    let ledColor = ["red", "blue", "yellow", "white"];
    console.log(
      `Turned on ${
        ledColor[Math.floor(Math.random() * Math.floor(ledColor.length))]
      }`
    );
  } else {
    console.log("I have no such function");
  }
};

function Refrigerator(
  type,
  power,
  width,
  depth,
  height,
  config,
  energyClass,
  hasDelivery = false
) {
  this.type,
    this.power,
    (this.width = width),
    (this.depth = depth),
    (this.height = height),
    (this.config = config),
    (this.energyClass = energyClass),
    (this.hasDelivery = hasDelivery);
}
Refrigerator.prototype = new Device();

Refrigerator.prototype.getConfig = function () {
  console.log(
    `Refrigerator width ${this.width}cm, depth ${this.depth}cm, height ${this.height}cm\nConfiguration: ${this.config}, Energy class: ${this.energyClass}`
  );
};
Refrigerator.prototype.orderFoodDelivery = function () {
  if (this.hasDelivery) {
    console.log("I ordered food that was not in the fridge");
  } else {
    console.log("I have no such function");
  }
};

const lamp = new Lamp("lamp", 80, 10, 1000, 2700);
const philips_led = new Lamp("lamp", 60, 7, 700, 2700, true);

const fridgeLG = new Refrigerator(
  "fridge",
  500,
  60,
  60,
  200,
  "Top mount, two doors ",
  "A++"
);
const fridgeMiele = new Refrigerator(
  "fridge",
  400,
  100,
  60,
  200,
  "Super Frost, Side-by-Side, Wi-Fi",
  "A",
  true
);
