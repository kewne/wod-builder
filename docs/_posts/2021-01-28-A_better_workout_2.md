---
author: kewne
title: A Better Workout (Continued)
tags:
- react
- frontend
---
Continuing from my previous session's work,
I'm going to try allowing the user to 
parameterize workout exercises (e.g. for
adding sets, reps and loads).

I suspect that this will add a bit
more complexity to the workout, so I 
move the component into it's own module, `workout-editor.js`,
while wrapping in a form and adding a basic input.

[I commit the changes.](https://github.com/kewne/wod-builder/commit/5a8a62ec1d19dffc6659fd483159a9fdc0c44945)

Right after this, I remember to check the console
in the developer tools and find an error about
a missing `key` attribute in the `ExerciseList`
component...
which is weird because I'm pretty sure I added it.
I stare at the component in disbelief for a bit...
and notice the `key` attribute is on the 
`ExerciseButton` components, not the wrapping `li`.

This gets me thinking whether there are bugs
related to item keys and, sure enough, there are:
if I add the same exercise twice to the workout,
they get the same key!
This means I need a different key but I have no
idea what that could be...I [check the react docs](https://reactjs.org/docs/lists-and-keys.html),
read some more on the subject and decide
(probably incorrectly) that it's ok to use the
index as key in this case.
That seems to fix the problem.

[Time to commit](https://github.com/kewne/wod-builder/commit/ea703b1912806ec5b4aaec394a93ebdd0a2c4454)
(adding the renaming of `WorkoutEditor` which was missed in previous commit).

At this point, I have to get back to the real world,
a bit frustrated that I still haven't managed to get the form working...