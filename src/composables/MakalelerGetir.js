import {ref} from 'vue'
import {db} from '../firebase/config';
import {collection,getDocs} from "firebase/firestore"


const makalelerGetir=()=>{

    const makaleler=ref([])
    const hatalar=ref(null)


    const makaleListesiniYukle=async ()=>{

        try {
            //let res=await db.collection('makaleler').orderBy('olusturulmaTarihi','desc').get()  --> eski sürümde 
            let res = await getDocs(collection(db,"makaleler"))  //--> firebase 9da
            makaleler.value=res.docs.map(doc=>{
                return {...doc.data(),id:doc.id}
            })
        } catch (error) {
            hatalar.value=error.message
        }

        
    }

    return {makaleler,hatalar,makaleListesiniYukle}
}

export default makalelerGetir