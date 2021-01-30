---
title: Saving the workout
author: kewne
tags:
- react
- frontend
---
Ok, I'm now ready to finish the form I started
yesterday!
My end goal is to be able to save workouts;
the first implementation will simply save one
workout and saving a new one will replace it.

Looking at the docs (because it's my first React form),
it seems like handling changes in my text inputs
(I've decided to call them exercise notes) will be a 
bit of work; I'm in a hurry to go to bed, so I hastily
decide to make it read-only and tack state in later.
I initially do this by adding a new `note` prop to 
`WorkoutItem` which sets the input's value but
the console warns me I should be explicit and 
set the `readOnly` property to `true`, which I do.

My new `note` prop in `WorkoutItem` means I now
need populate using something in `Workout`, so I
decide that `items` (using that name was a terrible decision
I'll need to fix soon) will now be an object with 
`name` and `note` attributes.
This cascades into a change in the `appendToWorkout`
function in `index.js` which now needs a value for the
`note`, which I hardcode as `"3x12"` (and gym bros rejoice).

The app needs to know when the user submits the form, so 
I add a `onSubmit` handler to `WorkoutEditor`, which 
is populated with a function that needs to save the workout
somewhere...
I decide to use `localStorage`, fire up the docs...
And do a huge double take when I realize it only supports string values!
Ok...I prefer to save it as structured data, is there something I can use?
Yes! IndexedDB...ok those docs look scary, on second thought let's not use it...for now.

I take a deep breath and go for `JSON.stringify`'ing the workout into localStorage.
I create a basic accessor and setter, then hook those into the `onSubmit` handler
and the state initializer for the `workout` state.

I test the app and...it breaks, my `localStorage` wrapper accessor returns `null`
but I expect an array, so I quickly add a fallback to an empty array.
Another test tells me it works now, [so I commit my changes.](https://github.com/kewne/wod-builder/commit/b0719910aa61f2c984fde12818425506d2a98164)

Off to bed now!