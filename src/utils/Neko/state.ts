export const nekoStateMachine = {
  sleep: {
    image: ["sleep1", "sleep2"],
    imageInterval: 1,
    click: "awake",
  },
  awake: {
    image: "awake",
    nextState: "normal",
    nextStateDelay: 2.5,
  },
  normal: {
    image: "mati2",
    nextState: ["normal", "normal", "normal", "tilt", "scratch", "yawn"],
    nextStateDelay: 1.5,
  },
  tilt: {
    image: "jare2",
    nextState: "normal",
    nextStateDelay: 1,
  },
  yawn: {
    image: "mati3",
    nextState: ["normal", "normal", "sleep"],
    nextStateDelay: 1,
  },
  scratch: {
    image: ["kaki1", "kaki2"],
    imageInterval: 0.1,
    nextState: "normal",
    nextStateDelay: 3,
  },
  north: {
    image: ["up1", "up2"],
    imageInterval: 0.1,
    nextState: "normal",
    nextStateDelay: 1,
  },
  northEast: {
    image: ["upright1", "upright2"],
    imageInterval: 0.1,
    nextState: "normal",
    nextStateDelay: 1,
  },
  east: {
    image: ["right1", "right2"],
    imageInterval: 0.1,
    nextState: "normal",
    nextStateDelay: 1,
  },
  southEast: {
    image: ["dwright1", "dwright2"],
    imageInterval: 0.1,
    nextState: "normal",
    nextStateDelay: 1,
  },
  south: {
    image: ["down1", "down2"],
    imageInterval: 0.1,
    nextState: "normal",
    nextStateDelay: 1,
  },
  southWest: {
    image: ["dwleft1", "dwleft2"],
    imageInterval: 0.1,
    nextState: "normal",
    nextStateDelay: 1,
  },
  west: {
    image: ["left1", "left2"],
    imageInterval: 0.1,
    nextState: "normal",
    nextStateDelay: 1,
  },
  northWest: {
    image: ["upleft1", "upleft2"],
    imageInterval: 0.1,
    nextState: "normal",
    nextStateDelay: 1,
  },
};
