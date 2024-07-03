import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { firestoreDB } from "../firebase/config";

const useFetchCurrentUserDoc = (userEmail) => {
    const [ userData, setUserData] = useState({});

    useEffect(() => {
        let unsubscribeUserDoc;

        if(userEmail) {
            const currentUserDocRef = doc(firestoreDB, 'users', userEmail)
            unsubscribeUserDoc = onSnapshot(currentUserDocRef, (userDoc) => {
                setUserData(userDoc.data());
            });
        }

        return () => unsubscribeUserDoc && unsubscribeUserDoc();
    }, [userEmail]);

    return userData;
}

export default useFetchCurrentUserDoc;