import { IPointerEvent } from './i-pointer-event';

export class ITouchUpEvent extends IPointerEvent {

  constructor(event: TouchEvent) {
    super(event);
  }

  public isMouseLeftButton(): boolean {
    return true;
  }

  public isMouseRightButton(): boolean {
    return false;
  }

  public getPosition(): { x: number, y: number } {
    return { x: (this.originalEvent as TouchEvent).changedTouches[ 0 ].clientX, y: (this.originalEvent as TouchEvent).changedTouches[ 0 ].clientY };
  }
}
