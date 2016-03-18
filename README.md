# Overview

This is a prototype for [Daemo](https://daemo.stanford.edu/)'s Task Feed implementation for [Stanford Crowd Research](crowdresearch.stanford.edu)'s Winter Milestone 9. The project is built on [Meteor](meteor.com) for fast prototyping and a combined Bootstrap frameworks ([bootswatch:paper](bootswatch.com/paper/) and [bootstrap-material-design](https://github.com/FezVrasta/bootstrap-material-design)) that mimics the look and feel of Material Design (partly because it took me too long to get Polymer running, so I went with the fastest possible hack).

The most notable changes from the current Daemo Task Feed would be (compared to this prototype):

1. **Resized card size to minimize unused whitespace.**
    - The width of the card was too long that it took considerable effort of user's eyes to glance through information quickly because they have to scan the card from left -> right.
1. **Toned the shadows that accompanied the cards to be less visible.**
    - The margin between the cards were too close that the shadows visibly form a line that's too distinctive (because of the strong contrast of white cards + dark lines)
1. **Switched the position of the 'Accept Task' button (Top-Right to Bottom-Right)**
    - Because the accept button being up there does not match the user's expectation (it's an unusual flow)

## Installation

```
git clone https://github.com/leonardykris/daemo-task-feed.git
cd daemo-task-feed
meteor run
```

## Demo

The project is live at: [http://daemo-task-feed-leonardy.meteor.com/](http://daemo-task-feed-leonardy.meteor.com/)

## Screenshot

![Task Feed](http://i.imgur.com/kR0mB8X.png)
