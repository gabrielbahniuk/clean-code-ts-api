# Create survey

> ## Success case

0. ⛔️ Receive a **POST** request on route **/api/surveys**
1. ⛔️ Validate if the request was executed by an **admin**
2. ⛔️ Validate required data **question** and **answers**
3. ⛔️ **Create** a survey with the provided data
4. ✅ Return **204**, without data

> ## Exceptions

0. ⛔️ Return error **404** if the API doesn't exist
1. ⛔️ Return error **403** if the user is not an admin
2. ✅ Return error **400** if the question or answers are not provided by the client
3. ✅ Return error **500** if the survey creation generates an error