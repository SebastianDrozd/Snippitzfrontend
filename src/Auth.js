class Auth {
        constructor(){
            this.authenticated = false
        }
        login(cb){
            this.authenticated = true;
            
        }
}

export default new Auth()