---
title: Restarting
author: kewne
tags:
- react
- frontend
---
Wow... almost two years...

I've been busy for a while and only recently got back in the mood to pick this up.

Needless to say, two years is a long time in software development, so I came back to find
a number of PRs created by `dependabot` (GitHub's automated vulnerability scanner).

I figured most of these would be caused by severely out of date dependencies, so I clone the
repo and run

```sh
npm update
```

It doesn't improve things too much; it does tell me that `npm audit fix` will fix things
and I'm not in the mood for thinking too much about this (I might regret this later), so 
I run that command... and it doesn't seem to work too much, as most of the vulnerabilities
are still there.

I notice it also tells me I can try `npm audit fix --force`, which doesn't seem like a great
idea... but I try it anyway.
This does solve the reported vulnerabilities but seems to update major versions on many of
my dependencies, which I suspect will break my development setup, not to mention the app.

Looking through the updated dependencies, the most obvious change is a 
[`webpack`](https://webpack.js.org/) update from 4 to 5.
I jump to the migration guide... and come up empty.
My setup is pretty basic, so I go to the "Get Started" guide to see what could be missing.
Nothing pops out, so I decide to stop flailing and start thinking.

I notice that, when I start the app and open it, I'm greeted by a directory listing with
`.js` files, instead of the app;
this is odd, so I look at the `dist` directory, from which the files are served:
indeed, only the `.js` files are there, **which is strange because there should be an `index.html`
file there**.

Turns out that's not being generated, so I jump back on webpack docs and find out that's now
in the [HtmlWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin), and follow
the instructions to set it up;
the build now generates an index.html file but the app still doesn't start...

I look at the generated file and quickly spot the mistake: the app is attempting to mount
the root component using a `#app` selector, i.e., it's looking for an element where `id=app`
which doesn't exist;
I quickly fix the error by changing the selector to `body` and it works.

That's enough for today, [so I commit](https://github.com/kewne/wod-builder/commit/985d28ada4f7f86ffe5e3179a84777d69145b84d).

I then remember that I also need to update the dependencies that generate this site, so
I do so and [commit as well](https://github.com/kewne/wod-builder/commit/9aea0067a58a7506176659c1665ae793f71015e5).
