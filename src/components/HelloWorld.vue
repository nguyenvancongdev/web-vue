<template>
helo anh em {{ a }}
<div v-html="editorData">
</div>
</template>

<script>

export default {
  name: 'HelloWorld',

  data(){
    return {
    a: 0,
    nga: 0,

  }},
  methods:{
   async conso(a){
      
       let b = await new Promise( (res, rej)=> {
        if (a>5) { res(1)}
       else rej(6)
       })
        let c = b
       let e =  b
       let f = e
       console.log('day la promí tranfe ne',f)
      //  console.log(this.a)
      console.log('day la promis', c)
      
    


     
     
    }

  },
}
</script>
