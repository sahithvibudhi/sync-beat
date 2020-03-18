class User {

    static authenticated() {
        let user = localStorage.getItem('user');
        try {
            user = JSON.parse(user);
            if (user.name) {
                return true;
            }
        } catch (e) {
            return false;
        }
        return false;
    }

    static get() {

    }

    save() {

    }
    
}

export default User;