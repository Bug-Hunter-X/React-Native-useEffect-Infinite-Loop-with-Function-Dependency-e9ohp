# React Native useEffect Infinite Loop with Function Dependency

This repository demonstrates a common but subtle error in React Native when using the `useEffect` hook with a function in the dependency array.  The incorrect implementation leads to an infinite loop because the function's reference changes on every render, triggering a continuous re-render.

The solution shows how to correctly memoize the function using `useCallback` to prevent this issue.  Refer to the `bug.js` file for the buggy code and `bugSolution.js` for the corrected version.