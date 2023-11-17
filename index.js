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

