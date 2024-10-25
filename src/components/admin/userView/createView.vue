 <template>
    <a-drawer
    title="Thêm mới"
    :closable="false"
    :open="open"
    @close="onClose"
  >
  <a-form
    layout="vertical"
    :model="formState"
    name="basic"
    :label-col="{ span: 16 }"
    :wrapper-col="{ span: 16 }"
    autocomplete="off"
    @finish="onFinish"
  >
    <a-form-item
    label="Họ và tên"
      name="full_name"
      :rules="[{ required: true, message: 'Hãy nhập họ và tên' }]"
    >
      <a-input v-model:value="formState.full_name " />
    </a-form-item>

    <a-form-item
      label="ngày sinh"
      name="birthday"
      :rules="[{ required: true, message: 'hãy nhập ngày sinh' }]"
    >
      <a-date-picker v-model:value="formState.birthday" format="DD/MM/YYYY" />
    </a-form-item>

    <a-form-item label="địa chỉ" name="adreff"
     :rules="[{ required: true, message: 'hãy nhập họ và tên' }]"
    >
      <a-input v-model:value="formState.adreff" />
    </a-form-item>

    <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
      <a-button type="primary" html-type="submit">Lưu</a-button>
    </a-form-item>
  </a-form>
  </a-drawer>
  
 </template>
 
 <!-- // milliSeconds -->
 <!-- // hiển thị ngày -->
  <script setup>
  import { ref, defineExpose, reactive, defineEmits } from 'vue';
  import dayjs from 'dayjs';
  import { addData } from '@/service/user.service';
  const emit = defineEmits(['customEvent'])
  const formState = reactive({
    fullname: '',
    birthday: undefined,
    adreff: '',
  });

  const emitEvent = () => {
      emit('create', 'Dữ liệu từ component con')
  } 

const onFinish = async (values) => {
 


  // thiet lap formstate
  // tao 1 doi tuong moi
  // chuyen value thanh date roi luu:
  try {
    let a = {
      full_name: formState.full_name,
      birthday: formState.birthday.valueOf(),
      adreff: formState.adreff,
    }
    await addData(a);
    open.value = false;

  }  catch (error) {
    console.log('that bai',  error)
  }


};
  const open = ref(false);
  const onClose = () => {
    open.value = false;
  };
  const onOpen = () => {
    formState.full_name = '';
    formState.birthday = undefined;
    formState.adreff = '';

    open.value = true;
  }
  defineExpose({
    onOpen, emitEvent
});
 </script>
 
 
 