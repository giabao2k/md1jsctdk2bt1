let anh = null;
anh = document.getElementById('quabong');
function init(){
    anh = document.getElementById('quabong'); 
    anh.style.position = 'relative'; //lay minh lam goc toa do khong phu thuoc vao doi tuong nao o ngoai ca
    // anh.style.right = '0px'; // style chỉnh khoảng cách từ cạnh mh đến quả bóng
}
function dichuyen() {
    anh.style.right = parseInt(anh.style.right) + 10 + 'px' ;
}
window.onload = init; // load cái hàm khởi tạo ảnh đấy lên html