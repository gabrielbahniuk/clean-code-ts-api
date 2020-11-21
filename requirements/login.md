# Login

> ## Success case

0. ✅ Receive a **POST** request on route **/api/login**
1. ✅ Validate required data **email** and **password**
2. ✅ Validate that field **email** is a valid email
3. ✅ **Search** the user with the provided user and password
4. ✅ Generate an access **token** from user ID
5. ✅ **Update** the user data with the generated access token
6. ✅ Return **200** with access token and username

> ## Exceptions

0. ✅ Return error **404** if API doesn't exist
1. ✅ Return error **400** if email or password are not provided by the client
2. ✅ Return error **400** if the field email is invalid
3. ✅ Return error **401** if an user with the provided data is not found
4. ✅ Return error **500** if there is an error while trying to generate the access token
5. ✅ Return error **500** if there is an error while trying to update the user with the generated access token