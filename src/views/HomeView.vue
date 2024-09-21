<template>
  <main>
    <a-calendar @panelChange="onPanelChange" @select="onSelect">
      <template #dateCellRender="{ current:value }">
      <ul  class="events">
        <li v-for="item in getListData(value)" :key="item.id">
          <a-badge :status="item.type" :text="item.name" />
        </li>
      </ul>
    </template>
    
    </a-calendar>
     <a-drawer
     :width="720"
      v-model:open="open"
    class="custom-class"
    root-class-name="root-class-name"
    title="Thêm việc cần làm"
    placement="right"
    @after-open-change="afterOpenChange"
  >
    <div>
      <li v-for="item in listVN" :key="item.id">
          <a-badge :status="item.type" :text="item.name" />
          <div>trang thái</div>
          <div>{{item.progress}}</div>
          <div>chỉnh sửa</div>
        </li>
    </div>
    <a-form
    :model="formState"
    name="basic"
    :label-col="{ span: 8 }"
    :wrapper-col="{ span: 16 }"
    autocomplete="off"
    @finish="onFinish"
  >
    <a-form-item
      label="Việc cần làm"
      name="name"
      :rules="[{ required: true, message: 'Cần nhập việc cần làm' }]"
    >
      <a-input v-model:value="formState.name" />
    </a-form-item>

    <a-form-item
      label="Tiến độ"
      name="progress"
      :rules="[{ required: true, message: 'Lựa chọn tiến độ' }]"
    >
       <a-select
      ref="select"
      v-model:value="formState.progress"
    >
      <a-select-option value="todo">Chưa triển khai</a-select-option>
      <a-select-option value="inProgress">Đang tiến hành</a-select-option>
      <a-select-option value="done">Hoàn thành</a-select-option>
    </a-select>
    </a-form-item>



   

    <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
      <a-button type="primary" html-type="submit">Submit</a-button>
    </a-form-item>
  </a-form>
  </a-drawer>
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


