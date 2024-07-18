<template>
  <div class="about">
     <a-textarea v-model:value="value" :rows="4" placeholder="nhập text"  />
     <div>
     <a-textarea v-model:value="values" :rows="4" placeholder="" />
      <button @click="copyValue">Copy Value</button>
     </div>


  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
<script setup>
 const telexMap = {
        'awf': 'ằ', 'aws': 'ấ', 'awr': 'ẳ', 'awj': 'ặ', 'awx': 'ẵ', 'aw': 'ă',
        'aaf': 'ầ', 'aas': 'ấ', 'aar': 'ẩ', 'aaj': 'ậ', 'aax': 'ẫ',  'aa': 'â',
        'as': 'á', 'af': 'à', 'ax': 'ã', 'ar': 'ả', 'aj': 'ạ',
         'eef': 'ề', 'ees': 'ế', 'eer': 'ể', 'eej': 'ệ', 'eex': 'ễ','ee': 'ê',
        'ef': 'è', 'es': 'é', 'er': 'ẻ', 'ej': 'ẹ','ex': 'ẽ',
        'if': 'ì', 'is': 'í', 'ir': 'ỉ', 'ij': 'ị', 'ix':'ĩ',
        'oof': 'ồ', 'oos': 'ố', 'oor': 'ổ', 'ooj': 'ộ', 'oox': 'ỗ', 'oo': 'ô',
        'ow': 'ơ', 'owf': 'ờ', 'ows': 'ớ', 'owr': 'ở', 'owj': 'ợ', 'owx': 'ỡ',
        'of': 'ò', 'os': 'ó', 'or': 'ỏ', 'oj': 'ọ', 'ox':'õ',
         'uf': 'ù', 'us': 'ú', 'ur': 'ủ', 'uj': 'ụ', 'ux':'ũ',
        'uw': 'ư', 'uwf': 'ừ', 'uws': 'ứ', 'uwr': 'ử', 'uwj': 'ự', 'uwx': 'ữ',
        'yf': 'ỳ', 'ys': 'ý', 'yr': 'ỷ', 'yj': 'ỵ', 'yx':'ỹ',
        'dd': 'đ'
    };
function telexToVietnamese(telex) {
   let vietnamese = telex;
    for (const [key, value] of Object.entries(telexMap)) {
        const regex = new RegExp(key, 'g');
        vietnamese = vietnamese.replace(regex, value);
    }
     return vietnamese;
}    
import { useCounterStore } from '@/stores/counter'
import { ref, computed, watchEffect   } from 'vue'

const value = ref('')

const values = computed(() => telexToVietnamese(value.value))
 const copyValue = () => {
            // Tạo một thẻ textarea ẩn để đặt giá trị vào
            var tempTextArea = document.createElement("textarea");
            tempTextArea.value = values.value;
            document.body.appendChild(tempTextArea);

            // Chọn toàn bộ văn bản trong thẻ textarea
            tempTextArea.select();
            tempTextArea.setSelectionRange(0, 99999); // Hỗ trợ cho các trình duyệt khác nhau

            // Thực hiện lệnh sao chép
            document.execCommand("copy");

            // Xóa thẻ textarea sau khi sao chép
            document.body.removeChild(tempTextArea);

            // Thông báo cho người dùng biết là đã sao chép thành công (tuỳ chọn)
            alert("Đã sao chép thành công!");
        }

</script>
  