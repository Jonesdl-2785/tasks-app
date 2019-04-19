export class Task {
  id: number;
  title: string = '';
  completed: boolean = false;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
