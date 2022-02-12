# MERN-App
Fullstack MERN ToDo List Applications built with the MERN stack.\
Currently, it only has the backend (wich is fully functional), while the frontend is in development.

### Backend Models
It uses only one simple model named Task. For any action (except GET), a request body must be sent wich will be converted to and from this Task model, and has the following structure:
```
{
  "title": "[titleName]",
  "description": "[taskDescription]"
}
```

### Backend Operations
Application has basic CRUD actions, which can be tested using any API platform like Postman, Insomnia or Swagger.\
From  **"[hostname]/api/tasks"** the following actions are valid:
* **/** -> GET: returns all Tasks stored in the Database.
* **/:id** -> GET,POST,PUT,DELETE: returns, creates, updates or deletes (respectively) the specified task by its ID.

**Examples:** \
**PUT -> http://localhost:9999/api/tasks/6206f411229a98f23a84369c** will update the IDd task, \
**POST -> http://localhost:9999/api/tasks/** will create a new task. Both work provided the request body is built properly.


## Tech Stack
- Styling: -
- DataBase: MongoDB
- Backend: ExpressJs
- Frontend: ReactJs
