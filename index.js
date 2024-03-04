//? Task 1 start:

// const arr = [
//   { name: "Task 1", priority: "high", time: 30 },
//   { name: "Task 2", priority: "low", time: 20 },
//   { name: "Task 3", priority: "neutral", time: 40 },
// ];

// function addTask(task){
//     arr.push(task)
// }

// addTask({name: "Task 4", priority: "low", time: 10} )
// console.log(arr);

//? Task 1 end.

//? Task 2 start:

// const arr = [
//   { name: "Task 1", priority: "high", time: 30 },
//   { name: "Task 2", priority: "low", time: 20 },
//   { name: "Task 3", priority: "neutral", time: 40 },
//   { name: "Task 4", priority: "low", time: 10 },
// ];

// const complateTask = (index,count) => {
//   arr.splice(index,count)
// };
// complateTask(0,2)
// console.log(arr);

//? Task 2 end.

// ? Task 3 start:

// const arr = [
//   { name: "Task 1", priority: "high", time: 30 },
//   { name: "Task 2", priority: "low", time: 20 },
//   { name: "Task 3", priority: "neutral", time: 40 },
//   { name: "Task 4", priority: "low", time: 10 },
// ];

// const listTask = () => {
//   arr.forEach((task) => {
//     console.log(
//       `Name:${task.name}, Priority:${task.priority}, Time:${task.time}`
//     );
//   });
// };
// listTask();

// ? Task 3 end.

// ? Task  4 start:

// const arr = [
//   { name: "Task 1", priority: "high", time: 30 },
//   { name: "Task 2", priority: "low", time: 20 },
//   { name: "Task 3", priority: "neutral", time: 40 },
//   { name: "Task 4", priority: "high", time: 50 },
// ];

// const priorityTask = () => {
//   const highPriorityTasks = arr.filter((item) => {
//     return item.priority == "high";
//   });
//   console.log(highPriorityTasks);
// };
// priorityTask();

// ? Task  4 end.

// ? Task  5 start:

// const arr = [
//   { name: "Task 1", priority: "high", time: 30 },
//   { name: "Task 2", priority: "low", time: 20 },
//   { name: "Task 3", priority: "neutral", time: 40 },
//   { name: "Task 4", priority: "high", time: 50 },
// ];

// const totalTaskTime = () => {
//   const totaTime = arr.reduce((acc, item) => {
//     console.log(acc);
//     return acc + item.time;
//   }, 0);
//   return totaTime;
// };

// console.log(totalTaskTime());

// ? Task  5 end.

// ? Task  6 start:

// const arr = [
//   { name: "Task 1", priority: "high", time: 30 },
//   { name: "Task 2", priority: "low", time: 20 },
//   { name: "Task 3", priority: "neutral", time: 40 },
// ];
// const newTask = () => {
//   const newArray = arr.concat({ name: "Task 4", priority: "high", time: 50 });
//   return newArray;
// };
// console.log(newTask());

// ? Task  6 end.

// ? Task  7 start:

// const arr = [
//   { name: "Task 1", priority: "high", time: 30 },
//   { name: "Task 2", priority: "low", time: 20 },
//   { name: "Task 3", priority: "neutral", time: 40 },
//   { name: "Task 4", priority: "high", time: 50 },
// ];

// const sliceTask = (start,end) => {
//     newArray= arr.slice(start,end)
//     return newArray;
// };

// console.log(sliceTask(1,3));
// console.log(arr);

// ? Task  7 end.
