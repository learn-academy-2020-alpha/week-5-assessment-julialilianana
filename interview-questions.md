# ASSESSMENT 5: Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own there is always something more to learn.   

1. Rails follows an MVC pattern. What does that mean?

  Your answer: MVC stands for Model View Controller. It is where code of different types are stored

  Researched answer: in the app folder in rails, there are folders for models, views, and controllers. these are to seperate the logic of a full stack code. 



2. What is a gem?

  Your answer: gems are installed to be used with ruby

  Researched answer: gems are a softwhere package that contain Ruby applications or libraries. Gems can extend or modify the functionality of Ruby.



3. Why is it important to have validations in your application?

  Your answer: Validations make sure that proper information is being passed into that application.

  Researched answer: Validation helps protect your application from the input of invalid data. it allows you to set certain rules what is acceptables.



4. Describe a possible relationship between a model called Person and a model called Computer. Based on your description, which model would hold the foreign key?

  Your answer: A person has_many computers. computer belongs_to person. computers would hold the foreign key to help us keep track of what person owns what computer(s)

  Researched answer:  A person has many computers. computer belongs to person. . The foreign key always goes on the belongs_to side. Computers would hold the foreign key to help us keep track of what person owns what computer(s)



5. What is object-relational mapping?

  Your answer: keeping track of how objects are related to each other and organizing them in a way that makes our code more efficient. 

  Researched answer: ORM is a programming technique for that allows for data to be converted between systems using object-oriented programming languages. a translator of data.



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.
- RESTful routes: naming convention that provides mapping between HTTP verbs (get, post, put, delete, patch) to controller CRUD actions (create, read, update, delete). 
- json: is a lightweight format for storing and transporting data. JSON is often used when data is sent from a server to a web page.
- API: Application Program Interface. helps us build software applications
- Endpoints: Are where an API accesses the resources from a request to put together a response.
- Strong params: is a DSL that restricts assigning request parameters to objects to only those permitted.
