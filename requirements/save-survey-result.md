# Answer survey

> ## Success case

0. :x: Receive **PUT** request on route **/api/surveys/{survey_id}/results**
1. :x: Validate if the request was made by an **user**
2. :x: Validate parameter **survey_id**
3. :x: Validate if field **answer** is a valid answer
4. :x: **Create** a survey result with the provided data if there is no result
5. :x: **Update** the survey result with the provided data if there is already an answer for that
6. :x: Return **200** with the survey result data

> ## Exceptions

0. :x: Returns error **404** if the API does not exist
1. :x: Returns error **403** if the request was not made by an user
2. :x: Returns error **403** if the survey_id in the URL is not valid
3. :x: Returns error **403** if the survey answer from the client is invalid
4. :x: Returns error **500** if there is an error while creating survey result
5. :x: Returns error **500** if there is an error while updating the survey result
6. :x: Returns error **500** if there is an error while loading the survey