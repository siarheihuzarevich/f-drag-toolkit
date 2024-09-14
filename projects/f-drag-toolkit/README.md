# Foblex Drag Toolkit

A TypeScript library providing foundational classes and utilities for implementing drag-and-drop functionality in Angular applications, with support for both mouse and touch events, and designed to work with or without Angular’s NgZone (zoneless applications).
Used in [Foblex Flow](https://flow.foblex.com) for drag-and-drop operations.

## Overview

Foblex Drag Toolkit simplifies the implementation of drag-and-drop interactions in Angular applications by providing:

- **Unified Pointer Events**: Abstract classes for handling mouse and touch events uniformly.
- **Drag-and-Drop Base Class**: An abstract base class DragAndDropBase encapsulating common logic for drag-and-drop operations.
- **Event Utilities**: Helper functions and classes for event handling, including support for passive event listeners.
- **Angular Zone Compatibility**: Designed to work with or without Angular’s NgZone, making it suitable for zoneless applications.

By extending the DragAndDropBase class and implementing its abstract methods, developers can create custom drag-and-drop components with consistent behavior across different input types.

## Installation

Install the library via npm:

```bash
  npm install @foblex/drag-toolkit
```
## Usage

### Creating a Custom Drag-and-Drop Component

Extend the DragAndDropBase class and implement the abstract methods:

```typescript
import { Component, ElementRef } from '@angular/core';
import {
  DragAndDropBase,
  IPointerEvent,
  ICanRunOutsideAngular,
} from '@foblex/drag-toolkit';

@Component({
  selector: 'app-draggable',
  template: `<div #draggableElement>Drag Me!</div>`,
})
export class DraggableComponent extends DragAndDropBase {
  public hostElement: HTMLElement;
  public disabled = false;

  constructor(
    private elementRef: ElementRef,
    ngZone: ICanRunOutsideAngular
  ) {
    super(ngZone);
    this.hostElement = this.elementRef.nativeElement;
  }

  protected prepareDragSequence(event: IPointerEvent): void {
    // Initialize drag operation
  }

  protected finalizeDragSequence(): void {
    // Clean up after drag operation
  }

  protected onSelect(event: Event): void {
    // Handle text selection during drag
    event.preventDefault();
  }

  public onPointerDown(event: IPointerEvent): boolean {
    // Determine if drag should start
    return true;
  }

  public onPointerMove(event: IPointerEvent): void {
    // Handle dragging movement
  }

  public onPointerUp(event: IPointerEvent): void {
    // Handle drag completion
  }
}
```

### Subscribing to Events

Ensure that you call subscribe and unsubscribe methods appropriately, typically in ngOnInit and ngOnDestroy:

```typescript
import { AfterViewInit, OnDestroy } from '@angular/core';

export class DraggableComponent
  extends DragAndDropBase
  implements AfterViewInit, OnDestroy
{
  // ... (other code)

  ngAfterViewInit(): void {
    this.subscribe(document);
  }

  ngOnDestroy(): void {
    this.unsubscribe();
  }
}
```

## Error Handling

- Synthetic Events: The library checks for synthetic mouse events triggered after touch events to prevent duplicate actions.
- Screen Reader Compatibility: Functions like isFakeMousedownFromScreenReader and isFakeTouchstartFromScreenReader are used to ignore events from screen readers, enhancing accessibility.


## License

This project is licensed under the MIT License.

By using the Foblex Drag Toolkit, you can simplify the implementation of complex drag-and-drop interactions in your Angular applications, ensuring consistent behavior across different devices and input types.
