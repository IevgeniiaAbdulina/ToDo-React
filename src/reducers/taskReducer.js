const initSate = {
  tasks: [],
  task: {}
};

const taskReducer = (state = initSate, action) => {
  console.log("taskReducer: ", state);
  return state;
};

export default taskReducer;
