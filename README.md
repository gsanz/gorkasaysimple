# gorkasaysimple
Api for assestment saysimple
Here there is an API for the Say Simple Assestment. For executing the API you have to try to do the following :
1- Go to source folder and execute docker-compose up -d . This will start a POSTGRES container
2- Install the project : 
    - Go to the source and install libraries : npm install
    - start the project : npm run start
    - Initialize Database from prisma.schema : 
    execute : 
         npx prisma migrate dev --name "init"
         npx prisma db seed

3- Now you can test the API there have been executed this parts of the assestment :
    - Receiving a new message:
    - Sending a new message
    - Optionally: Receive a status update for a message
    - Setup authentication for all the endpoints

    There have been developed two modules : users (for authentication) (all API is in user.controller) and messages for develop the api of the messages
    (all the api is in message.controller)
    There has also been included a postman folder with the most importants API calls (Assestment CRUD.postman_collection.json)
