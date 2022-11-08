import { useState, useEffect } from "react";
import {db, auth} from "./firebase"
import {Authentication} from "./authentication"
import {collection, getDoc, getDocs} from "firebase/firestore"

function Database() {
    const [users, setUsers] = useState([]);
    const studentsCollectionRef = collection(db, "students");

    useEffect(() => {
        const getUsers = async () => {
            //return all of the documnts in students collection in firestore
            const data = await getDocs(studentsCollectionRef);
            setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
            console.log(data)
        };

        getUsers();
    }, []);

    return (
        <div className="Database">
            {users.map((user) => {
                return (
                    <div> 
                        {" "}
                        <h1>Name: {user.name} </h1>
                        <h1>Date of Birth: {user.dob} </h1>
                    </div>
                );
            })}
        </div>
    );
}

export default Database;