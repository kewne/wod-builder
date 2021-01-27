---
author: kewne
title: A Better Workout
tags:
- react
- frontend
---
The current workout is printed as a plain list
and today I'm hoping to improve that.  

The first thing I notice is that, semantically,
workout exercises *should* be ordered, so I
switch the markup.
Since I'm at it, I also take the chance to improve the naming
(renaming `List` and `ListItem` to `Workout` and `WorkoutItem`, respectively)
and, [as I alluded to previously]({{site.baseurl}}{% post_url 2021-01-24-Starting %}),
inline `WorkoutItem` into `Workout`.

I then [commit my changes.]()