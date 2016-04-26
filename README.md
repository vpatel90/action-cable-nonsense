## README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions



## Raw history log of steps taken to get this up and running
I should comment these lines

   rails new socketfun
   rails g scaffold user username
   rails g scaffold message body user:belongs_to
   rake db:create db:migrate
   rake db:seed
   cd socketfun
   rails g channel test
   mv app/assets/javascripts/chat.js app/assets/javascripts/channels/chat.js
   git init
   git commit -m "Initial Commit of Action Cable Chat Application v 0.0.0.0.1 Mega Ultra Edition."
   heroku create action-cable-spaceshipppp
   git commit -m "fixing heroku gems."
   git push'\n'
   heroku open
   heroku run rake db:migrate db:seed
   vim Gemfile
   git commit -m 'Adding redis gem.'
   heroku addons:create redistogo
   heroku addons:docs redistogo
   git commit -m "Telling rails to use the new fancy heroku add on."
   heroku run rails c
   heroku config:set REDISTOGO_PASSWORD=******REDACTED******
   git commit -m "Adding redis config settings."
   git commit -m "queue perform."
   ls -al
   heroku config
   rails c
   mv app/assets/javascripts/cable.coffee app/assets/javascripts/cable.coffee.erb
   git status
   git commit -m "Point at heroku app on production."
   git push
   rake -T
   heroku logs
   vim Procfile
   git commit -m "Adding correct puma config."
   git commit -m "Maybe I'm pointing to the wrong url."
   git commit -m "Turning off security ftw."
   rails s
   git log
   git commit -m "Turning security back on so my server will work."
   heroku restart
   heroku config | grep REDISTOGO_URL
   irb
   vim
   git add .
   git commit -m "Its better if you do it correctly." -m "Adding erb tags around ENV vars in cable.yml"
   git push heroku master
   heroku logs -t
   hub create action-cable-nonsense
   git push origin master
