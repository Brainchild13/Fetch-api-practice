
function getData() {
    
  fetch('https://reqres.in/api/users/').then(response => {
    if(!response.ok) {
        throw Error('ERROR')
    }
     return response.json();
    
    }).then(data => {

        console.log(data.data)
        const realData = data.data.map(user => {
            return `
            <div class="user card">
                <img class="avatar" src="${user.avatar}" />
                <hr>
                
                <p> <div class="user-info">
                <p><img class="profile-icon" src="./images/211874_person_icon.png" /><b>${user.first_name} ${user.last_name}</b></p>
                <p><img class="profile-icon" src="./images/211660_email_icon.png" /><b>${user.email}</b></p>
                </div>
                <button>
                    <a href="mailto:${user.email}">Email Me</a>
                    </button> 
            </div>
            `
        }).join('');

        console.log(realData);
        document.querySelector('#app').insertAdjacentHTML('afterbegin', realData);

       
        // document.querySelector('#app').innerHTML = '<h1>Hello</h1>'
    }).catch (error => {
        console.log(error);
        
    })
  
    
 
}

getData();