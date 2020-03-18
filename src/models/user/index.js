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

    static save(name) {
        localStorage.setItem('user', JSON.stringify({name}));
        return true;
    }

}

export default User;