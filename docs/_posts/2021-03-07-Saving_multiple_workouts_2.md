---
title: Saving Multiple Workouts (Part 2)
author: kewne
tags:
- react
- frontend
- IndexedDB
---
Now things are set up for actually digging into `IndexedDB`,
so  here I go!

...And then I notice that the `IndexedDB` API is fully async.
This means that I have to adapt the existing `InMemoryRepository`...

So I start by wrapping the repository construction in a factory method
that returns a promise.
This means I have to handle the promise's outcome in a component, so
I create a new `WaitLoadApp` component that wraps `App` to do
exactly that.
I also have to add a `import "regenerator-runtime/runtime";` so my
`async` function works...I'm not really sure why...

I now [commit my changes](https://github.com/kewne/wod-builder/commit/09bf01c807d4759cebcf42c6b3414faf539baefc)
and move on to the next missing piece: making the repository methods async.

I struggle with getting things to work: while making the methods async is
easy, when modifying the code, I first get carried away trying to make
the components handle the "saving" state right away...
after a few tries, I decide to park this and focus on keeping the interaction
the same.

Then, I notice that, because the `onSave` handler in `WorkoutEditor` is async, 
the editor is cleared **before** the save has completed, which means that, if
it fails, the user loses it's input.
This eats up more time before I realize that the previous implementation also
didn't verify that `onSave` succeeded.

Finally, I decide to just make the smallest change possible, which is again
not as trivial as it sounds: because `workoutRepository.getAll` is async, I need a `useEffect` call to 
set the `savedWorkouts` state;
I trigger this effect only when the `editableWorkout` changes
(so updates to workouts are reflected in the library).

However, something isn't quite working: when a new workout is saved,
the list does not update...because `editableWorkout` is set to `null`,
which was already it's previous value!
I fix this by initializing `editableWorkout` to `{ value: [] }`: this
keeps `id` undefined and differentiates between a new and saved workout;
it also has the added benefit that I now get rid of the `editor` setting
conditional by interpolating the value of `editableWorkout.id` into the 
`key` of the `WorkoutEditor` component!

I'm feeling pretty happy right now, [so I commit.](https://github.com/kewne/wod-builder/commit/7e27f01dd61dc64e96f49f7f3a6dceec48e7e03f)
