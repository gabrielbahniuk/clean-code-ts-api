# List surveys

> ## Success case

0. ✅ Receive a **GET** request on route **/api/surveys**
1. ✅ Validate if the request was executed by an **user**
2. ✅ Return **204** if there are no surveys
3. ✅ Return **200** with the survey data

> ## Exceptions

0. ✅ Return error **404** if the API doesn't exist
1. ✅ Return error **403** if the request doesn't come from an user
2. ✅ Return error **500** if there is an error while listing the surveys