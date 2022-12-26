import {ref} from "vue"
import {db} from "../firebase/config"
import { doc, getDoc } from "firebase/firestore";

const makaleGetir=(id)=>{
	const makale = ref(null)
	const hatalar = ref(null)

	const makaleYukle = async ()=>{
		try{
			 let res = await getDoc(doc(db, "makaleler", id))

			 if(!res.exists){
			 	throw Error("Makale Bulunamadı")
			 }
			 makale.value={...res.data(),id:res.id}
		}
		catch(error){
			hatalar.value=error.message
		}
	}

	return {makale,hatalar,makaleYukle}
}

export default makaleGetir