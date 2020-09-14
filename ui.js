class UI {
    constructor() {
        this.profile = document.querySelector('#profile');
        this.repose = document.querySelector('.repose');
    }
    showProfile(user) {
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
<div class="row">
    <div class="col-md-3">
        <img src="${user.avatar_url}" alt="Image Not Found" class="img-fluid mb-2">
        <a href="${user.html_url}" target="_blank" class="mb-2 btn btn-primary btn-block">View Profile</a>
    </div>
        <div class="col-md-9">
            <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
            <span class="badge badge-success">Followers: ${user.followers}</span>
            <span class="badge badge-info">following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
                <li class="list-group-item">Company: ${user.company}</li>
                <li class="list-group-item">Website/Blog: ${user.blog}</li>
                <li class="list-group-item">Location: ${user.location}</li> 
                <li class="list-group-item">Member since: ${user.created_at}</li> 
            </ul>
        </div>
</div>     
</div>
<h3 class="page-heading mb-3">Latest Repos</h3>
<div id="repos"></div>`;
    }

    showRepose(repose) {
        let output = '';
        repose.forEach(repo => {
            output += `

            <div class="card card-body mb-2">
                <div class="row">
                    <div class="col-md-6">
                        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                        <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                        <span class="badge badge-seondary">Watchers: ${repo.watchers_count}</span>
                        <span class="badge badge-success">Forks: ${repo.forks_count}</span>
                    </div>
                </div>
            </div>`
        })
        this.repose.innerHTML = output;
    }

    showerAlert(msg, className) {
        this.clearAlert();
        const DIV = document.createElement("div");
        DIV.className = className;
        DIV.appendChild(document.createTextNode(msg));
        const PARENT = document.querySelector(".searchContainer");
        const SEARCH = document.querySelector('.search');
        PARENT.insertBefore(DIV, SEARCH);
        this.clearProfile()
        setTimeout(() => DIV.remove(), 2000)
    }

    clearAlert() {
        const currentAlert = document.querySelector('.alert');
        if (currentAlert) {
            currentAlert.remove();
        }
    }

    clearProfile() {

        this.profile.innerHTML = '';
        this.repose.innerHTML = ' ';
    }
};