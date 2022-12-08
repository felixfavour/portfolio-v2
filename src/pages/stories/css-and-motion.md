---
type: story
layout: ../../layouts/StoryLayout.astro
title: CSS and Motion — You Too Can Build Animations on The Web
excerpt: CSS and Motion is a short and effective guide sharing just enough fundamentals to help you start developing those buttery smooth animations on your web pages.
draft: false
pages: 0
author: Favour Felix
cover: 'https://firebasestorage.googleapis.com/v0/b/favour-portfolio.appspot.com/o/stories%2Fcss-n-motion.webp?alt=media&token=b6a4e13a-2ef0-4a2d-acee-6c58b49dbde8'
banner: 'https://firebasestorage.googleapis.com/v0/b/favour-portfolio.appspot.com/o/stories%2Fcss-n-motion.webp?alt=media&token=b6a4e13a-2ef0-4a2d-acee-6c58b49dbde8'
readTime: 5 mins
year: 2022
date: September 26, 2022
updatedAt: September 17, 2022 2:34 PM
---

If you are a developer like me, then you most likely have visited some websites and left with awe; awe of how the animations on these sites are so sleek and demonstrative of the brand’s identity. You build very beautiful user interfaces, but adding motion to your projects would give it some sort of elegance, so you need to fill in that missing piece — oh well, you are in the right place. **CSS and Motion** is a short and effective guide sharing just enough fundamentals to help you start developing those buttery smooth animations on your web pages.

Understanding the [Principles of Motion](https://material.io/design/motion/understanding-motion.html#principles) is very essential for any motion designer or developer; animations and transitions could be used carelessly on web pages, which could rather distract the user than excite them. As a rule of thumb, before animating any element, make sure your animation is passing some sort of information to the user. Also, ensure that your animation keeps your user focused on what is necessary. A good instance to use animations is at the end of a user journey, i.e. completing a milestone — this makes your animation expressive. 

For some depth on motion design, see [Understanding Motion](https://material.io/design/motion).

Now that we understand when motion should be used, we need to understand the two ways to propagate motion in CSS — Transitions and Animations.

> What are Transitions and Animations in CSS? When do I need to use one over the other?
> 

## Transitions

![Anim1](https://firebasestorage.googleapis.com/v0/b/favour-portfolio.appspot.com/o/stories%2Fanim-1.png?alt=media&token=c435cc30-97a8-4469-9321-ce222e9bb221)

Transition is a motion between two keyframes; think of keyframes as a grouping of CSS styles, e.g. `color: red`, `padding: 20px` etc. The two keyframes of a transition would be individual styles for an element with similar CSS properties and different values — I know, that’s a lot to take in, but the diagram above helps to simplify.

<iframe height="300" style="width: 100%;" scrolling="no" title="CSS and Motion - Transitions" src="https://codepen.io/felixfavour/embed/WNJpWxm?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/felixfavour/pen/WNJpWxm">
  CSS and Motion - Transitions</a> by Favour Felix Chinemerem (<a href="https://codepen.io/felixfavour">@felixfavour</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Please note that the `transition` property  in the codepen is a shorthand property, containing the `transition-delay` and `transition-timing-function`. 

The code snippet above shows a simple CSS transition that steadily modifies the CSS `color` and `padding` properties from their initial state to the `:hover` state in one second (`1s`) — The CSS Transition is triggered by a hover action. 

Transitions are triggered by pseudo-classes like `:hover`, `:active`, `:focus` but not limited to pseudo-classes. They can be added as bare styles while manipulating the DOM to activate the transition motion. A perfect example for this is exit and enter transitions.

```css
/* NOTE: This code snippet inherits code from the codepen above */

.transition-box.enter {
  color: red;
  padding: 20px;
}
```

In the above code snippet, the transition is triggered when the `enter` class is added to the  `transition-box` div element. 

## Animations

![Anim2](https://firebasestorage.googleapis.com/v0/b/favour-portfolio.appspot.com/o/stories%2Fanim-2.png?alt=media&token=e4f35df1-a34c-48f0-a072-48910521f1ca)

Transitions are perfect for demonstrating motion between two keyframes, but what happens when you work with more than two keyframes and need more flexibility in changing CSS properties? This is where animations build up on the shortcomings of CSS Transitions. CSS allows you to set animations with numerous keyframes in terms of percentages. Recall that a keyframe is a group of CSS styles.

<iframe height="300" style="width: 100%;" scrolling="no" title="CSS and Motion - Animations" src="https://codepen.io/felixfavour/embed/BaxWEdv?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/felixfavour/pen/BaxWEdv">
  CSS and Motion - Animations</a> by Favour Felix Chinemerem (<a href="https://codepen.io/felixfavour">@felixfavour</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

The code snippet above results to a slightly-complex CSS animation with four keyframes; `0%`, `33%`, `66%` and `100%`. Each of these keyframes have similar CSS properties and some of these properties have different values; The keyframes use percentages to represent the state of an element at a fraction of the given time, which is three seconds in this case

```css
/* NOTE: This code snippet inherits code from the codepen above */
animation: cssnmotion 3s ease-in-out infinite;
```

With an understanding of what animations and transitions are, you would realise that most complex animations you have encountered in the past are just simple transitions — essentially, the developer has set up a construct that just changes the value of CSS properties at a given interval.

I always recommend that animations are reserved for more complex motion designs and are seen as a last resort, as increased complexity can result in decreased performance of your webpage.

Finally, I hope you learnt a lot to kickstart your journey into CSS and Motion. Thank you for reading!