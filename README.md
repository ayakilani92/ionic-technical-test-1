


# **Mobelite: Ionic technical test**

## Get started

 

 1. Create a repository on your github account

	> Create a github account on https://github.com if you didn't have an account

 2. Clone the project from this repo https://github.com/amineD200/ionic-technical-test.git
	``` bash
	> $ git clone https.... 
	```
 3. Create a new branch develop 
	``` bash
	> $ git ...
	```
4. Merge the master into develop branch 
	``` bash
	> $ git ...
	```

## Requirements:
-  Commit related messages.
- You should only commit code when a task or feature is completed, don't commit half-done work or a lot of tasks at the same time.
 - Write good commit messages, follow this template:
    > task-number message 
     e.g: * MITT-1 create the page listPosts... and add component... 
 - The code should be :
	  - well-commented
      - well-organized (Use services, ...)      
 - Don't put the whole code in one file.
 - Use the ionic components. 

#The APP
We want to create an hybrid application for our blog. 

## The API:

- Get POST's list (GET)

	```
	https://jsonplaceholder.typicode.com/posts
	```
- Get Post by ID  (GET)
	```
	https://jsonplaceholder.typicode.com/posts/3
	```
- Get comments By Post ID (GET)
	```
	https://jsonplaceholder.typicode.com/posts/1/comments
	```

## Tasks:



 - [ ] MITT-1: Create the Page listPosts to show the posts with these informations: 'title'
Body preview limited to 200 character and a 'readmore' Button.

 - [ ] MITT-2: Create a page to display the blog post with these information displayed: 'title' and the body of the post 

 - [ ]  MITT-3: At the end of the post page, display the list of the comments
	>  Dont forget to do some styling for the application

 - [ ]  Create a popup when there is no internet connection.

	> An option: You can use this link to display a cover image for the
	> post. https://placekitten.com/760/300

 **Extra points**
- [ ] Do a scroll to load: Show 5 items and every scroll show the next 5 items
 - [ ] Store data in memory to use the app in offline.

