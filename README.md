# README

## Internet Flicks
[Live Demo](https://internet-flicks.herokuapp.com/#/)

Internet Flicks is a movie viewing app drawing inspiration from Netflix with a cult classics twist. This application was made using Rails/PostgreSQL for the backend and React.js and Redux for the frontend.

## Features

### User Auth
  * Users can sign up for an account, login, and demo login for easy access
  * Keep user information safe by authentifying users using BCrypt
  
  ![](/app/assets/gifs/UserAuth.gif)
  
 ``` javascript
demoLogin(e){
    e.preventDefault();
    this.setState({
        username: '',
        password: ''
    })
    this.setUsername()
}

setUsername(demoname) {
    demoname = demoname || 'DemoUser'.split('')
    setTimeout(() => {
        this.setState({
            username: this.state.username += demoname.shift()
        })
        return demoname.length === 0 ? this.setPassword() : this.setUsername(demoname)
    }, 50)
}

setPassword(demopassword) {
    demopassword = demopassword || '123456'.split('')
    setTimeout(() => {
        this.setState({
            password: this.state.password += demopassword.shift()
        })
        return demopassword.length === 0 ? this.props.processForm(this.state).then(() => {
            this.props.history.push('/movies')
        })  : this.setPassword(demopassword)
    }, 50)
}
```
  
### Video Hosting
  * Hosted videos on AWS S3 so application can scale
  * Pulled videos on hosted on AWS S3 into application and creating components for each genre of movies
  
  ![](/app/assets/gifs/Movies.gif)
  
```ruby
movies.each do |movie|
    title1 = movie.title.split(' ').join('+')
    video1 = movie.title.split(' ').join('+')
    file = open("https://internet-flicks-seeds.s3-us-west-1.amazonaws.com/#{video1}.mp4")
    file2 = open("https://internet-flicks-seeds.s3-us-west-1.amazonaws.com/#{title1}+Thumbnail.jpg")
    movie.video.attach(io: file, filename: "#{video1}.mp4")
    movie.photo.attach(io: file2, filename: "#{movie.title} Thumbnail.jpg")
end
```
  
### CRUD Features
  * Implemented CRUD features such as creating a list item and removing items from myList
  * Clicking on the thumbnail of the movie opens a popout that shows more information about the movie
  * Clicking on the play now button leads to a movie show page
  
  ![](/app/assets/gifs/CRUD.gif)
  
```javascript
handleMylist() {
    let mylist = {
        mylist: {
            user_id: this.props.user.id,
            movie_id: this.props.movie.id
        }
    }
    this.props.createMylist(mylist);
}

export const createMylist = (data) => {
    return(
        $.ajax({
            method: "POST",
            url: 'api/mylists',
            data
        })
    )
}
```
  
### Search Bar
  * Implemented search bar allowing users to search movies by name or genre
  
  ![](/app/assets/gifs/Search.gif)
  
```javascript
handleSubmit (e) {
    e.preventDefault();
    this.props.updateSearch(this.state.query)
    this.setState({
        query: ''
    })
    this.props.history.push('/search')

}

export const updateSearch = (search) => {
    return({
        type: SEARCH_TEXT,
        search
    })
}
```

## Technologies

The backend is designed to make API requests, process data, and respond back with the data requested by our front end. RESTful routes were used to keep a clean structure to follow.

The frontend uses React with Redux framework to dynamically display content.


