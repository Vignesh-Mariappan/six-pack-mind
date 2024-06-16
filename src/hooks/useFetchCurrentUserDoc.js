import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { firestoreDB } from "../firebase/config";

const useFetchCurrentUserDoc = (userDisplayName) => {
    const [ userData, setUserData] = useState({});

    useEffect(() => {
        let unsubscribeUserDoc;

        if(userDisplayName) {
            const currentUserDocRef = doc(firestoreDB, 'users', userDisplayName)
            unsubscribeUserDoc = onSnapshot(currentUserDocRef, (userDoc) => {
                // console.log('userDoc ', userDoc);
                setUserData(userDoc.data());
            });
        }

        return () => unsubscribeUserDoc && unsubscribeUserDoc();
    }, [userDisplayName]);

    return userData;
}

export default useFetchCurrentUserDoc;