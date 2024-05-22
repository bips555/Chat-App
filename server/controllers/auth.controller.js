export const login = async (req, res, next) => {};

export const logout = async (req, res, next) => {};

export const signup = async (req, res, next) => {
    try{
const {fullName,username,password,confirmPassword,gender}=req.body
res.send(req.body)
    }
    catch(error)
    {
        console.log(error)
    }
};
