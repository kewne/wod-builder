---
title: Editing Saved Workouts
author: kewne
tags:
- react
- frontend
---
Yesterday I started work on [ Edit exercise from library #3 ](https://github.com/kewne/wod-builder/issues/3)
but couldn't find a solution, so hopefully I'll complete it today.

I'm still not sure how the final solution will work
but I'm pretty sure I need to add a `onWorkoutSelected`
handler to `WorkoutLibrary`.
Before I do that, however, I decide to [extract a 
`WorkoutLibraryEntry` component.](https://github.com/kewne/wod-builder/commit/2751261bc342d4716ebc3267e262ec0637641d12)

I'm now ready to add the handler: I add
`onWorkoutSelected` handler to `WorkoutLibrary`
and pass it through to an `onSelected` handler
in `WorkoutLibraryEntry`.
While doing so, I notice I incorrectly pushed the
`<li>` wrappers into `WorkoutLibraryEntry`, so I
pull them out again.

Finally, in `App`, I pass the `setEditableWorkout`
state setter into the `onWorkoutSelected` handler;
I test the application...and it doesn't work!
I mean, the logs indicate the handler is called
correctly but nothing happens... so I decide to [commit anyway.](https://github.com/kewne/wod-builder/commit/e9990bc6ae22a62d8823380e3b4dd86a27884e66)

With a bit of logging, I find out what the issue is...
because both the `createEditor` and `updateEditor` variables are
instances of `WorkoutEditor` (with different props),
React is unable to distinguish them and assumes they are
the same component;
since it's the same component, the `useState(initialWorkout)`
yields the last known state and the value of `initialWorkout`
is ignored.

I think solve this in more than one way, none of which seem good:
1. Add different `key`s to `createEditor` and `updateEditor`,
which informs React they are **not** the same component;
since the use case for `key` is to distinguish between items
in a collection, this feels like I'm abusing the feature;
I also suspect it may cause issues with state;
2. Pull the `WorkoutEditor`'s `workout` state up into
`App` and adding an `onWorkoutChanged` handler to propagate
the user's changes;
a consequence of this would be that keeping the `workout`
argument in `WorkoutEditor`'s  `onSave` makes no sense
(it would contain the previous value from `onWorkoutChanged`)
but, on the other hand, it would take no arguments, which feels weird.

My main conclusion from this is that I'm most likely
modeling this behavior incorrectly, so I decide to use
the easiest solution (defining `key`s) while I digest the 
issue.
[Time to commit](https://github.com/kewne/wod-builder/commit/41db8f4a5fb374c0bbac51cf313e235636b20df2) and close shop for today.
