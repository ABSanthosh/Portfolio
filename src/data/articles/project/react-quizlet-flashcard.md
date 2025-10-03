---
title: React Quizlet Flashcard
date: 2022-09-12
tags:
  - Code
  - Open Source
  - React
---

<h1 class="MdRow JustBetween W100">
  {title}
  <a href='https://www.npmjs.com/package/react-quizlet-flashcard' target="_blank" rel="noopener noreferrer"><img alt='Get it on NPM' height="50px" class="MdRow" src='https://avatars.githubusercontent.com/u/6078720?s=200&v=4'/></a>
</h1>

A simple and responsive quizlet-like flashcard component with no additional dependency. Written in Typescript and React.

<details class="FancyDetail">
<summary data-just="space-between" data-bg>In a rush? Here's tl;dr</summary>
<main>    
I created a responsive flashcard component similar to Quizlet, using Typescript and React. My motivation stemmed from the desire for a lightweight flashcard app without unnecessary features. I aimed to make a simple, fast, and responsive flashcard experience that aligned with my preferences.
<br/><br/>
However, I found that no existing library replicated Quizlet's flashcard functionality, prompting me to create my own. I initially replicated Quizlet's appearance and built a basic React component. I implemented a subtle animation by keeping three cards loaded at all times, allowing smooth transitions when moving between cards.
<br/><br/>
I addressed user feedback and gradually added features, resolving 11 issues so far. Over time, the project became difficult to maintain due to a lack of type safety and code organization. To enhance maintainability, I rewrote the entire component in TypeScript and created a Storybook for it.
<br/><br/>
Around 50 people are using the library, and I'm thrilled to see its growing popularity, boasting 33 stars on GitHub. I'm especially grateful to a friend who built a website using my library. Despite its success, I plan to continue improving the library and exploring other ideas, such as a minimal table component and a "Neko" (cat) component for websites
</main>
</details>

## Why did I make it?

To talk about this project, I’ll have to bring in one of my other “failed” or “abandoned” or “re-thought” project, [Genki]. I wanted to make a lightweight, no-nonsense flashcard app that just does what it says on the box. Other popular apps like <a href="https://quizlet.com/" target="_blank" class="FancyLink" data-type="Bracket">Quizlet</a>, are bloated with features that I’m never going to use or apps like <a href="https://apps.ankiweb.net/" target="_blank" class="FancyLink" data-type="Bracket">Anki</a> that are straight from 2000s(<a href="https://en.m.wikipedia.org/wiki/Anki_(software)" target="_blank" class="FancyLink" data-type="Bracket">no really</a>). I wanted to make something that is simple, fast, and responsive. I wanted to make something that I would use.

But whats the core of a flashcard app? Flashcards. I looked for a library that works just like Quizlet’s flashcard but guess what? There isn’t one. So I was like...

<span class="MdRow W100">
    <figure class="MdFigure">
        <img alt="Fine I'll do it myself meme" src="/assets/articles/projects/react-quizlet-flashcard/meme.gif"  loading="lazy" width="80%"/>
        <figcaption>Meme</figcaption>
    </figure>
</span>

## Implementation

I wanted a Quizlet-like flashcard component right? And where can you find that? Yeah in Quizlet website. For the first version, I just copied CSS from Quizlet and made a simple React component. It was quite interesting to see how it was implemented in their site(although now they changed it).

To have a subtle animation to make it come from right or left, they always have 3 cards loaded. When left or right button is clicked, the card in the other side is removed and a new card is added, making the invisible card visible.

|                                               react-quizlet-flashcard                                               |                                            Quizlet's flashcard component                                            |
| :-----------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------: |
| ![component](https://user-images.githubusercontent.com/24393343/150652939-5d7a14df-4484-4d9b-aee1-8dee94205a16.gif) | ![component](https://user-images.githubusercontent.com/24393343/150373430-8b5f9905-9e4f-4639-827e-a8be303f49cb.gif) |

Look how similar it looks to the original one. I’m quite proud of it. <a href="https://absanthosh.github.io/react-quizlet-flashcard/?path=/story/flashcard--basic-flashcard" target="_blank" class="FancyLink" data-type="Bracket">Try it yourself here</a>.

## Improvements

At first I made the component with Javascript and scss. It worked. It didn't have any features except displaying cards. You wouldn't be able to style it properly because of the default styles like `padding` taking precedence due to the selector specificity.

I added some of the features as people asked in the issues page. As of writing this, I've solved <a href="https://github.com/ABSanthosh/react-quizlet-flashcard/issues?q=" target="_blank" class="FancyLink" data-type="Bracket">11 issues</a>. Its not much but I'm happy that I could help people use my library in their projects.

After some time, the project became unmaintainable because it had no type saftey and all the logic was in a single file. Even if I wanted to add more features, It would take a lot of time to understand my own code. So I decided to rewrite the whole thing in Typescript and also made a Storybook for it. Now its slightly easier to maintain.

There are around 50 people using my library and everytime I see the list, It just makes me so happy.

<span class="MdRow W100">
    <figure class="MdFigure">
        <img alt="No. of people using" src="/assets/articles/projects/react-quizlet-flashcard/UsedBy.png"  loading="lazy" height="150px"/>
        <figcaption>No. of people using</figcaption>
    </figure>
</span>

<br/>
Thank you all &hearts;

## Stars

It has 33 stars!! 33!! yay

Special mention to my friend who made a website for me using my library so she can star it &hearts;.

<span class="MdRow W100">

  <figure class="MdFigure">
  <img alt="Latest star" src="/assets/articles/projects/react-quizlet-flashcard/starNotification.png"  loading="lazy"/>
  <figcaption>Latest star</figcaption>
  </figure>
</span>

## Conclusion

I really enjoyed making this library. I have one more feature in mind that I recently learnt how to do so I might do that when I get time. I also have 2 more library ideas that I want to make. A minimal table component and Neko(cat) component that you can add to your website like in this website(If you haven't see what it does, scroll to the bottom of the page and enable "Neko" and move your mouse around).

## Update

After 3 years of publishing the last version, it finally reached 100 stars!

<span class="MdRow W100">
  <figure class="MdFigure">
    <img alt="100 stars" src="/assets/articles/projects/react-quizlet-flashcard/starNotification2.png"  loading="lazy"/>
    <figcaption>100 stars</figcaption>
  </figure>
</span>

<br />

A few weeks ago, I got a pull request from a user who added unit tests, which I had in the todo list for the last 3 years. I thought I could just swoop in, review it, and merge it. But when I opened the codebase again and dusted off the cobwebs, I realized that the code was a mess. Why was I using `useRef` to handle callbacks? Even thought I didn't use React for the last 2 years, I can still tell that it was a bad idea. So I decided to rewrite the whole thing.

I think its a good sign when you can look back at your code and think "Wow, I was so dumb back then". It means you have improved. So I rewrote the whole thing, reduced the complexity, and abstracted the logic into a custom hook. So now the components `<Flashcard />` and `<FlashcardArray />` uses the `useFlashcard()` and `useFlashcardArray()` hooks internally to manage the state and logic and now you can use the hook separately and pass it to your own components to have fine-grained control over the flashcard state and logic.

I added a couple more features that only a custom hook can provide so check out the [demo page](https://flashcard.abs.moe).

I also got rid of Storybook and added a full documentation site using [Fumadocs](https://fumadocs.dev/). I also added [ladle](https://ladle.dev/) to use during development. It is very minimal and fast enough to use during development.

Although it took me a couple of weeks to rewrite the whole thing, I think it was worth it. The code is now much cleaner and easier to maintain. It also reminded me why I moved away from React in the first place and switched over to Svelte and from Next.js to SvelteKit.

At this rate, I might get to 200 stars in the next 3 years. But I'm happy that there are ~190 people using the library now compared to the 50 people when I wrote the last article.

<span class="MdRow W100">
  <figure class="MdFigure">
    <img alt="Used by" src="/assets/articles/projects/react-quizlet-flashcard/UsedBy2.png"  loading="lazy" height="150" />
    <figcaption>Used by</figcaption>
  </figure>
</span>

<br/>

Feel free to make a issue on the [GitHub repository](https://github.com/ABSanthosh/react-quizlet-flashcard) if you have any questions or suggestions. I will try to respond as soon as possible.
