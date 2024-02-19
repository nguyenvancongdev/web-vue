    <template>
        <div>
            <a-tabs defaultActiveKey="1">
                <a-tab-pane key="1" tab="CHI TIÊU"><spending-money/></a-tab-pane>
                <a-tab-pane key="2" tab="THU NHẬP">Content of Tab Pane 2</a-tab-pane>
            </a-tabs>
        </div>
    </template>
    
    <script>
    import SpendingMoney from './spending/index.vue'
    export default {
      name: 'MoneyManage',
      components: {
        SpendingMoney,
      },
      data() {
        return {
          count: 0,
          // activeKey: 1
        }
      },
      methods:{
 
      },
    
    }
    </script>
    
  
  
    