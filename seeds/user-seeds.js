const { User } = require('../models');

const userData = [{
        username: 'Sara',
        email: 'sara@example.com',
        password: 'tebtrkil'
    },
    {
        username: 'Mike',
        email: 'mike@example.com',
        password: 'tesunlio'
    },
    {
        username: 'Jake',
        email: 'jake@example.com',
        password: 'ariubyop'
    }
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;