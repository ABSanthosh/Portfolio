---
title: Surge 2022
date: 2022-09-12
tags:
  - Code
  - Markdown
  - University
---

<h1 class="MdRow JustBetween W100">
  {title}
</h1>

An event management web app for Shiv Nadar University's first ever annual sports meet. The web app handled 1000+ registrations and 30k+ unique page visits before the event. Here's how I lead a team of 5 developers and delivered a stable user experience without any downtime.

### App requirements

The app required the following features:-

#### User Side

- Display all the events
- Allow people to register/sign-in
- Let users to access past registrations
- Register for new events
- Make payments through the website

#### Admin Side

- See all user details
- Manage all registrations
- Find and manage each team members separately based on various sports
- Aggregate all the money processed

## Development process

Since it was the first edition of Surge, there were no prior tech, standard or code base for reference. Most of the features kept changing based on requirement.

Having the event in November 2022, we only had 5 months to make the website from start to end.  
We first started working on the color scheme and the design for the website as the website is not only used for registration, but also for sponsors to see while the event is pitched.

<!-- TODO: add figma screenshot -->

### Register/Signin

This is the most important part of the website as all the user related activities like team formation, event registration and payments require the user to be signed in.

Instead of using third party auth solutions, I made one from scratch. This also included an OTP system to verify if the email that the user provided is real or not.

#### OTP system

- Using a new gmail account and nodemailer, a mail is sent to the user's email with an OTP generated in the API endpoint `/api/auth/send-otp`.
- To check is the OTP entered by the user, I'm sending a hashed version of the OTP as a response of the `/api/auth/send-otp` endpoint.
- Later in the frontend, using the same `bcrypt` library, I un-hashed it and matched it with the user's input.

We also check if the user already exists and return a `400` status code from the endpoint to indicate that user can try logging in instead or registering.

Only flaw in this is that sending multiple mails which gets closed quickly(after copying the code) or deleted from the user's inbox flags the mail ID as spam and occasionally the OTP mail ends up in spam folder.

#### Sign In

- I used React Context API to make an Auth Context from which whole client side can access authenticated user's details like mail ID, phone number, etc. Using the Context API helps avoid prop drilling and sets single source of truth.
- `/api/auth/login` API route uses bcrypt's `compareSync` function to check if the salted user password is same as the encrypted password from the client side. If it matches, user's full data is shared as response. If the email doesn't exist, it returns a "No account found. Try Signing in" message.
- `/api/auth/logout` API route just deletes the session in the response object.

All the session data for all the protected routes are saved and managed by `iron-session`.

### Event management

Here's a simple illustration to explain the schema used

-> Users can have multiple `Team[]`  
-> Each `Team` will have multiple `TeamMember[]`  
-> Each `TeamMember` have a `PlayerType` attribute: `PLAYER` | `CAPTAIN` | `ADDITIONAL`  
-> Each `Team` will have an `Event` that they are associated with  

<br/>
and by proxy
<br/>

-> Each `Event` will have a list of teams registered.
-> Each `Team` will have list of `TeamMember[]`.  
-> Each `Team` has a `registeredBy` attribute which matches with the user who registered the team.  
-> Each `Team` also has a `PaymentStatus` attribute which stores the payment details which are then read by the admin side and changed to appropriate status once the payment is confirmed.

<hr/>

After 5 long months, countless meetings and numerous design iterations, the website was ready to take registrations. But we're only halfway done. At this point I've lost all the 4 developers from my team and everyone from design team stopped contributing and I've single handedly been working tirelessly to meet with the core team and making the designs on the fly as I built the frontend.

Now, I possibly can't just sit with the finance team to check if they received all the payments and do `ALTER TABLE Team SET paymentStatus="PAID" where Team.teamId="xyz";` to each and every player. That would be a nightmare to even do for few teams(foreshadowing).

This is where I got introduced to ReTool to build an interactive dashboard for the database so core team can also update the status without asking the developer to do so.

### ReTool

<!-- TODO: Insert retool UI -->

I spent an afternoon learning how to use retool and built a dashboard will all the bells and whistles that the core team might need.

You can do everything. Add new user? Done, Delete a team member? Done, Add a new team captain? Done, Sort teams by university? Done, Show all teams registered to an Event? Done, Show all the team members of a team? DONE!

"But but we want a feature that we'll only use it once and it has a lot of conditions",
:sigh, yes, I registered a handful of teams, added and removed team members to a handful of teams and removed duplicate registrations because few people "accidentally" booked the same 12 member team twice, filling name, mobile number and email for each member.

I had to register new teams so many times that I had to add a `|| password === process.env.ADMIN_BYPASS` to the login logic and give the ADMIN_BYPASS to the core team so I can retire from doing the same time over and over. With this, the admin team can log into any account and change the details which the user asked us to over WhatsApp. The only time backdoor access was helpful.

## Conclusion

I had spent an ungodly amount of time to this project, longest i've missed classes, most number of meetings, most number of design iterations and most importantly, most fun I had.

The stress that so many people are going to use my website to register was so good and helped me focus on the code so much better.

I didn't hear it from players from other universities but some people from the core team said that my website had the most smoothest registration flow they have seen in any sports fest website and that's all I wanted to hear before I slept for 2 days.

To this day, Surge 2022 website is my most favorite project that has had the most positive feedback offline.