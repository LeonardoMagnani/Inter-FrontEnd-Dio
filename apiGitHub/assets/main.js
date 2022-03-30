/*

    <input type="text" id="text-user">
    <input type="button" value="Search" id="button-user">

*/

var textUser = document.querySelector('#text-user');
var buttonUser = document.querySelector('#button-user');
var dataReturn;

buttonUser.addEventListener('click', function eventUser () {

    fetch(`https://api.github.com/users/${textUser.value}`, {
    method: 'GET',
    headers: {
        Accept: 'application/vnd.github.v3+json',
    }
    })  
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data)
        document.write(data.avatar_url)
    })
    return data;

    textUser.value = ''
})


