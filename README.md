# NodeJS chat rest API
NodeJS chat rest API


1. Make sure mongo instance is running // `mongodb://localhost:27017/chat`
2. `npm i`
3. `npm start` (default port is 7777)

**Routes:**

_1.Users:_

1.1 `GET` `http://localhost:7777/api/users/`  _to get all users_

1.2 `GET` `http://localhost:7777/api/users/:id` _to get user with id_

1.3 `POST` `http://localhost:7777/api/users/` _to create user_

1.4 `PUT` `http://localhost:7777/api/users/:id` _to update user with :id_

1.5 `DELETE` `http://localhost:7777/api/users/:id` _to delete user with :id_

_2.Messages_

2.1 `GET` `http://localhost:7777/api/messages/` _to get all messages_

2.2 `GET` `http://localhost:7777/api/messages/:_id` _to get message with_ :__id_ 

2.3 `POST` `http://localhost:7777/api/messages/` _to create message_

2.4 `PUT` `http://localhost:7777/api/messages/:_id` _to update message with_ :__id_

2.5 `DELETE` `http://localhost:7777/api/messages/:_id` _to delete certain message_


_3.Contacts_

3.1 `GET` `http://localhost:7777/api/contacts/:id` _to retrieve contact list for user with :id_

[POSTMAN COLLECTION](https://www.getpostman.com/collections/ea57dce5665afab67331)
