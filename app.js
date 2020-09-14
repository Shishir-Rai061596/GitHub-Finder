const github = new GitHub;
const ui = new UI;

const SEARCHUSER = document.querySelector('#searchUser');

SEARCHUSER.addEventListener('keyup', (e) => {
    const USERTEXT = e.target.value;
    if (USERTEXT !== '') {
        github.getUsers(USERTEXT).then(data => {
            if (data.profile.message === "Not Found") {
                ui.showerAlert("Profile Not found", "alert alert-danger");
            } else {
                ui.showProfile(data.profile)
                ui.showRepose(data.repose)
            }
        })
    } else {
        ui.clearProfile();
    }
})
