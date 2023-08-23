---
title: Verse Lyrics
projectStart: Jun 3, 2020
tags:
  - Personal
  - Popular
  - Android
---

<script context="module">
  import { base } from "$app/paths";
  import Testimonials from "@/components/VerseReview/Testimonials.svelte";
</script>

<h1 class="MdRow JustBetween W100">
  {title}
  <a href='https://play.google.com/store/apps/details?id=com.absan.verse&hl=en&gl=US&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1' target="_blank" rel="noopener noreferrer"><img alt='Get it on Google Play' height="70px" src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/></a>
</h1>

A simple Kotlin based Android application that helps users to fetch lyrics of songs played in Spotify automatically.

<details class="FancyDetail">
<summary data-just="space-between" data-bg>In a rush? Here's tl;dr</summary>
<main>    
    I developed a Kotlin-based Android app that fetches song lyrics automatically from Spotify. When Spotify launched in India, I found myself searching for lyrics frequently. I aimed to make the process more efficient by automating it.
    <br/><br/>
    The app works by utilizing the Android Media Notifications API to capture song names and artist names. It then queries Google programmatically for lyrics. The initial version included all logic in one file, and it successfully retrieved lyrics from Google search results.
    <br/><br/>
    The user interface featured a minimalist design. Additionally, I addressed annoying repeating ads on Spotify by creating a feature that detected and muted ads. The app gained attention after posting it on Reddit, boosting its reputation and downloads.
    <br/><br/>
    I continued to enhance the app based on user feedback, adding features like dark/light mode, auto-scrolling lyrics, font size options, and more. Despite my transition away from Android, the project remains a valuable addition to my resume with over 1000+ downloads and a 4.8-star rating on Play Store.

</main>
</details>

## Why did I build this?

If you didn't know, Spotify launched in India sometime in late February 2019. I wasn't an avid music enjoyer like I am today so when I wanted songs, I sailed the high seas and downloaded a bunch of my favorites. It wasn't all bad. No ads and no unexpected songs. But some people like my friend <a href="https://www.instagram.com/iamkubic/" target="_blank" class="FancyLink" data-type="Bracket"> @kubic</a>, who makes music, was using Spotify since long ago presumably using a VPN.

When it launched in India, I started using it on my phone for a few months and found myself googling the lyrics more often. It's not big deal right? like, I'm barely spending a few seconds to type the song name and adding `lyrics` keyword so google returns the lyrics.

<br/>
But you know...
<figure class="MdFigure W100">
    <img alt="Automate meme" src="{base}/assets/Articles/projects/verse-lyrics/automateMeme.jpg"  
    width="420px" loading="lazy" />
    <figcaption>Meme</figcaption>
</figure>

<br/>
<br/>

## How does it work?

Well, I just explained it. What are required for getting a song's lyrics?

- Song name
- Artist name _(optional but helps narrow down the search)_
- `lyrics` keyword

Remember, I'm doing this so I don't have to type in the song name so we need to get the name of song that is played in spotify automatically with the least amount of effort.

### Research

Now that we know what we want, have to find ways to get it. Where do we see song names and artist name? Notifications. This is more of a brute force way.

Fortunately, Spotify has a public API <a href="https://developer.spotify.com/documentation/android/tutorials/android-media-notifications" target="_blank" class="FancyLink" data-type="Bracket"> Android Media Notifications</a> which uses Android's <a href="https://developer.android.com/reference/android/content/BroadcastReceiver" target="_blank" class="FancyLink" data-type="Bracket">BroadcastReceiver</a>. You can use this to subscribe to what's happening in Spotify. This is exactly what we need.

The API exposes these metadata:

| Metadata | Description                         |
| -------- | ----------------------------------- |
| id       | A Spotify URI for the track         |
| artist   | The artist name(s) of the track     |
| album    | The album name of the track         |
| track    | The track name                      |
| length   | The length of the track, in seconds |

We got the main and only ingredient. Now we need to find a way to get the lyrics. Like I said earlier, I just google the lyrics when I need them so why not do the same thing programmatically?

### Implementation

In the very first version uploaded to playstore. All the logic was in a <a href="https://github.com/ABSanthosh/Verse-Lyrics/blob/5a8f5d31d9e084b6c5da610e78252dc331204ebf/app/src/main/java/com/absan/verse/MainActivity.kt" target="_blank" class="FancyLink" data-type="Bracket">
single file</a>. Code quality who? It worked and I didn't know any better since I didn't follow any tutorial.

The logic was simple.

- Get the song name and artist name from the API
- Build a query string,
- Somehow get the HTML of the google search result page
- Parse the HTML to get the lyrics

```kt
id_link = "https://www.google.com/search?q=" + URLEncoder.encode(
            songname,
            "utf-8"
        ) + "+" + URLEncoder.encode(an, "utf-8") + "+" + "lyrics"
```

and you get something like this:

```https
https://www.google.com/search?q=teeth+5+seconds+of+summer+lyrics
```

And there you have it

<span class="MdRow">
    <figure class="MdFigure">
        <img alt="Verse Lyrics" src="{base}/assets/Articles/projects/verse-lyrics/LyricsPage.png"  loading="lazy" />
        <figcaption>Google results page</figcaption>
    </figure>
    <figure class="MdFigure">
        <img alt="Verse Lyrics" src="{base}/assets/Articles/projects/verse-lyrics/LyricsPageHTML.jpg"  loading="lazy" />
        <figcaption>Results page HTML</figcaption>
    </figure>
</span>

<br/>
<br/>

As you can see, all the lyrics are displayed in a `<span>` tag with the attribute `[jsname='YS01Ge']`. So all we have to do is parse the HTML and get the text inside the `<span>` tag with the attribute.

<br/>

```kt
var ua = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36"
Jsoup.connect(id_link).userAgent(ua).get().run {
  val elements: Elements = select("[jsname='YS01Ge']")
    //println(elements)
    if (elements.size != 0) {
        select("[jsname='YS01Ge']").forEachIndexed { index, element ->
            var el = element.toString()
            var line =
                el.replace(("<span jsname=" + '"' + "YS01Ge" + '"' + ">"), "")
            line = line.replace("</span>", "")
            runOnUiThread(fun() {
                if (line_count >= 0) {
                    lyrics.append(line)
                    lyrics.append("\n")
                    lyrics.append("\n")
                    lyrics_appended = true
                } else {
                    line_count++
                }
            })
        }
    }
}
```

This is a very rudimentary way of doing it but that's all it required. Now all that is left is to show it in the app.

## App design

I was not really a UI person but always had a knack for minimalism so that's how my first app design was. A simple screen that has lyrics.

<span class="MdRow W100">
     <figure class="MdFigure">
        <img alt="Version 1 home page" src="{base}/assets/Articles/projects/verse-lyrics/v1Demo.gif"  loading="lazy" width="275px" />
        <figcaption>v1 Home page</figcaption>
    </figure>
</span>

<br/>

Pretty fancy for a first version right? But wait, what is the "Block ads" button doing over there?

## Annoying ads

If you've spent anywhere near 3 minutes on Spotify, you would know how annoying their repeating ads are. I still can recite the ads by heart.

There were many open source apps that "blocked" ads or basically detect when ad is played and mute the phone and unmute when the ad is over. But they only had one function and why would I install someone's app if I can make my own? So I did.

### How does it work?

Simple. There are multiple ways to detect when an ad is played.

1. Using the Spotify API to note the length of the song, then if we don't get a new intent from the broadcast receiver after the song length, we can assume that the song is an ad.

2. Or even simple(but prone to many issues) is reading the notification text and checking if it contains the word "ad". This will break if the notifications are turned off.

I won't go into the implementation here so if you want, you can check it out <a href="https://github.com/ABSanthosh/Verse-Lyrics/blob/V3/app/src/main/java/com/absan/verse/helpers/classes/Logger.kt" target="_blank" class="FancyLink" data-type="Bracket">here</a>.

## Further development

When I first published it to playstore, I didn't expect anyone to use it. I made it for my specific use case but why not publish it to playstore? I mean, you have to pay $25 to publish an app to playstore so I might as well make it worth it. I also posted about it on reddit and it kinda blew up.(I won't share my reddit account here but the post got 355 upvotes and 73 comments and a shit ton of feedback). I would say that really boosted my app's reputation in playstore.

Everyday, I would wake up and see the number of downloads increase by 10-15 and it was the ✨best✨ feeling. Like I'm just a student who made my first android app and people are downloading it?? Damnn.

Downloads were from all over the world. India, United States, Philippines, United Arab Emirates, Argentina, Australia, Aruba, Ghana, Italy, Nigeria, Pakistan, South Africa.

I actually didn't care what most of the graphs means in the console dashboard. I just like looking at them going up and up.

<span class="MdRow W100">
     <figure class="MdFigure">
        <img alt="conversion rate" src="{base}/assets/Articles/projects/verse-lyrics/conversionRate.png"  loading="lazy" />
        <figcaption>Conversion rate</figcaption>
    </figure>
</span>

<br/>

Just look at it!

## Testimonials

Every time I get a comment on playstore, It make my day. Like you install an app and you use it. You don't have any obligation to leave a comment but you do. That's just amazing. Obviously I'm going to share all of them here, why do you ask?

<Testimonials />

Positive or negative, I like all of them!

## Other features

I also added a few other features that has been requested by users.

- Dark mode/ Light mode
- Auto scroll lyrics(although it's not perfect)
- Better UI
- Font size change(4 sizes, grape, apple, mango, banana, pineapple, watermelon--inspired by reddit)
- All google fonts available
- Added Buy me a coffee button as requested by a user through email

## Conclusion

This project started as one to solve my problems and along with it, it has been a great addition to my resume now that there are 1000+ downloads and 4.8 star rating on playstore. I'm probably done with this project as I don't use android anymore and lyrics is added to Spotify in most countries now.
