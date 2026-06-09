# @n8n-dev/n8n-nodes-motaword

![motaword Banner](banner.svg)

[![npm version](https://img.shields.io/npm/v/@n8n-dev/n8n-nodes-motaword.svg)](https://www.npmjs.com/package/@n8n-dev/n8n-nodes-motaword)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

**Stop writing motaword API integrations by hand.**

Every time you connect n8n to motaword, you waste hours mapping endpoints, defining parameters, and debugging schemas. You copy-paste from docs, fix edge cases, and pray nothing breaks.

**What if connecting n8n to motaword took 5 minutes, not half a day?**

This node gives you **27+ resources** out of the box: **Static**, **Async**, **Blog**, **Commission**, **Continuous Project**, and 22 more: with full CRUD operations, typed parameters, and zero manual configuration.

---

## What You Get

- **Zero boilerplate**: Resources, operations, and fields are pre-configured and ready to use
- **Full CRUD**: Create, read, update, and delete support where the API allows it
- **Typed parameters**: No more guessing field types
- **Built-in auth**: API key authentication, ready to go
- **Declarative**: Native n8n performance, no custom execute() overhead

---

## Install

```bash
npm install @n8n-dev/n8n-nodes-motaword
```

**Or in n8n:**
1. **Settings → Community Nodes → Install**
2. Search: `@n8n-dev/n8n-nodes-motaword`
3. Click **Install**

---

## Quick Start

1. Install the node (above)
2. Add credentials: **motaword API** → paste your API key
3. Drag the **motaword** node into your workflow
4. Pick a resource → pick an operation → done.

That's it. No configuration files. No code. It just works.

---

## Resources

| Resource | Operations |
|----------|------------|
| Static | Get available endpoints, Get list of supported file formats, Get list of supported languages, Get openapi yaml representation of our api |
| Async | Get download result of an async operation |
| Blog | Get blog posts  ordered by created desc by default |
| Commission | Get returns a commission list of current client, Post returns a commission list of current client |
| Continuous Project | Get view continuous projects, Post create a continuous project, Delete a continuous project, Get view a continuous project, Post update a continuous project, Get jwt token to be used in analytics dashboards, Post savecollect analytics data from active widget, Post complete continuous project, Post get quote for documents, Post complete a continuous project document, Post get a quote for a continuous project document, Post get quote for languages, Post complete continuous project language, Post get quote for language, Delete subscription for continuous project, Get subscription for continuous project, Post create subscription for continuous project, Put update subscription for continuous project, Put update subscription payment method for continuous project, Post instantly translate your content, Get view continuous documents, Post add a new document to your continuous project, Post get continuous project document progress for multiple ids, Get view a continuous document, Post update the document, Get monitor progress of a continuous document, Get invoices of a continuous project, Get monitor progress and status of a continous project, Get view active widgets, Post create a new active widget, Delete a single widget for this active project, Get view an active widget, Post update active widget settings, Post reset active widget token |
| Strings | Post get a list of strings and its translations in the project, Get view strings their translations in a continuous document, Get view strings and translations in continuous project, Delete clear translation cache, Get view cached strings translations in continuous project, Post recache translations, Get view strings and translations of a document, Get view strings and translations of a document for target language, Get view project strings and translations, Post download project translation memory, Get check translation memory packaging status, Post download languagespecific project translation memory, Get check languagespecific translation memory packaging status, Get view strings and translations for target language, Get view account strings translation memory, Put update string translation, Post download account translation memory, Get check account translation memory packaging status |
| Corporate | Get view your corporate account, Get view available permissions, Get view user groups, Post create or update a corporate user group, Get view users, Post create or update a user, Get a list of corporate accounts, Get details of this corporate account, Get a list of available permissions for this corporate account they are used when assigning permissions to corporate users, Get a list of user groups for this corporate account, Post create or update a corporate user group for this corporate account, Get a list of users for this corporate account |
| User | Delete your account, Post downgrade proofreader, Get view your vendor earnings, Post freeze account, Post log users current location this data is used in our intelligent project manager for various data analysis including project prioritization for vendors and account validation, Post make proofreader, Get view your account info, Post update your account info, Post subscribe to push notifications, Post unsubscribe notification, Post update your account password, Get view your payment and billing info, Post update payment info, Get view your permissions, Post upload profile picture, Post sends email confirmation email for current user, Get view your vendor responsiveness, Get view your account statistics, Post defreeze your account, Get view your user groups, Get a list of platform users, Post create a new user, Post filter vendors based on provided parameters, Post sends password reset email to the users registered email address, Get returns all vendor tags for vendors filter, Get user information including client or vendor specific info, Post update user, Post approve vendor application, Delete requester account, Post downgrade user proofreader, Get returns your vendor earnings includes realtime earnings from ongoing projects and fixed earnings from completed projects also includes total earnings and string edits, Post freeze requester account for project notifications, Post make user proofreader, Post subscribe user notification, Post unsubscribe user notification, Get view users payment and billing info, Post update user payment info, Get returns a list of permissions that this user is authorized for, Post upload user profile picture, Post reject vendor application, Post sends email confirmation email for a user, Get returns a users vendor responsivity stats, Get returns a users client and vendor statistics this used to be called summary deprecated, Get returns the language pairs that the user has ordered most, Get returns a users project statistics, Post suspend user, Post unfreeze requester account for project notifications, Get returns a list of user groups that this user belongs to, Post update user group |
| Document | Get view your documents, Get a list of subjects of projects, Get view a single document, Get view a document translation progress, Post regenerate preview and return preview url for given file, Get find documents similar to this document, Post use the translation of given source manual document as manual draft source for the given target document, Post use the translation of the given manual document as a regular file, Get a list of your documents |
| Glossary | Get download account glossary, Post create or update the account glossary, Get view glossaries, Post upload a glossary file, Delete a glossary, Get view a glossary, Put update a glossary, Get download a glossary |
| Integrations | Get generate a new access token for motawords integrations service |
| Invitation | Post get vendor list for compiled invitation needs |
| Machine Learning | Post get a delivery prediction for a project |
| Pam | Post sends a message to chat, Get the pam profile of a client for this client id, Get completion report data of a project |
| Payment | Post reset payment code, Post manage automatic charges on your credit card, Get view saved credit card, Delete credit card, Post reset credit card payment code |
| Project | Get view your translation projects, Post create a new project, Get quote id, Get list projects as a vendor, Delete your translation project, Get view a translation project, Put update project info and settings, Post assign a cm to the project, Get trigger a call to your callback url related to this project, Post cancel your translation project, Post deliver project, Get download your translated project, Get download your translated project language, Post send a quote email, Get view project invoice, Get download project invoice html, Get download project invoice pdf, Post launch your translation project, Post package your translated project, Get track translation packaging status, Post package your translated project language, Get view progress of a project, Post recreate your translation project from scratch this is a risky action you will lose current translations, Post submit feedback report for a project, Get a list of vendors, Get a list of uservendor projects |
| Activity | Get sales activities for a project, Post insert sales activity for a project, Get monitor project activities, Get view an activity, Post submit comment to an activity, Get view activity comments, Get view all project comments |
| Project Webhooks | Delete project webhooks, Get view project webhooks, Post update project webhook, Put update project webhook |
| Project Document | Get view project source documents, Post upload a new document, Delete the document, Get view a project source document, Post update the document, Get download a project source document, Get download translated document |
| Style Guide | Get view style guides, Post upload a new style guide, Delete a style guide, Get view a style guide, Put update a style guide, Get download a style guide, Get download account style guide, Post create or update the account style guide |
| Report | Post returns available options for selected timeframe, Post language pairs report, Post projects report, Post generate a qa report for given filter, Post company users report |
| Search | Get search everything in your account, Post reindex for search all of the client source and translation documents, Get check reindex status of the client source and translation documents |
| Stats | Get returns the total commissions stats, Post returns the total commissions stats by report filter, Get view your popular language pairs, Get view your project statistics, Get view your translation statistics |
| Surveys | Get survey questions in given scope and type, Post survey answers for scope and type |
| Auth | Post retrieve an access token |
| Vendor | Post get a list of vendors available for the criteria given |
| Default | Delete clear cache by key |

---

## Why This Node?

**Without this node:**
- Hours of manual API integration
- Copy-pasting from motaword docs
- Debugging auth, pagination, error handling
- Maintaining your own client code

**With this node:**
- Install → configure → use. 5 minutes.
- Auto-generated from the official motaword OpenAPI spec
- Always up to date when the API changes
- Native n8n performance

---

## Auto-Generated
This node was auto-generated from the official **motaword** OpenAPI specification using
[@n8n-dev/n8n-openapi-node-ultimate](https://github.com/kelvinzer0/n8n-openapi-node-ultimate),
then validated against the live API so you get accurate types and real parameters, not guesswork.

When the motaword API updates, this node updates too.

---

## Support This Project

If this node saved you hours of work, consider supporting continued development, new APIs, better error handling, and faster updates.

[![Keep It Moving.](https://crypto-donate.insidexofficial.workers.dev/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0/badge)](https://n8n-code.github.io/membership/#/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0)

---

## License

MIT © [kelvinzer0](https://github.com/n8n-code)
