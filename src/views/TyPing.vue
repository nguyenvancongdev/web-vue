<template>
  <div class="about">
     <a-textarea v-model:value="value" :rows="4" placeholder="maxlength is 6"  />
     <a-textarea v-model:value="values" :rows="4" placeholder="maxlength is 6" />

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
import { useCounterStore } from '@/stores/counter'
import { ref, computed, watchEffect   } from 'vue'

const value = ref('rrrr')

const values = computed(() => convertTelexToVietnamese(value.value))


const VN_TELEX: any = {
  á: "as",
  à: "af",
  ả: "ar",
  ã: "ax",
  ạ: "aj",
  ắ: "aws",
  ằ: "awf",
  ẳ: "awr",
  ẵ: "awx",
  ặ: "awj",
  ă: "aw",
  ấ: "aas",
  ầ: "aaf",
  ẩ: "aar",
  ẫ: "aax",
  ậ: "aaj",
  â: "aa",
  đ: "dd",
  é: "es",
  è: "ef",
  ẻ: "er",
  ẽ: "ex",
  ẹ: "ej",
  ế: "ees",
  ề: "eef",
  ể: "eer",
  ễ: "eex",
  ệ: "eej",
  ê: "ee",
  í: "is",
  ì: "if",
  ỉ: "ir",
  ĩ: "ix",
  ị: "ij",
  ó: "os",
  ò: "of",
  ỏ: "or",
  õ: "ox",
  ọ: "oj",
  ố: "oos",
  ồ: "oof",
  ổ: "oor",
  ỗ: "oox",
  ộ: "ooj",
  ô: "oo",
  ớ: "ows",
  ờ: "owf",
  ở: "owr",
  ỡ: "owx",
  ợ: "owj",
  ơ: "ow",
  ú: "us",
  ù: "uf",
  ủ: "ur",
  ũ: "ux",
  ụ: "uj",
  ứ: "uws",
  ừ: "uwf",
  ử: "uwr",
  ữ: "uwx",
  ự: "uwj",
  ư: "uw",
  ý: "ys",
  ỳ: "yf",
  ỷ: "yr",
  ỹ: "yx",
  ỵ: "yj",
};
const VN_TELEX_REVER: any = {
  as: 'á',
  af: 'à',
  ar: 'ả',
  ax: ã,
  aj: ạ,
  aws: ắ,
  awf: ằ, 
  awr: ẳ,
  awx: ẵ,
  awj: ặ,
  aw: ă,
  aas: ấ,
  aaf: ầ,
  aar: ẩ,
  aax: ẫ,
  aaj: ậ,
   aa:  â,
  đ "dd":, đ,
  é "es":, é,
  è "ef",  è,
  ẻ: "er", ẻ,
  ẽ: "ex", ẽ,
  ẹ: "ej", ẹ,
  ế: "ees", ế,
  ề: "eef", ề,
  ể: "eer", ể,
  ễ: "eex", ễ,
  ệ: "eej", ệ,
  ê: "ee", ê,
  í: "is", í,
  ì: "if", ì,
  ỉ: "ir", ỉ,
  ĩ: "ix", ĩ,
  ị: "ij", ị,
  ó: "os", ó,
  ò: "of", ò,
  ỏ: "or", ỏ,
  õ: "ox", õ,
  ọ: "oj", ọ,
  ố: "oos", ố,
  ồ: "oof", ồ,
  ổ: "oor", ổ,
  ỗ: "oox", ỗ
  ộ: "ooj", ộ
  ô: "oo", ô
  ớ: "ows", ớ
  ờ: "owf", ờ
  ở: "owr", ở
  ỡ: "owx", ỡ
  ợ: "owj", ợ
  ơ: "ow", ơ
  ú: "us", ú
  ù: "uf", ù
  ủ: "ur", ủ
  ũ: "ux", ũ
  ụ: "uj", ụ
  ứ: "uws", ứ
  ừ: "uwf", ừ
  ử: "uwr", ử
  ữ: "uwx", ữ
  ự: "uwj", ự
  ư: "uw", ư
  ý: "ys", ý
  ỳ: "yf", ỳ
  ỷ: "yr", ỷ
  ỹ: "yx", ỹ
  ỵ: "yj", ỵ
};




</script>
