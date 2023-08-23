---
title: Markdown reference
date: 2022-09-12
tags:
  - Personal
  - Popular
---

<script context="module">
  import { base } from "$app/paths";
</script>

## You can find implementation for custom markdown styles here

## `<details>` tag

<details class="FancyDetail">
<summary data-just="space-between" data-bg>Version 1</summary>
  <main>
    Hello
  </main>
</details>

## `<img>` tag

<span class="MdRow">
    <figure class="MdFigure">
        <img alt="Verse Lyrics" src="{base}/assets/Images/Articles/01.webp"  loading="lazy" />
        <figcaption>Verse Lyrics</figcaption>
    </figure>
    <figure class="MdFigure">
        <img alt="Verse Lyrics" src="{base}/assets/Images/Articles/01.webp"  loading="lazy" />
        <figcaption>Verse Lyrics</figcaption>
    </figure>
    <figure class="MdFigure">
        <img alt="Verse Lyrics" src="{base}/assets/Images/Articles/01.webp"  loading="lazy" />
        <figcaption>Verse Lyrics</figcaption>
    </figure>
</span>

## `<table>` tag

| Column 1 | Column 2 | Column 3 |
| -------- | -------- | -------- |
| Text     | Text     | Text     |
| Text     | Text     | Text     |
| Text     | Text     | Text     |

## `<a>` tag

<a href="https://www.instagram.com/iamkubic/" target="_blank" class="FancyLink" data-type="Bracket"> @kubic</a>
