The solution is to memoize the function using `useCallback` hook. This ensures that the reference to the function remains the same across renders, as long as the dependencies passed to `useCallback` remain the same.

```javascript
import { useEffect, useCallback } from 'react';

const MyComponent = () => {
  const fetchData = useCallback(async () => {
    // ...
  }, []); // Empty array ensures fetchData only changes when component mounts

  useEffect(() => {
    fetchData();
  }, [fetchData]); // Now fetchData remains the same between renders

  // ...
};
```

By using `useCallback`, we create a memoized version of `fetchData`. The empty dependency array `[]` ensures that the function is only created once when the component mounts. Now the `useEffect` hook correctly only runs once after the initial render.