import firebaseApp from "../../config";
import { getDatabase, ref, child, get } from "firebase/database";


export default async function catchRealtime() { 

    const db = getDatabase(firebaseApp);
    const dbRef = ref(getDatabase());

    get(child(dbRef, `resturants`)).then((snapshot) => { 
        console.log(snapshot.val())

        const tempArray = []

        snapshot.val().forEach(element => {
            tempArray.push(element)
            
        });

        return tempArray;
    })
    .catch((error) => {
        console.error(error);
    });


}

