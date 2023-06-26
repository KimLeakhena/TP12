import users from "../model/users.js";

const create_users = async (req, res) => {

    // api: http://localhost:3000/api/v1/category/create_category
    // json-body: {"category_name": "Tablet"}
    // method: post

    const { users_name } = req.body
    const users = new users({
        username: username,
        firstName:firstName,
        lastName:lastName,
        email:email,
        password:password
    })

    try {
        const exist_users = await users.findOne({ users_name })
        if (exist_users) return res.status(403).json({message: "user is exist"})
        const new_users= await users.save()
        return res.json(new_users)
    } catch (error) {
        return res.json(error)
    }

}
export{
    create_users,
}