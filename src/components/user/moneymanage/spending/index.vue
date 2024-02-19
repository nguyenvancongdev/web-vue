<template>
    <div>
       quan ly chi tieu
       <a-button @click="em" type="primary">Thêm chi tiêu</a-button>
       <a-form

    name="basic"
    :label-col="{ span: 8 }"
    :wrapper-col="{ span: 16 }"
    :model="modelRef"
    autocomplete="off"
    @finish="onFinish"
   
  >
    <a-form-item
      label="thời gian"
      name="username"
      :rules="[{ required: true, message: '{t} can duoc nhap' }]"
    >
      <a-input  v-model:value="modelRef.time"  />
    </a-form-item>

    <a-form-item
      label="Password"
      name="password"
      :rules="[{ required: true, message: 'can duoc nhap' }]"
    >
      <a-input-password v-model:value="modelRef.password"  />
    </a-form-item>


    <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
      <a-button type="primary" html-type="submit">Submit</a-button>
    </a-form-item>
  </a-form>
    </div>
</template>

<script>
const selectType = {
    khac: 'khac',
    an_uong: 'an uong',
    do_xang: 'do_xang',
    tra_no: 'tra no',
    di_chuyen: 'di chuyen',
    bao_duong_xe: 'bao duong xe',
    trang_phuc_cat_toc: 'trang_phuc',
    mua_sam: 'mua sam',
    kham_benh: 'kham chua benh',
    tu_thien: 'lam tu thien',
}
import {getHellos, create} from '@/controller/hello.controller.js'
export default {
  name: 'SpendingMoney',
  data() {
    return {
      count: 0,
      activeKey: 2,
      modelRef: {
        time: '',
        type: '',
        selectType: '',
        money: '',
        note: '',
      },
      selectType: selectType,
    }
  },
  methods:{
    em() {
      console.log(';44444', this.count )
    },
    onFinish(value){
      console.log('5555', value)
      create(value).then(res => console.log('red', res)).catch((e) => {
        console.error(e.message); // "oh, no!"
      })
    },
  },
  created() {
    console.log('4444')
    getHellos().then((res)=>{
      console.log('ree', res)
    })
  },

}
</script>



