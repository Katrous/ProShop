import bcrypy from 'bcryptjs'
const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypy.hashSync('password', 10),
        isAdmin: true
    },
    {
        name: 'John Doe',
        email: 'john@example.com',
        password: bcrypy.hashSync('password', 10),
    },
    {
        name: 'Jane Doe',
        email: 'jane@example.com',
        password: bcrypy.hashSync('password', 10),
    },
]

export default users;