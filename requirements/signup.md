# SignUp

> ## Success case

0. ✅ Receive a **POST** request on route **/api/signup**
1. ✅ Validate required data **name**, **email**, **password** and **passwordConfirmation**
2. ✅ Validate that **password** and **passwordConfirmation** are the same
3. ✅ Validate that field **email** is a valid email
4. :x: **Validate** if there is already an user with the provided email
5. ✅ Generate an **encrypted** password (it cannot be decrypted)
6. ✅ **Create** an account for the user with the provided data, **replacing** the password for the encrypted password
7. ✅  Generate an access **token** from the user ID
8. ✅  **Update** user data with the generated access token
9. ✅  Return **200** with access token and username

> ## Exceptions

0. ✅ Return error **404** if API doesn't exist
1. ✅ Return error **400** if name, email, password or passwordConfirmation are not provided by the client
2. ✅ Return error **400** if password and passwordConfirmation are not the same
3. ✅ Return error **400** if the field email is invalid
4. ✅ Return error **403** if the provided email is already in use
5. ✅ Return error **500** if there is an error while generating an encrypted password
6. ✅ Return error **500** if there is an error while trying to create the user account
7. ✅  Return error **500** if there is an error while trying to generate the access token
8. ✅  Return error **500** if there is an error while trying to update the user with the generated access token