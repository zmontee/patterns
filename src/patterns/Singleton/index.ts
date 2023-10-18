  let instance;
  let counter = 0;

  class Counter {
    constructor() {
      if (instance) {
        throw new Error('Cannot create more than one instance of Counter');
      }
      instance = this;
    }

    getInstance() {
      return this;
    }

    getCount() {
      return counter;
    }

    increment() {
      return ++counter;
    }

    decrement() {
      return --counter;
    }
  }

  // const counter1 = new Counter();
  // const counter2 = new Counter();
// Error: Cannot create more than one instance of Counter

const singletonCounter = Object.freeze(new Counter());

  console.log(singletonCounter);
export default singletonCounter;