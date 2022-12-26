<template>
	<h1>Makale Detay</h1>
	<div v-if="hatalar">
		{{hatalar}}
	</div>
	<div v-if="makale" class="detay content">
		<h2><i>Makale Başlık:</i> {{makale.baslik}}</h2>
		<div class="content">
			<i>Makale İçerik:</i>
			<p>{{makale.icerik}}</p>
		</div>
		<a class="sil" @click="makaleSil">
			<img src="/trashcan.svg">
		</a>
	</div>
	<div v-else>
		Yükleniyor...
	</div>
</template>
<script>
	import {ref} from "vue"
	import {useRoute,useRouter} from "vue-router"
	import MakaleGetir from "../composables/MakaleGetir"
	import { deleteDoc, doc } from "firebase/firestore";
	import {db} from "../firebase/config"
	export default{
		setup(){
			const route = useRoute()
			const router = useRouter()
			const id=ref(route.params.id)

			const {makale,hatalar,makaleYukle} = MakaleGetir(route.params.id)
			makaleYukle()

			const makaleSil = async ()=>{
				deleteDoc(doc(db, "makaleler", route.params.id)).then(() => {
					//console.log("deleted",id);
					router.push("/")
				});
			}

			return {makale,hatalar,makaleSil}
		}
	}
</script>
<style>
	.detay{
		position: relative;
	}
	.content{
		margin-bottom:30px;
	}
	.sil{
		position: absolute;
		top: 0;
		right: 0;
		border-radius: 50%;
		padding: 8px;
		cursor: pointer;
	}
</style>