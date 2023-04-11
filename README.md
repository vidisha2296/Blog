# Blog

SignUp 
POST  http://localhost:5000/api/users/signup

Login
POST  http://localhost:5000/api/users/login

Logout 
GET http://localhost:5000/api/users/logout

newBlog 
POST http://localhost:5000/api/blog/newPost

updateBlog
PUT  http://localhost:5000/api/blog/posts/{post_id}

deleteBlog
DELETE http://localhost:5000/api/blog/posts/{post_id}

getBlogByPagination
GET http://localhost:5000/api/blog/allPosts?p=0

getBlogByIdPagination
GET http://localhost:5000/api/blog/posts/{post_id}?p=0

searchByFilterKeyword
GET http://localhost:5000/api/blog/postSearch/z

newComment
POST http://localhost:5000/api/blog/newComment

UpdateCommment
PUT http://localhost:5000/api/blog/comment/{comment_id}

deleteComment
DELETE http://localhost:5000/api/blog/comment/{comment_id}
