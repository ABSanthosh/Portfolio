export enum NekoSizeVariations {
  SMALL = 32,
  MEDIUM = 38,
  LARGE = 42,
}

enum NekoOffset {
  SMALL = 3,
  MEDIUM = -2,
  LARGE = -6,
}

export type NekoStorage = {
  isShown: boolean;
  size: NekoSizeVariations;
};

export class Neko {
  public size: number = NekoSizeVariations.SMALL;
  public isAwake: boolean = true;

  private nekoEl: HTMLDivElement | undefined;
  private nekoId: number = 0;
  private nekoPosX: number = this.size / 2;
  private nekoPosY: number = this.size / 2;
  private mousePosX: number = this.size / 2;
  private mousePosY: number = this.size / 2;
  private isReduced: boolean = window.matchMedia(
    `(prefers-reduced-motion: reduce)`
  ).matches;
  private mouseMoveController = new AbortController();
  private touchController = new AbortController();

  private frameCount: number = 0;
  private idleTime: number = 0;
  private idleAnimation: string | null = null;
  private idleAnimationFrame: number = 0;
  private nekoSpeed: number = 10;

  private distanceFromMouse: number = 25;
  private header: HTMLDivElement | null = null;
  private isAudioPlaying: boolean = false;

  private spriteSets: {
    [key: string]: number[][];
  } = {
    idle: [[-3, -3]],
    alert: [[-7, -3]],
    scratchSelf: [
      [-5, 0],
      [-6, 0],
      [-7, 0],
    ],
    scratchWallN: [
      [0, 0],
      [0, -1],
    ],
    scratchWallS: [
      [-7, -1],
      [-6, -2],
    ],
    scratchWallE: [
      [-2, -2],
      [-2, -3],
    ],
    scratchWallW: [
      [-4, 0],
      [-4, -1],
    ],
    tired: [[-3, -2]],
    sleeping: [
      [-2, 0],
      [-2, -1],
    ],
    N: [
      [-1, -2],
      [-1, -3],
    ],
    NE: [
      [0, -2],
      [0, -3],
    ],
    E: [
      [-3, 0],
      [-3, -1],
    ],
    SE: [
      [-5, -1],
      [-5, -2],
    ],
    S: [
      [-6, -3],
      [-7, -2],
    ],
    SW: [
      [-5, -3],
      [-6, -1],
    ],
    W: [
      [-4, -2],
      [-4, -3],
    ],
    NW: [
      [-1, 0],
      [-1, -1],
    ],
  };

  constructor(nekoId?: number | null, nekoSize?: NekoSizeVariations | null) {
    // get element with attribute data-neko
    const isNekoAlive = document.querySelector("[data-neko]") as HTMLDivElement;
    if (this.isReduced || isNekoAlive) {
      return;
    }
    this.size = nekoSize ? nekoSize : NekoSizeVariations.SMALL;
    this.nekoId = nekoId ? nekoId : this.nekoId;
    this.create();
  }

  private getRestingCoords() {
    return {
      x: this.header!.offsetLeft + this.header!.offsetWidth + 20,
      y: this.header!.offsetTop + this.header!.offsetHeight,
    };
  }

  private getOffset(size: NekoSizeVariations) {
    switch (size) {
      case NekoSizeVariations.SMALL:
        return NekoOffset.SMALL;
      case NekoSizeVariations.MEDIUM:
        return NekoOffset.MEDIUM;
      case NekoSizeVariations.LARGE:
        return NekoOffset.LARGE;
    }
  }

  private create() {
    this.header = document.getElementById("headerName") as HTMLDivElement;
    const restCoords = this.getRestingCoords();
    this.nekoPosX = restCoords.x + 10;
    this.nekoPosY = restCoords.y + this.getOffset(this.size);
    this.mousePosX = this.nekoPosX;
    this.mousePosY = this.nekoPosY;

    this.nekoEl = document.createElement("div");
    this.nekoEl.dataset.neko = `${this.nekoId}`;
    this.nekoEl.id = `neko-${this.nekoId}`;
    this.nekoEl.style.width = `${this.size}px`;
    this.nekoEl.style.height = `${this.size}px`;
    this.nekoEl.style.left = `${this.nekoPosX - this.size / 2}px`;
    this.nekoEl.style.top = `${this.nekoPosY - this.size / 2}px`;

    // this.nekoEl.addEventListener("click", () => {
    //   if (this.isAudioPlaying) return;
    //   this.isAudioPlaying = true;
    //   new Audio("/assets/audio/meow1.mp3").play().then(() => {
    //     setTimeout(() => {
    //       this.isAudioPlaying = false;
    //     }, 1000);
    //   });
    // });

    document.getElementById("app")!.appendChild(this.nekoEl);

    document.addEventListener(
      "mousemove",
      (event: MouseEvent) => {
        this.mousePosX = event.clientX;
        this.mousePosY = event.clientY;
      },
      { signal: this.mouseMoveController.signal }
    );
    document.addEventListener(
      "touchmove",
      (event: TouchEvent) => {
        this.mousePosX = event.touches[0].clientX;
        this.mousePosY = event.touches[0].clientY;
      },
      { signal: this.touchController.signal }
    );

    (window as any).nekoInterval = setInterval(this.frame.bind(this), 60);
  }

  private setSprite(name: string, frame: number) {
    const sprite = this.spriteSets[name][frame % this.spriteSets[name].length];
    this.nekoEl!.style.backgroundPosition = `${sprite[0] * this.size}px ${
      sprite[1] * this.size
    }px`;
  }

  private resetIdleAnimation() {
    this.idleAnimation = null;
    this.idleAnimationFrame = 0;
  }

  private idle() {
    this.idleTime += 1;

    // every ~20 seconds
    if (
      this.idleTime > 5 &&
      Math.floor(Math.random() * 100) == 0 &&
      this.idleAnimation == null
    ) {
      let availableIdleAnimations = ["sleeping", "scratchSelf"];
      if (this.nekoPosX < 32) {
        availableIdleAnimations.push("scratchWallW");
      }
      if (this.nekoPosY < 32) {
        availableIdleAnimations.push("scratchWallN");
      }
      if (this.nekoPosX > window.innerWidth - 32) {
        availableIdleAnimations.push("scratchWallE");
      }
      if (this.nekoPosY > window.innerHeight - 32) {
        availableIdleAnimations.push("scratchWallS");
      }
      this.idleAnimation =
        availableIdleAnimations[
          Math.floor(Math.random() * availableIdleAnimations.length)
        ];
    }

    switch (this.idleAnimation) {
      case "sleeping":
        if (this.idleAnimationFrame < 8) {
          this.setSprite("tired", 0);
          break;
        }
        this.setSprite("sleeping", Math.floor(this.idleAnimationFrame / 4));
        if (this.idleAnimationFrame > 192) {
          this.resetIdleAnimation();
        }
        break;
      case "scratchWallN":
      case "scratchWallS":
      case "scratchWallE":
      case "scratchWallW":
      case "scratchSelf":
        this.setSprite(this.idleAnimation, this.idleAnimationFrame);
        if (this.idleAnimationFrame > 9) {
          this.resetIdleAnimation();
        }
        break;
      default:
        this.setSprite("idle", 0);
        return;
    }
    this.idleAnimationFrame += 1;
  }

  private frame() {
    this.frameCount += 1;
    const diffX = this.nekoPosX - this.mousePosX;
    const diffY = this.nekoPosY - this.mousePosY;
    const distance = Math.sqrt(diffX ** 2 + diffY ** 2);

    if (distance < this.nekoSpeed || distance < this.distanceFromMouse) {
      this.idle();
      return;
    }

    this.idleAnimation = null;
    this.idleAnimationFrame = 0;

    if (this.idleTime > 1) {
      this.setSprite("alert", 0);
      // count down after being alerted before moving
      this.idleTime = Math.min(this.idleTime, 7);
      this.idleTime -= 1;
      return;
    }

    let direction;
    direction = diffY / distance > 0.5 ? "N" : "";
    direction += diffY / distance < -0.5 ? "S" : "";
    direction += diffX / distance > 0.5 ? "W" : "";
    direction += diffX / distance < -0.5 ? "E" : "";
    this.setSprite(direction, this.frameCount);

    this.nekoPosX -= (diffX / distance) * this.nekoSpeed;
    this.nekoPosY -= (diffY / distance) * this.nekoSpeed;

    this.nekoPosX = Math.min(
      Math.max(this.size / 2, this.nekoPosX),
      window.innerWidth - this.size / 2
    );
    this.nekoPosY = Math.min(
      Math.max(this.size / 2, this.nekoPosY),
      window.innerHeight - this.size / 2
    );

    this.nekoEl!.style.left = `${this.nekoPosX - this.size / 2}px`;
    this.nekoEl!.style.top = `${this.nekoPosY - this.size / 2}px`;
  }

  public destroy() {
    this.nekoEl!.remove();
    clearInterval((window as any).nekoInterval);
  }

  public sleep() {
    if (!this.isAwake) return;

    this.mouseMoveController.abort();
    this.touchController.abort();

    this.header = document.getElementById("headerName") as HTMLDivElement;
    const restCoords = this.getRestingCoords();
    this.mousePosX = restCoords.x;
    this.mousePosY = restCoords.y - 15;

    this.isAwake = false;
  }

  public wake() {
    if (this.isAwake) return;

    this.mouseMoveController = new AbortController();
    this.touchController = new AbortController();

    document.addEventListener(
      "mousemove",
      (event: MouseEvent) => {
        this.mousePosX = event.clientX;
        this.mousePosY = event.clientY;
      },
      { signal: this.mouseMoveController.signal }
    );
    document.addEventListener(
      "touchmove",
      (event: TouchEvent) => {
        this.mousePosX = event.touches[0].clientX;
        this.mousePosY = event.touches[0].clientY;
      },
      { signal: this.touchController.signal }
    );

    this.isAwake = true;
  }

  public setSize(size: NekoSizeVariations) {
    this.size = size;
    this.nekoEl!.style.width = `${this.size}px`;
    this.nekoEl!.style.height = `${this.size}px`;
  }
}
