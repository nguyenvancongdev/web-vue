import supabase from '@/supabase.js';

const table_name = 'user';

export const getAll = async () => {
  const { data, error } = await supabase.from(table_name).select('*');
  if (error) console.error(error);
  else console.log('jjj',data);
  // console.log('rrrrr')

}  
export const  addRow = async (user) => {
  const { data, error } = await supabase
    .from(table_name)
    .insert([
      user  // Thay các cột và giá trị theo cấu trúc bảng của bạn
    ])

  if (error) {
    console.error("Lỗi khi thêm hàng:", error)
  } else {
    console.log("Hàng đã thêm:", data)
  }
}
 
  
