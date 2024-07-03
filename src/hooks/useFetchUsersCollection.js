import { query, collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { firestoreDB } from "../firebase/config";

const useFetchUsersCollection = (collectionName) => {
    const [ usersData, setUsersData] = useState([]);

    useEffect(() => {
        let unsubscribeUsersCollection;

        if(collectionName) {
            const currentUsersRef = collection(firestoreDB, collectionName);
            const usersQuery = query(currentUsersRef);
            unsubscribeUsersCollection = onSnapshot(usersQuery, (users) => {
                const allUsers = [];
                users.forEach(userDoc => allUsers.push(userDoc.data()))
                setUsersData([ ...allUsers ]);
            });
        }

        return () => unsubscribeUsersCollection && unsubscribeUsersCollection();
    }, [collectionName]);

    return usersData;
}

export default useFetchUsersCollection;