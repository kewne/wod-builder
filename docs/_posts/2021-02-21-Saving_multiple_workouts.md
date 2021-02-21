---
title: Saving multiple workouts
author: kewne
tags:
- react
- frontend
- IndexedDB
---
After a long time without working on the app,
I decide to be bold and tackle [ Save more than one exercise in the library #4 ](https://github.com/kewne/wod-builder/issues/4).

The best option I've found in the browser APIs is
to use [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API),
which I've never used, so this will be fun!

## Create source subtree for components

To start off, however, I'm going to start adding some more
structure to my project.
I'm doing this now because, although the database is mostly
going to support the `WorkoutLibrary` component, I like to
have strict separation of concerns, so  components will go 
into a specific `components` subtree.
I'm also going to extract the `App` component into its own file,
which goes in that subtree, since it's technically a component.

[Time to commit](https://github.com/kewne/wod-builder/commit/fe1b9b02710c2a8694874443f66cd8035c981d7b) and move forward.

## Create workout repository

My next move is to create a [workout repository](https://www.martinfowler.com/eaaCatalog/repository.html).
This is an abstraction over persistence for workouts.

Right now, I'm using `localStorage`, which can't
store more than one workout without hacking around its limitations,
so I decide to torch that and create a basic, in-memory repository,
with two operations:
1. `getAll()`, which returns an array of saved workouts;
2. `save(workout, id)`,  which saves a workout.

The array returned by `getAll` is an object with `id`  and
`value` properties, where `value` is the actual workout object.
I like to keep `id`s separate from entity itself because 
just looking at the code makes it obvious whether 
you're creating a new entity or updating an existing one.
This is also the reason that `save` takes the `id` as the second
(optional) parameter: `save(workout)` creates a new workout,
while `save(workout, id)` saves it with the given id.

This makes the old `get` and `save` functions obsolete as well,
so I delete them.

I also decide to replace the two props in `App` with a 
`workoutRepository`, since the repository now contains
all functionality.

I then adjust the code to use the new API,
particularly the way that `WorkoutLibrary` uses the result
from `workoutRepository.getAll()`.

I then [commit the result](https://github.com/kewne/wod-builder/commit/c579d9dfa60c4004989a19cb9ff152dd7ffc0118) and call it a day.