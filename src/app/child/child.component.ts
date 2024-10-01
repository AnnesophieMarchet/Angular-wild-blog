import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ParentComponent } from '../parent/parent.component';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [ParentComponent],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {
  // @Input() parentMessage: string = '';

  @Output() notifyParent: EventEmitter<string> = new EventEmitter<string>();

  sendNotification() {
    this.notifyParent.emit("Bonjour je viens de l' enfant ");
  }
}
