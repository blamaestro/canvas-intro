class MouseController {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  updatePosition = mouseEvent => {
    this.x = mouseEvent.x;
    this.y = mouseEvent.y;
  }
}

export const mouse = new MouseController();
