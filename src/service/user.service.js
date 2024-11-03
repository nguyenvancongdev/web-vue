import { db } from '@/firebaseConfig';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, setDoc, query, where, orderBy, limit, FieldPath   } from 'firebase/firestore';

const nameTable = 'user_coco'
export const getAllData = async () => {
    
    try {
        const querySnapshot = await getDocs(collection(db, nameTable));
        const todoList = [];
        querySnapshot.forEach((doc) => {
          todoList.push({ id: doc.id, ...doc.data() });
        });
        return todoList;
      } catch (error) {
        console.error("Error fetching todo list:", error);
        throw error;
      }

}
export const getAllDataLimit = async (startTime, endTime) => {
    
    try {
        const q = query(
            collection(db, nameTable),
            where('milliSeconds', '>', startTime),
            where('milliSeconds', '<', endTime),
          );
        const querySnapshot = await getDocs(q);
        const todoList = [];
        querySnapshot.forEach((doc) => {
          todoList.push({ id: doc.id, ...doc.data() });
        });
        return todoList;
      } catch (error) {
        console.error("Error fetching todo list:", error);
        throw error;
      }

}
export const addData  = async (todo) => {
    await addDoc(collection(db, nameTable), todo);
}
// cập nhật data
const updateData = async (user) => {
    let {id, ...userData} = user;
      // Tham chiếu đến tài liệu trong collection 'users'
      const userRef = doc(db, nameTable, id);
    await updateDoc(userRef, userData)
}
// xóa data
const deleteUser = async (id) => {

try {
    // Tham chiếu đến tài liệu trong collection 'users'
    const userRef = doc(db, nameTable, id);

    // Xóa tài liệu
    await deleteDoc(userRef);

    console.log('Xóa thành công!');
  } catch (error) {
    console.error('Lỗi khi xóa:', error);
  }
}

// xử dụng set trong trường hợp muốn tạo ID riêng
export const setTodo = async (todo) => {
    let {id, ...dataUser} = todo
    try {
        const userRef = doc(db, nameTable, id);

        setDoc(userRef, dataUser, { merge: true })
    }
    catch (err) {
        console.log('lỗi khi thêm')
    }
} 
// xử dụng qerry để lọc theo điều kiện

const getUsertoquery = async () => {
    try {

        const q = query(
            collection(db, nameTable),
            where('age', '>', 18) // Điều kiện lấy dữ liệu
        );
        const querySnapshot = await getDocs(q);
        const mapData =  querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return mapData
    }
    catch(err){
        return []
    }
}
// Các điều kiện phổ biến
// ==: Bằng
// !=: Không bằng
// <: Nhỏ hơn
// <=: Nhỏ hơn hoặc bằng
// >: Lớn hơn
// >=: Lớn hơn hoặc bằng
// array-contains: Kiểm tra phần tử trong mảng
// in: Kiểm tra giá trị nằm trong một tập hợp giá trị

// Sắp xếp và giới hạn
// Thêm vào truy vấn
const q = query(
    collection(db, 'users'),
    where('age', '>', 18),
    orderBy('age', 'asc'), // Sắp xếp theo tuổi tăng dần
    limit(10) // Giới hạn 10 kết quả
  );
// truy vấn theo ID
const getPageSize = async (pageSize) => {
const lastDocumentId = 'yourLastDocumentId';

// Truy vấn các tài liệu tiếp theo
    const q = query(
        collection(db, 'users'),
        orderBy(FieldPath.documentId()), // Sắp xếp theo ID tài liệu
        startAfter(lastDocumentId), // Bắt đầu sau ID của tài liệu cuối cùng
        limit(pageSize) // Giới hạn số lượng tài liệu trả về
        );
        const querySnapshot = await getDocs(q);
    const mapData =  querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return mapData
    

}
// get user to limit


// a = {

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              


