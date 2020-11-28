# List surveys

> ## Success case

1. :x: Receive a **GET** request on route **/api/surveys**
2. :x: Validate if the request was executed by an **user**
3. :x: Return **204** if there are no surveys
4. :x: Return **200** with the survey data

> ## Exceptions

1. :x: Return error **404** if the API doesn't exist
2. :x: Return error **403** if the request doesn't come from an user
3. :x: Return error **500** if there is an error while listing the surveys