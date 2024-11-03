<template>
   <a-flex justify="end">
      <a-button @click="callChildMethod">Thêm mới</a-button>
   </a-flex>
   <a-table class="mt-4" :data-source="dataSource" :columns="columns"  :pagination="false" />
   <a-pagination
      class="mt-4"
      v-model:total="total"
      v-model:current="currentPage"
      v-model:page-size="pageSize"
      @change="handlePageChange"
    />
    <createView ref="childRef" />
</template>

<!-- // milliSeconds -->
<!-- // hiển thị ngày -->
 <script setup>
import { ref, onMounted, reactive  } from 'vue';
import createView from '@/components/admin/userView/createView.vue';
import {getAll} from '@/service_supa/user';
const total = ref(1000);
const pageSize = ref(20);
const childRef = ref(null);
const currentPage = ref(1);


const callChildMethod = () => {
  if (childRef.value) {
    childRef.value.onOpen();
  }
}

const handlePageChange = () => {
   console.log('4444')
}
const columns = [
  {
    title: 'Tên',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Năm sinh',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Địa chỉ',
    dataIndex: 'address',
    key: 'address',
    ellipsis: true,
  },
];
const dataSource = ref([
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park, New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 2 Lake Park, London No. 2 Lake Park',
   
  },
] )
onMounted(() => {
  getAll()
  console.log("Componegggggnt đã được gắn vào DOM");
  // Thực hiện các logic cần thiết khi component đã mounted
});
</script>



