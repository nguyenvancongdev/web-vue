 <template>
    <a-drawer
    title="Basic Drawer"
    :placement="placement"
    :closable="false"
    :open="open"
    @close="onClose"
  >
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-drawer>
  
 </template>
 
 <!-- // milliSeconds -->
 <!-- // hiển thị ngày -->
  <script setup>
 import { ref, onMounted, reactive  } from 'vue';
 const total = ref(1000);
 const pageSize = ref(20);
 const currentPage = ref(1);
 
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
 </script>
 
 
 