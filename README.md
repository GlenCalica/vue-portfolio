# My Portfolio
[My portfolio](https://glencalica.github.io/) was made to showcase my abilities as a developer and some of the projects I've made in my free time. This project was first designed over AdobeXD and then developed using Vue. I chose to use TailwindCSS over other CSS frameworks to get a more custom look.

Looking back at this project, there were some interesting things that I've done to customize the site. The most quirky thing would be adding JS event listeners to some of the App.vue's lifecycle hooks. I used the `created` hook to add event listeners to check when the window would resize. By doing this, I could adjust the size of the sidepanel even after the page was fully loaded. Using the Options API, I used `watch` to check whenever the window's Y position was past a certain point to slide in the side panel.

One concept that I find interesting is how Vue has multi-directional data flow (which is different than React, which has uni-directional data flow). By using `emits`, I can send data from a child component into the parent. This was useful in this project for letting the main app know whether a card was opened or not. Multi-direction data flow is definitely useful in smaller porjects to quickly send data, but I'm sure it makes a project harder to understand if by chance you're sending data to a sibling component via the parent.

Other than that, this project is pretty straightforward. This project was a good experience for me to try out a full project using Vue. 
