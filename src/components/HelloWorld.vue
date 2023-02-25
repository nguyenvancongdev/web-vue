<template>
helo anh em

</template>

<script>

export default {
  name: 'HelloWorld',

  data: () => ({
    res: null,
    ecosystem: [
      {
        text: 'vuetify-loader',
        href: 'https://github.com/vuetifyjs/vuetify-loader/tree/next',
      },
      {
        text: 'github',
        href: 'https://github.com/vuetifyjs/vuetify/tree/next',
      },
      {
        text: 'awesome-vuetify',
        href: 'https://github.com/vuetifyjs/awesome-vuetify',
      },
    ],
    importantLinks: [
      {
        text: 'Chat',
        href: 'https://community.vuetifyjs.com',
      },
      {
        text: 'Made with Vuetify',
        href: 'https://madewithvuejs.com/vuetify',
      },
      {
        text: 'Twitter',
        href: 'https://twitter.com/vuetifyjs',
      },
      {
        text: 'Articles',
        href: 'https://medium.com/vuetify',
      },
    ],
    whatsNext: [
      {
        text: 'Explore components',
        href: 'https://vuetifyjs.com',
      },
      {
        text: 'Roadmap',
        href: 'https://vuetifyjs.com/introduction/roadmap/',
      },
      {
        text: 'Frequently Asked Questions',
        href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
      },
    ],
  }),
  methods:{
    conso(){
      // cần phải test thật tốt cho giá trị ""
      // tìm kiếm gía trị 
      // let a = this.res?.hanh 
      // let b = []
      
      // let c = (b?.hanh?.length )?  b?.hanh[4].cong[5] : "" 
      // console.log(a)
      // console.log('b la', b)
      // console.log('c la', c)
// tiep truc
// ko the true false voi 
// ""

      let a = "0"
      if (a){
        console.log('1000', a)
      }
     
      //this.res = null thì khi chấm sẽ bị lỗi 
    }

  },
}
</script>
