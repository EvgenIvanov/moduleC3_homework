// **
// задание 5
// **

class Device {
  constructor(type, power) {
    (this.type = type), (this.power = power), (this.state = false);
  }
  isOn() {
    console.log(`Power is ${this.state ? "on" : "off"}`);
  }
  toggleSwitch(action = undefined) {
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
  }
}

// const dev = new Device("istype", "ispower", "isstate");

class Lamp extends Device {
  constructor(
    type,
    power,
    ledWatt,
    flowOfLight,
    colorTemperature,
    fnSmart = false
  ) {
    super(type, power),
      (this.ledWatt = ledWatt || 8),
      (this.flowOfLight = flowOfLight || 700),
      (this.colorTemperature = colorTemperature || 2700),
      (this.hasFnSmart = fnSmart);
  }
  getLedWatt() {
    console.log(`Led ${this.ledWatt} Watt`);
  }
  changeColor() {
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
  }
}

class Refrigerator extends Device {
  constructor(
    type,
    power,
    width,
    depth,
    height,
    config,
    energyClass,
    hasDelivery = false
  ) {
    super(type, power),
      (this.width = width),
      (this.depth = depth),
      (this.height = height),
      (this.config = config),
      (this.energyClass = energyClass),
      (this.hasDelivery = hasDelivery);
  }
  getConfig() {
    console.log(
      `Refrigerator width ${this.width}cm, depth ${this.depth}cm, height ${this.height}cm\nConfiguration: ${this.config}, Energy class: ${this.energyClass}`
    );
  }
  orderFoodDelivery() {
    if (this.hasDelivery) {
      console.log("I ordered food that was not in the fridge");
    } else {
      console.log("I have no such function");
    }
  }
}

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
