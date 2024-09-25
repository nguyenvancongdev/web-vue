<template>
  <main>
  xin chào mọi người

  </main>  
</template>
<script lang="ts" setup>
import { ref, onMounted, reactive  } from 'vue';
import dayjs, { Dayjs } from 'dayjs';
import { addData } from '@/service/todo.service';
import { getAllDataLimit } from '@/service/todo.service';
// call api
const startDate = ref<number>(0) 
onMounted(() => {
  console.log('Component đã được mount lên DOM');
  const currentDay = dayjs(); // Đối tượng dayjs hiện tại
  // Ngày đầu tháng
const startOfMonth = currentDay.startOf('month').subtract(2, 'week').startOf('day').valueOf();

// Ngày cuối tháng
const endOfMonth = currentDay.endOf('month').add(2, 'week').startOf('day').valueOf();

  // Thực hiện các thao tác khởi tạo hoặc gọi API tại đây
  callapi(startOfMonth,endOfMonth)
});
const callapi = async (startOfMonth,endOfMonth) => {
  try {
    mokeData.value = await getAllDataLimit(startOfMonth,endOfMonth)
  } catch (error) {
    
  }
}
// calendar
const date = ref<Dayjs>()
const listVN = ref<any[]>([]);
const onPanelChange = (value:Dayjs, mode:string) => {
 
     // call api
     // call api
  const startOfMonth = value.startOf('month').subtract(2, 'week').startOf('day').valueOf();

     // Ngày cuối tháng
  const endOfMonth = value.endOf('month').add(2, 'week').startOf('day').valueOf();
  // Thực hiện các thao tác khởi tạo hoặc gọi API tại đây
  callapi(startOfMonth,endOfMonth)   
    

 
};
const onSelect = (date, { source }) => {
 
    if (source === 'date') {
     showDrawer()
     timeMiliSecont.value = date.startOf('day').valueOf()
     listVN.value = getListData(date)
  
    } 
   
};

const mokeData = ref<any[]>([{
}])
const getListData = (value: Dayjs) => {
  let startDay = value.startOf('day').valueOf()
  let data = mokeData.value.filter(item => item?.milliSeconds === startDay )
  return data
}
// end calendar
// drawer
const open = ref(false);
const afterOpenChange = bool => {
  if (bool === false){
    resetForm()
  }
};
const timeMiliSecont = ref<number>(0);
const mode = ref('view');
const showDrawer = () => {
  // resetForm
  let valueForm = {
    name : 'test',
    progress : 'todo',
  }
  initForm(valueForm);
  open.value = true;

};


// end drawer
// form
// form
const resetForm = () => {
    formState.name = '';
    formState.progress = 'todo';
}
const initForm = (value) => {
    formState.name = value.name;
    formState.progress = value.progress;
}

const formState = reactive({
  name: '',
  progress: '',
  id: '22222',
  type: 'loại',
  note: 'ghi chu',
  status: 'warning',
});
// minh co the de la neu id = '' thi no la tao moi
const onFinish = async (values) => {
  let a = {
    name: formState.name,
    progress: formState.progress,
    milliSeconds: timeMiliSecont.value,
  }
  // call api tạo lịch
  try {
    await addData(a)
    open.value = false
  } catch (error) {
    console.log('that bai')
  }
};

</script>
<!-- // milliSeconds -->
<!-- // hiển thị ngày -->


