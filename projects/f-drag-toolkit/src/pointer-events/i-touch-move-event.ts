import { IPointerEvent } from './i-pointer-event';

export class ITouchMoveEvent extends IPointerEvent {

  constructor(event: TouchEvent, target?: HTMLElement) {
    super(event, target);
  }

  public isMouseLeftButton(): boolean {
    return true;
  }

  public isMouseRightButton(): boolean {
    return false;
  }

  public getPosition(): { x: number, y: number } {
    return { x: (this.originalEvent as TouchEvent).targetTouches[ 0 ].clientX, y: (this.originalEvent as TouchEvent).targetTouches[ 0 ].clientY };
  }
}
