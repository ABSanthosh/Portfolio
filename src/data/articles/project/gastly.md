---
title: Gastly
date: 2022-09-12
tags:
  - Code
  - Markdown
---

<h1 class="MdRow JustBetween W100">
  {title}
</h1>

A simple pokedex built using NextJs and a custom PokeAPI. Majority of the work was in building the dataset for the API since all the open APIs have data that doesn't fit the design I wanted.

## Why did I build this?

After my first ever React project, building a website for Breeze 2021, I had this new thing to play with. Having built websites with Django and python before, React was a breath of fresh air. Plus, all React websites can be hosted for free on various platforms as opposed to Django websites.

To bring a website I had built with Django previously to life again after Heroku stopped free tire, I decided to built it again in React.

## Inspiration and past work.

Usually people find get an idea and then look for a design to match with their vision. But, its a very unstable process in my opinion because developers are not designers and it'll be very discouraging, especially when you have an eye for pleasing designs.

I found this design on [Dribble]()

<span class="MdRow W100">
    <figure class="MdFigure">
        <img alt="Dribble design" src="/src/data/articles/assets/projects/gastly/dribble_design.png"  loading="lazy" width="100%"/>
        <figcaption>Dribble design</figcaption>
    </figure>
</span>
<br/>

While building the website, I made a lot of changes to the initial inspiration.

<span class="MdRow W100">
    <figure class="MdFigure">
        <img alt="Website design" src="/src/data/articles/assets/projects/gastly/website_design.png"  loading="lazy" width="100%"/>
        <figcaption>Final Website design</figcaption>
    </figure>
</span>
<br/>

Unfortunately I can't seem to get the original Django website to work to take a snip of the old design. This is the only picture I have of it.

<span class="MdRow W100">
    <figure class="MdFigure">
        <img alt="Old Website design" src="/src/data/articles/assets/projects/gastly/old_design.png"  loading="lazy" width="100%"/>
        <figcaption>Old Website design</figcaption>
    </figure>
</span>
<br/>

## Data collection

From the designs, these are the details I need for all pokemon along with some details that I found while trying to find these data:

- Name(English and Japanese)
- Stats (HP, Attack, Defense, Sp. Attack, Sp. Defense, Speed)
- Types (Grass, Poison, Fire, Water, Flying, Bug, ...)
- Gender Ratio
- Dimensions (Height and Weight)
- Description
- Abilities
- Sprites
  - Eggs
  - Variations of each Pokemon
- Audio files for pokemon

~~Since the projects is from 2021, I don't remember where most of the data came from.~~ But, I remember using <a href="https://projectpokemon.org/home/" target="_blank" class="FancyLink" data-type="Bracket"> projectpokemon</a> for the sprites.

Edit: I have made a repository with the code to scrape the data and generate the right format for the API. You can find it <a href="https://github.com/ABSanthosh/PokemonDataCollector" target="_blank" class="FancyLink" data-type="Bracket">here</a>.

### Analyzing the sprites naming convention

In the projectpokemon website, the sprites are named in a very specific way. For example, the sprite for Bulbasaur is named

`https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0003_000_fd_n_00000000_f_r.png`

and the website does not have any explanation on what each part of the name means.

Later, I joined the discord server and asked one of the admin there and he/she said:

> it appears the format is
> `poke_capture_(speciesID)_(formID)_(gender)_(isgigantamax?)_00000000_f_(shiny?)`
>
> Based on what I've seen ~
>
> gender:  
> md - male gender difference  
> fd - female gender difference  
> mf - no gender differences  
> uk - unknown
>
> shiny?:  
> n - normal  
> r - rare (basically internal name for shiny)
>
> isgigantamax?:  
> n - no  
> g - gigantamax

Once this was clear, I just had to write a script to download all the sprites and store them in the right folder.

## Tech

Since React was all I knew, I initially started with a create-react-app project. I used React Router Dom for routing and SCSS for styling. Later, I migrated the project to NextJs for the SEO benefits and the ability to use `getStaticPaths` and `getStaticProps`.

This helped me learn a lot about NextJs and some advanced use of css.

### Frontend

One main problem I faced was the design. Since I wanted the website to be responsive, I had to convert the desktop design to a mobile design. This was a very challenging task because of how the desktop design was made.

If you simplify the design from earlier, you get this:

<span class="MdRow W100">
    <figure class="MdFigure">
        <img alt="Codepen demo" src="/src/data/articles/assets/projects/gastly/codepen_layout.png"  loading="lazy" width="90%"/>
        <figcaption>Codepen demo</figcaption>
    </figure>
</span>
<br/>

but in the mobile design, I wanted the search bar at the top of the screen, then the pokemon sprite, then all the details.

<span class="MdRow W100">
    <figure class="MdFigure">
        <img alt="Codepen demo" src="/src/data/articles/assets/projects/gastly/codepen_layout_mobile.png"  loading="lazy" width="40%"/>
        <figcaption>Codepen demo</figcaption>
    </figure>
</span>
<br/>

After a lot of trial and error, I finally got the design to work using `grid-template-areas`. You can see the StackOverflow question I asked <a href="https://stackoverflow.com/questions/67288290/complex-responsive-layout" target="_blank" class="FancyLink" data-type="Bracket">here</a>.

## Possible improvements

1. The UI is a bit funky to my eyes now. I would like to tune the shadows and borders a bit.
2. Code logic for switching between shiny, gigantamax and two genders if available is a very long and a refactor is needed.
