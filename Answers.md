
1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Three JS Array methods that do not produce side-effects are map, filter, and reduce.  We can use Object.assign to create a new object by copying an existing object to an empty object and adding additional attributes to it at the same time.


1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

The store is like a global state object that can be accessed selectively by all components in an app.  Actions are functions which return an object which specifies some change to be made to the state.  Reducers are the functions which initially create the state and then apply all actions to the state.


1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state can be thought of as global state accessible by all components (but in a controlled manner), while component state consists of local state which can only be accessed from within a given component's scope.


1.  What is middleware?

In the context of Redux, middleware is a software component which intercepts actions and performs some operations on them before passing the results on to the reducers.  More generally, middleware is a software component that acts as an intermediary between two or more other software components.


1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk allows actions to perform asynchronous tasks by intercepting actions, and dispatching calls to the reducers at the appropriate time as the asynchronous calls return results.


1.  Which `react-redux` method links up our `components` with our `redux store`?

The 'connect' method links the redux store to components by having specified state attributes appear as props to the components.
