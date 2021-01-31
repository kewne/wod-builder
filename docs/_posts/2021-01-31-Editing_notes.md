---
title: Making Notes Editable
author: kewne
tags:
- react
- frontend
---
Previously, I made the decision to
[make notes read-only.]({{ site.baseurl}}{% post_url 2021-01-29-Saving_workouts %})
Today, I'm going to try to and make them editable.

But first...I need to fix two bugs I introduced in the last session:
1. the `App` prop was still named `saveWorkout` but was being used
as `setSavedWorkout` in calls;
2. the result of `getSavedWorkout()` is nullable but the call when
rendering the library assumes it's not.

These are quickly fixed by falling back to an empty list if the
`getSavedWorkout()` call returns null and correcting the prop name.
I also remove the code guarding against not setting the `getSavedWorkout`
prop because I find it silly.

[Time to commit](https://github.com/kewne/wod-builder/commit/c37643c68f86918dac84f78d74a863f029ef5d34)
and move on to what I really want to do.

...Except I want to make a few improvements to `WorkoutEditor` first.
I made the mistake of calling everything `items` or `item`, which makes
the context harder to understand.
I think `exercises` makes it much better, so I rename
`WorkoutItem` to `WorkoutExercise`.
This makes the `item` prop in `WorkoutExercise` look silly,
it should be named `name` and, since the component's props are
the exercises attributes, I decide to infuriate the code style
gods and use the spread operator.

[Time to commit.](https://github.com/kewne/wod-builder/commit/8a0a5376e32ece746a0f99ebd3936e576a101c39)

I don't really know how to go about making this work...
It seems like I need to move the form's values into component state
but I also need to populate it from props...
After thinking about this for a good bit, I realize I screwed up the 
component design awfully...
I assumed that, because I need to add exercises to the workout,
I needed to pull state up into `App` so `WorkoutEditor` and `ExercisePicker` 
could interact but, now, I think it's more accurate to push `ExercisePicker`
*into* `WorkoutEditor`: this means I can push the currently editable
workout down as state into `WorkoutEditor`, so only the `onSave` handler
needs to be passed as prop.

These are the steps I take (each in a separate commit so it's easier
to follow and so I can backtrack when needed):
1. [Change the `workout` prop into state in `WorkoutEditor`](https://github.com/kewne/wod-builder/commit/3bd6f3cddf14c01d470ceee1592f9dd383857c1f).
**This breaks adding exercises to the editable workout**;
2. [Change the `onSave` handler in `WorkoutEditor` to take the workout as an argument](https://github.com/kewne/wod-builder/commit/a316e6b96db3c1c28360113e8c15ca5a589295c8), updating the code in `App`
accordingly.
This allows me to remove `workout` as `App` state, breaking the
`appendToWorkout` function;
I usually avoid commented out code but I want to keep it around
for when I move it to the `workout-editor` module;
3. [Move `ExercisePicker` and related code into the `workout-editor` module](https://github.com/kewne/wod-builder/commit/e271c68c2666b21f30e043cd4c80f2179fb01b99)
which means it can communicate with `WorkoutEditor` again
and I can uncomment the line in `appendToWorkout`;
I initially hook the `WorkoutEditor`'s `onSave` handler directly
to `setSavedWorkout` inside `App` but this stops the library
from updating, so I conclude I need to create state in `App`
to keep the rendering in sync with `localStorage`.
The obvious name for it is `savedWorkout` but the state
setting function would collide with the prop, so I rename the
latter to `onWorkoutSaved`, since it's actually working as a handler.
I then introduce a `handleSave` function which propagates workout
saves to both component state and `localStorage`.

I'm ready to call it a day but, right after these commits,
I notice saving the workout doesn't clear the editor,
so I [make a final one so it now does](https://github.com/kewne/wod-builder/commit/6940e3523d9a3aa7ec2c5cd33174d3de473f91b5).