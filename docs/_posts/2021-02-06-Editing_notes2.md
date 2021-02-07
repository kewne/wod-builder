---
title: Making Notes Editable (Continued)
author: kewne
tags:
- react
- frontend
---
After a long while, I'm finally
able to pick up where I left off;
hopefully today I'll finally get
the form working.

Fortunately, there's not much left to 
do;
I start off by moving `WorkoutExercise` out
of `WorkoutEditor` and start adding event handlers
up the tree:
1. I add a `onNoteUpdated` handler to `WorkoutExercise`
which is called with the input's value;
2. In `WorkoutEditor`, each `WorkoutExercise` sets
the above handler to update it's respective note.

After this, the only things left are removing the
`readOnly={true}` and replacing the hardcoded value
in `appendToWorkout`.

It's now [time to commit the changes.](https://github.com/kewne/wod-builder/commit/6c84aa3f670f48d2b4daf54946e35339e22e0c16)

At this point, the app is working minimally;
I have a bunch of different directions I can
move it in though, so I decide to collect them
as issues:
* [ Add search to exercise picker #2 ](https://github.com/kewne/wod-builder/issues/2)
* [ Edit exercise from library #3 ](https://github.com/kewne/wod-builder/issues/3)
* [ Save more than one exercise in the library #4 ](https://github.com/kewne/wod-builder/issues/4)
* [ Support reordering exercises in the workout editor #5 ](https://github.com/kewne/wod-builder/issues/5)
* [ Supporting recording workout history #6 ](https://github.com/kewne/wod-builder/issues/6)

I'm not sure how much time I have left, so
I decide [Edit exercise from library #3](https://github.com/kewne/wod-builder/issues/3)
is next, since I don't expect it to be too hard.

My first move is extracting a `WorkoutLibrary` component
from the hardcoded stuff in `App`.
I put it into the existing `workout-library` module,
which I'm not terribly sure is a good idea because it already
contains the methods to save and retrieve from `localStorage`.
[I commit immediately](https://github.com/kewne/wod-builder/commit/ed1f33bc5346c8f0e58d5d58315c2eb53dfeebf1)
before proceeding.

After this refactoring, I'm stuck for quite a while figuring
out how to populate the `WorkoutEditor`...
The only thing I can come up with is that, since the editor
is managing its own state, I can pass the initial value
for that state through a prop.

I'm still not sure where this is leading but [I commit the change.](https://github.com/kewne/wod-builder/commit/1388e561b192cc7947e911119d92c307f1587f3b)

I think about it some more and come upon a solution:
if I add a `editableWorkout` state to `App`, I can
use it to toggle between an empty editor and a pre-populated one.
However, when I try to build on that, I realize it
might end up being a larger change and decide to 
[commit before proceeding.](https://github.com/kewne/wod-builder/commit/c7e986917e81ff5bb23b0fe3cc1684f04cf176eb)

After this, I make a few experiments that don't really work and
decide to call it a day.