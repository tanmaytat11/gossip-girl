

**Gossip Girl**
===========

Gossip Girl is an application powered by [MeteorJS](https://www.meteor.com/) that notify its users about the gossips of other users in real-time. A user can subscribe to many users whose gossips the user is interested in. The application updates itself with the new content automatically so as to keep the real-time notifications coming without delay. It is "hot code push" technology of Meteor that makes this happen. Check out the apllication on [https://gossipgirl-sc.herokuapp.com/](https://gossipgirl-sc.herokuapp.com/).

Write Up:
-------------
I started the assignment by first discussing the problem with my friend. He advised me use the concepts of socket and build the application. I started exploring sockets and how to tie the application together. While exploring, I remembered that I made a simple To-do List app using MeteorJS which followed the auto reload "hot code push" technology so I shifted my focus to MeteorJS and started building the app. I created 2 collections (users collection was auto created by the accounts package of meteor), one for the gossips and the other holding the information that how many users was a user subscribed to ie one to many relationship. All the databases were connected via the id field of the users database. Using a combination of the MongoDB queries I was able to complete the assignment.

Usage Manual:
-------------

1) Install MeteorJS:
```sh
https://www.meteor.com/install
```

2) Clone the project:
```sh
git clone https://github.com/tanmaytat11/gossip-girl.git
```

3) Change to the clonned project directory
```sh
cd gossip-girl
```

4) Install the dependencies (It might take a while)
```sh
meteor npm install
```

5) Run the project
```sh
meteor run
```

That's IT!
The gossip-girl application should be running on
[http://localhost:3000/](http://localhost:3000/)
    
Make sure the port is free

Go ahead create user accounts, subscribe to other users for interesting gossips and get these delivered to you in real time.

**See the YouTube video for detailed explanation.**
[https://youtu.be/wMD-pglgeKE](https://youtu.be/wMD-pglgeKE)

Resources & References:
-------------
1) [Rishabh Saxena](https://github.com/rishabhs95): For helping me out and pointing me in the right direction.
2) [karlseguin/the-little-mongodb-book](https://github.com/karlseguin/the-little-mongodb-book): For all my MongoDB related queries.
3) [Meteor Tutorials](https://www.meteor.com/tutorials): I learned about Meteor following these tutorials.
4) [Saurav Tiru](https://github.com/AnonyXcali): For testing out the application and his valuable feedback.
5) [Gautham Elango's Article](https://medium.com/@gge/deploy-a-meteor-1-3-application-to-heroku-cda1f68ca20a#.wqzam3i1b): Tutorial on how to deploy Meteor app to Heroku.
6) [Heroku](http://heroku.com/): For deploying the application.
7) [mLab](https://mlab.com/): For hosting MongoDB.

> Written with [StackEdit](https://stackedit.io/).
