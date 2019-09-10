0. Background on self
   React Testing Library 1. What
   -A library that provides helper utilities for testing react components 2. Why
   -Enzyme is trash/weird
   -Shallow vs full rendering/diving is weird (at least to me) -https://airbnb.io/enzyme/docs/api/ShallowWrapper/dive.html (wtf does this even mean?)
   -Directly calling functions on an instance of react class to test state leads to issues
   -Leads to false positives (create example)
   -Users don't care about state. Users care about what they see on the screen
   -"The more your tests resemble the way your software is used, the more confidence they can give you." -https://kentcdodds.com/blog/introducing-the-react-testing-library
   -Tests should act on and query the DOM the same way a user would
   -Users don't query the DOM by IDs or classes or anything like that. They look for inputs with placeholders and labels, buttons with text, etc.
   -Enter react-testing-library 3. How
