import { nekoStateMachine } from "./state";

const imageNames = [
  "awake.png",
  "dtogi1.png",
  "dwleft2.png",
  "jare2.png",
  "left1.png",
  "ltogi2.png",
  "right1.png",
  "rtogi2.png",
  "up1.png",
  "upleft2.png",
  "utogi1.png",
  "down1.png",
  "dtogi2.png",
  "dwright1.png",
  "kaki1.png",
  "left2.png",
  "mati2.png",
  "right2.png",
  "sleep1.png",
  "up2.png",
  "upright1.png",
  "utogi2.png",
  "down2.png",
  "dwleft1.png",
  "dwright2.png",
  "kaki2.png",
  "ltogi1.png",
  "mati3.png",
  "rtogi1.png",
  "sleep2.png",
  "upleft1.png",
  "upright2.png",
];
const images = Object.fromEntries(
  imageNames.map((name) => {
    const image = new Image(64, 64);
    image.src = "/assets/neko/" + name + ".png";
    return [name, image];
  })
);

interface INeko {
  elem: HTMLDivElement;
  stateMachine: typeof nekoStateMachine;
  imageElement: HTMLImageElement;
}

export class Neko {
  nekoSize = 64;
  elem: INeko["elem"];
  stateMachine: INeko["stateMachine"];
  imageElement: INeko["imageElement"];
  onMouseMove: (e: MouseEvent) => void;

  currentState: null | string | string[] = null;
  nextStateTimeOut: null | any = null;
  imageCycleTimeOut: null | any = null;
  animationIndex: number = 0;

  goto = {
    x: 0,
    y: 0,
  };

  constructor(elem: INeko["elem"]) {
    this.elem = elem;
    this.stateMachine = nekoStateMachine;
    this.imageElement = new Image(this.nekoSize, this.nekoSize);
    this.elem.appendChild(this.imageElement);
    this.imageElement.addEventListener("click", () => this.onClick());
    this.onMouseMove = (e: MouseEvent) => {
      const [x, y] = [e.clientX, e.clientY];
    };
  }

  render() {
    // @ts-ignore
    let name = this.stateMachine[this.currentState!].image;
    this.animationIndex++;
    if (Array.isArray(name)) {
      name = name[this.animationIndex % name.length];
    }
    this.imageElement.src = images[name].src;
  }

  setState(stateName: string | string[]) {
    clearTimeout(this.nextStateTimeOut!);
    clearTimeout(this.imageCycleTimeOut!);

    if (Array.isArray(stateName)) {
      stateName = stateName[Math.floor(Math.random() * stateName.length)];
    }
    // @ts-ignore
    if (!this.stateMachine[stateName]) {
      throw new Error(`Invalid state name: ${stateName}`);
    }

    this.currentState = stateName;
    // @ts-ignore
    const stateData = this.stateMachine[stateName];
    if (stateData.nextState) {
      this.nextStateTimeOut = setTimeout(() => {
        this.setState(stateData.nextState);
      }, stateData.nextStateDelay * 1000);
    }
    if (stateData.imageInterval) {
      this.imageCycleTimeOut = setTimeout(() => {
        this.setState(stateData.image);
      }, stateData.imageInterval * 1000);
    }
    this.render();
  }

  onClick() {}
}
