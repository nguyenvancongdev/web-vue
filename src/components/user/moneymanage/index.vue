    <template>
        <div>
            <a-tabs v-model:activeKey="activeKey">
                <a-tab-pane key="1" tab="CHI TIÊU">Content of Tab Pane 1</a-tab-pane>
                <a-tab-pane key="2" tab="THU NHẬP">Content of Tab Pane 2</a-tab-pane>
            </a-tabs>
        </div>
    </template>
    
    <script>
    
    export default {
      name: 'MoneyManage',
      data() {
        return {
          count: 0,
          activeKey: 2
        }
      },
      methods:{
 
      },
    
    }
    </script>
    
  
  
    