import {useEffect, useState} from "react";
import {collection, DocumentData, onSnapshot} from "firebase/firestore";
import {Movie} from "../typings";
import {db} from "../firebase";

function UseList(uid: string | undefined) {
    const [list, setList] = useState<Movie[] | DocumentData>([])

    useEffect(() => {
        if (!uid) return

        return onSnapshot(collection(db, "customers", uid, "myList"), (snapshot) => {
            setList(snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            })))
        })
    }, [db, uid])

    return list
}

export default UseList;