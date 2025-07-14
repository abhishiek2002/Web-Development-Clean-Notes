import createStudentTable from "./Models/studentModel.js";

const initializeDB = async () => {
    try {
        await createStudentTable();
        
    } catch (error) {
        console.log(error);
    }
}

export default initializeDB;