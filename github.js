class GitHub {
    constructor() {
        this.clientID = '47dea0bf78b736f04c5e';
        this.clientSecret = 'f405acbe14d753fb24a1012b2d21b3affc2df478';
        this.reposCount = 10;
        this.reposSort = 'created: asc'
    }
    async getUsers(user) {
        const PROFILERESPONSE = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientID}&client_secret=${this.clientSecret}`);
        const REPORESPONSE = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.reposCount}&sort=${this.reposSort}&client_id=${this.clientID}&client_secret=${this.clientSecret}`);
        const PROFILE = await PROFILERESPONSE.json();
        const repose = await REPORESPONSE.json();
        return {
            repose,
            profile: PROFILE
        }
    }
}