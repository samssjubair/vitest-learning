export function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero");
  }
  return a / b;
}

export function executeCallback(callback, taskText) {
  callback(taskText);
}

function myCallback(taskText) {
  console.log(`Task: ${taskText}`);
}

executeCallback(myCallback, "Buy groceries");

export function fetchData() {
  return new Promise((resolve, reject) => {
    // Simulate an async operation (e.g., fetching data from an API)
    setTimeout(() => {
      const data = { name: "John", age: 30 };
      resolve(data);
    }, 1000); // Simulate a 1-second delay
  });
}

export const fetchWithError = (key) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (key) {
        resolve(key);
      } else {
        reject(new Error("Error"));
      }
    }, 1000);
  });
};
