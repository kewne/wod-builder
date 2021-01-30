---
title: Cleaning Up
author: kewne
tags:
- react
- frontend
---
Yesterday I've managed to get workouts to save, which makes
the application minimally usable so today
I want to clean things up a bit so
I can move forward more easily in the future.

I've already had some trouble debugging some issues
because source maps weren't working.
A quick documentation search yields  what I'm after,
I apply the changes, confirm it works and
[commit.](https://github.com/kewne/wod-builder/commit/a8e90d887d565b777a5a8114bc5a8806d62c7dc6)

Yesterday I noticed that, when saving a workout,
the editor isn't cleared.
That's strange because I did add the code for it.
I spend some time trying to understand what's going on...
and realize I forgot to add `event.preventDefault()`
(classic JS noob mistake), which was causing a page reload.
The page reload causes the app to re-initialize its state,
which I've set to `getWorkout() || []`, which loads the saved
workout from `localStorage`.

I fix the issue by wrapping the `onSubmit` handler in
a `handleSubmit` function, which is now the new value
to the form's `onSubmit` prop.
Confusing?
I think so to, so I rename `WorkoutEditor`'s `onSubmit`
prop with to `onSave`, which brings it more in line with
the component's semantics.

[Time to commit and move on to other things.](https://github.com/kewne/wod-builder/commit/0828c9c7b021175553453470660adf518d144358)

Something that's been bothering me ever since I wrote it
is the `getWorkout() || []` inside `App`.
Not only does it appear twice, it's coupling the component
to the `localStorage` accessor functions.
I want to fix that now, so I extract a `savedWorkout` prop.
I also realize it doesn't make sense to initialize the editor
with the saved workout, so I change it to initialize to an empty list.

Well, that breaks the app: only the `App` component is reloaded,
which means that `savedWorkout` is static and is never updated when
`localStorage` changes...
I rename the prop to `getSavedWorkout` and make it a function
that defaults to returning the empty list.
While I'm at it, I also create a `setSavedWorkout` prop.

I'm not really satisfied with this solution but
that'll be work for another session, so [I commit my changes.](https://github.com/kewne/wod-builder/commit/2c26f47af72fe2751e5272b71572724605f0538a)