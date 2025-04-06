//auth & role based access / implement role access here

//TO DO IMP MIDDLEWARE HANDLER
//DOES NOT WORK, NEEDS WORK

import Employee from "../models/Employee.js"; 

export const roleAccess = async(req, res, next) => {
    try{
        //search for employee currently using application
        //find employee role details from mongo
        //if access, then pass on to wanted route & controller info

        const currentUser = await EmployeeOther.findById(req.user.id); //should return the current user's id
        let result = currentUser.roleType; 

        if(result == 'Admin')
        {
            //do something
        }
        if (result == 'Employee')
        {
            //do something
            //routes/controllers
        }
        if (result == 'Manager')
        {
            //do something
        }
    } catch(error)
    {
        console.log("Error/middlwware. No access granted to user's action and/or: ", error);
        if(error instanceof blahbalh){
            //dosmth
            return resizeBy.status(500).json({
                success: false,
                message: "Internal server error",
            });
        }
    }

};