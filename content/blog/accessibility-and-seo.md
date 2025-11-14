---
title: 'Accessibility and SEO'
description: 'Thought on the relationship between accessibility, SEO and optimization for LLMs'
date: 2025-11-08
---

Latelly, as part of my day job I had to do some research on two issues, web accessibility and search engine optimization in relation to AI and LLMs. Accessibility is, of course, an old concern, but recently it became more urgent for legal reasons. Visibility to LLMs is a hot issue and will probably remain so since things are far from settling down.

Each issue has its own specifics and techniques, but what I found interesting is how many things they have in common. As with good old SEO, visibility to LLMs is all about making the website content readable and understandable by machines. But the same is true for a large part of accessibility issues. It is about making the website readable by a screen reader.

I am old enough to remember the internet before smartphones. When it was all about someone viewing a website on a desktop screen with a keyboard and a mouse. At that moment web design was still very close to graphic design for print. Just underline links, stick a navigation menu at the top and you could turn your brochure to a website.

Smartphones and tablets were the first wake-up call. Suddenly you could not know the size of the user’s screen. It took some time to accept this and stop trying to force our designs to every device. Little by little it became clear that you could make fewer assumptions about the website’s users.

Accessibility has to do with the same issue, you can not assume much about the user. Maybe they don’t use a keyboard or a mouse or any pointing device. Maybe they just use voice control. Maybe they can not see some color differences that seem clear to you. Maybe they can not understand the meaning of icons that seem obvious to you. Maybe they just don’t look at the screen at all and they just listen to a screen reader. The website’s content should somehow be available to all.

Then comes SEO which takes things one step further. What if the user is not even human? What if it is just software? A bot that crawls your website and tries to index it for further use. Suddenly design does not count at all, in most cases it creates more problems than it solves.

With LLMs things become more difficult and easier at the same time. LLMs are supposedly more clever than bots so they can understand the content of a website easier. However, we are more demanding of them so they need to understand far more than a bot.

There are, of course, many specific solutions to all these. Aria roles for accessibility, meta tags and JsonLD for SEO, llm.txt for LLMs. However, there is one thing that serves all these concerns and it can get you a long way if used properly. And that is no other than the foundation of a website, HTML. In the age of Javascript frameworks we tend to forget about poor old HTML. Its job is exactly what we need. To give structure to content in a form that is machine readable.

Use proper HTML. Don’t use divs everywhere. HTML has many tags that are all understandable by non-human users. If you don’t sacrifice HTML integrity to design then you are more than half way there to having an accessible, SEO friendly and LLM readable website. Aria roles, meta tags and LLM-specific content are all enhancements, not bandages for broken HTML.

It has always been my view that design and development should be as close as possible when you create an app or a website. It is important to design with the user in mind, every user. It is important to try and think of your design as an HTML structure. It is also important to code with the user in mind. Every user. To understand the design’s intent and to find the proper HTML structure for it.
