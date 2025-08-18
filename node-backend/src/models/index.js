class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    static getSchema() {
        return {
            name: 'string',
            email: 'string'
        };
    }

    save() {
        // Logic to save user to the database
    }

    static findById(id) {
        // Logic to find a user by ID
    }

    static findAll() {
        // Logic to find all users
    }
}

module.exports = User;