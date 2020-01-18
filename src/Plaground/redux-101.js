// import { createStore } from "redux";
// const incrementingCount = ({ IncrementedBy = 1 } = {}) => ({
//   type: "INCREMENT",
//   IncrementedBy
// });

// const decrementingCount = ({ DecrementedBy = 1 } = {}) => ({
//   type: "DECREMENT",
//   DecrementedBy
// });
// const resetCount = () => ({
//   type: "RESET"
// });
// const setCount = ({ count }) => ({
//   type: "Set",
//   count
// });
// const countReducer = (state = { count: 0 }, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return {
//         count: state.count + action.IncrementedBy
//       };
//     case "DECREMENT":
//       return {
//         count: state.count - action.DecrementedBy
//       };
//     case "RESET":
//       return {
//         count: 0
//       };
//     case "Set":
//       return { count: action.count };
//     default:
//       return state;
//   }
// };
// const store = createStore(countReducer);
// store.subscribe(() => console.log(store.getState()));
// store.dispatch(incrementingCount({ IncrementedBy: 5 }));
// store.dispatch(setCount({ count: 200 }));
// store.dispatch(incrementingCount());
// store.dispatch(resetCount());
// store.dispatch(decrementingCount({ DecrementedBy: 10 }));
