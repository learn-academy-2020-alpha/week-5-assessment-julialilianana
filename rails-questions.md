# ASSESSMENT 5: Rails Practical Questions

1. What is the command to create a new Rails application with a Postgres database?

rails new app_name -d postgresql -T

2. Explain each section of the following route:  get '/library/:id' => 'book#show'

get - HTTP verb that aligns with Read in CRUD
library - method being called
:id -a param
book - book controller
show - method called show

3. Oops, I forgot to add a foreign key to my model. Describe the steps to remedy this mistake.

$ rails generate migration add_foreign_key_to_model



4. What is the command to generate a Rails model for a person table with columns named shirt, pants, and shoes?

$ rails generate model Person shirt:string pants:string shoes:string



5. I want to add validations to the model from question 4 to ensure no one can make a new entry without data in all the columns. How do I do that?

class Person < ApplicationRecord
  validates :shirt, :pants, :shoes, presence: true
end