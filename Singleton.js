// Declare a Class
// Create a Static Property    │ (Holds the Single Instance)
// Make Constructor Private (Optional)││ Prevents Direct Instantiation (`new`)
// Create a Static `getInstance()` ││ - Checks if instance exists
// ││ - If not, creates one ││ - Returns the single instance
// Use `getInstance()` Instead of `new`

// class Singleton {
//   static instance;
//   constructor() {}

//   static getInstance() {
//     if (!Singleton.instance) {
//       Singleton.instance = new Singleton();
//     }
//     return Singleton.instance;
//   }

//   logMessage() {
//     console.log("Hello from Singleton!");
//   }
// }
// const singleton1 = Singleton.getInstance();
// const singleton2 = Singleton.getInstance();

class Singleton {
  static instance;
  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = this;
    }
    return Singleton.instance;
  }
}

const singleton1 = new Singleton();
const singleton2 = new Singleton();
console.log(singleton1 === singleton2);
