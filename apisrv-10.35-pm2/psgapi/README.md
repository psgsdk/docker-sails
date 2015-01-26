# auth

a [Sails](http://sailsjs.org) application


AUTHORIZATION server

1. Usage:

1.1. NEW USER

   Get captcha to be used for new user creation:
   url:    cpt/getcaptcha
   method: GET

   return: JSON 
		- captcha / PNG base64 encoded image
		- key / key string used to verify the captcha code
   
   CREATE command
   url: 	users
   method: 	POST
   body: 	JSON
			- username
			- firstname
			- lastname
			- email
			- password
			- key (captcha key)
			- code (captcha code)
   return: 	JSON
			- id
			- username
			- firstname
			- lastname
			- email
			- phash /protected
			- createdAt
			- updatedAt

1.2. UPDATE USER
   
   Update an existing user:
   url: 	users/<uid>
   method: 	PUT
   header:	HKEY  / see next 2.1 - config files / header used to authorize users updates
   body:	JSON
			- any of next (username, firstname, lastname, email, password)
   return:	JSON
			- id
			- username
			- firstname
			- lastname
			- email
			- phash /protected
			- createdAt
			- updatedAt
1.3. LOGIN

   Used to authenticate the end user with the authorization server:
   url: 	users/login
   method:	GET
   header:	Authorization Basic ( Basic <base64(<user>:<password>)>)
   return: 	JSON
			- id
			- username
			- firstname
			- lastname
			- email
			- phash /protected
			- createdAt
			- hkey / key to be used by the application server to check authorization - expire

1.4. CHKLOGIN

   Used by an application server to check if the user is successfuly authenticated:
   url:		users/chklogin
   method:	GET
   header:	HKEY
      return: 	JSON
			- id
			- username
			- firstname
			- lastname
			- email
			- phash /protected
			- createdAt



2. Used configuration files:
	config/connections.js
	config/authcfg.js

   connections.js
   keep database connection parameters, postgresql is used here

   authcfg.js
   application parameters used outside base ORM and Sails modules
	- redisport: 6379         / Redis server port
    	- redisip: '127.0.0.1'    / Redis server IP
    	- authtime: 60  / timeout for application server to check user authorization / seconds
    	- skey: 'xyz'   / key used to be able to UPDATE the users list (check 1.2)
    	- cptpass: 'Cd6F3Efeq*_1~'  / password used for encryption of strings


   
