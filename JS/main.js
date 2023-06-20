

// Tạo Biến rổng nhập dữ liệu vào trong để tính toán
var arrNumber = [];

// onclick để lấy dữ liệu thông tin 
document.getElementById("themSo").onclick = function () {
    var themSo = document.getElementById("inputNumber").value * 1;
    if (themSo === 0) {
        alert("vui lòng nhập số");
    } else {
        arrNumber.push(themSo);
    }
    // console.log(arrNumber)
    document.getElementById("xuatDuLieu").innerHTML = arrNumber;
}

// 1. Tổng các số dương
/** 
 * - InPut: Duyệt mảng tìm ra số dương
 * - Progress: 
 * B1: onclick tới button,tạo biến cộng dồn => lấy dữ liệu trong mảng so sánh > 0;
 * B2:  true => cộng dồn 
 * - Output: Xuất Thông tin
 */
function tinhTongDuong() {
    // console.log(123)
    var tongDuong = 0;
    var content = "";
    for (var i = 0; i < arrNumber.length; i++) {
        if (arrNumber[i] > 0) {
            tongDuong += arrNumber[i];
        }
    }
    content = "Tổng của các Số Dương là : " + tongDuong;
    document.getElementById("ketQua").innerHTML = content;
    // console.log(tongDuong);
}

// 2. Tìm xem có bao nhiêu số dương
/**
 * - Input: Duyệt mảng tìm ra số Dương
 * - Progress: 
 * B1: onlick tới button,tạo biến đếm => lấy dự liệu mảng so sánh > 0 (lấy dc số dương)
 * B2: true => biến đếm cộng 1
 * - Output: xuất thông tin
 */
function timTongSoDuong() {
    // console.log(123)
    var dem = 0;
    var content = "";
    for (var i = 0; i < arrNumber.length; i++) {
        if (arrNumber[i] > 0) {
            dem++;
        }
    }
    content = "Có Tổng " + dem + " Số Dương.";
    document.getElementById("ketQua").innerHTML = content;
}

//3. Tìm Số Nhỏ Nhất
/**
 * - Input: duyệt mảng lấy dư liệu
 * - Progress: 
 * B1 : kiểm tra dư liệu, giả sử số đầu tiên nhỏ nhất (var min)
 * B2 : so sánh các số nếu số nào nhỏ hơn thì sẽ gán số đó cho min
 * - Output: xuất thông tin
 */

function timSoMin() {
    var min = arrNumber[0];
    var content = "";
    for (var i = 1; i < arrNumber.length; i++) {
        if (arrNumber[i] < min) {
            min = arrNumber[i];
        }
    }
    content = "Số Nhỏ Nhất Là : " + min;
    document.getElementById("ketQua").innerHTML = content;
}

//4. Tìm Số Dương Nhỏ Nhất
/**
 * - Input: duyệt mảng lấy dữ liệu 
 * - Progress: 
 * B1 : tạo mảng mới=> cho duyệt mảng chỉ lấy số dương 
 * B2 : 
 * + lúc này mới cho minD = arrDuong[0];
 * + duyệt mảng kiểm tra số nào bé hơn thì gán cho minD
 * - Output: xuất thông tin
 */

function timSoMinDuong() {
    var arrDuong = [];
    // var minD = arrNumber[0];
    var content = "";
    // for(var i = 0; i < arrNumber.length; i++){
    //     if(arrNumber[i] < minD && arrNumber[i] > 0){         
    //         minD = arrNumber[i];
    //     }
    // } điều kiện if có vấn đề nếu arrNumber[0] < 0
    for (var i = 0; i < arrNumber.length; i++) {
        if (arrNumber[i] > 0) {
            arrDuong.push(arrNumber[i]);
        }
    }

    var minD = arrDuong[0];

    for (var i = 0; i < arrDuong.length; i++) {
        if (arrDuong[i] < minD) {
            minD = arrDuong[i];
        }
    }
    // console.log(arrDuong)
    content = "Số Dương Nhỏ Nhất Là : " + minD;
    document.getElementById("ketQua").innerHTML = content;
}

//5. Tìm Số Chẵn Cuối Cùng
/**
 * - Input: duyệt mảng arrNumber lấy dữ liệu
 * - Progress: 
 * B1: tạo biến để nhận lấy số chẵn nằm cuối, tạo mảng mới chỉ lấy số chia hết cho 2
 * B2: duyệt mảng lấy ra số chia hết cho 2 và gán cho mảng arrChiaHet2
 * B3: lấy ra số cuối của mảng arrChiaHet2 gán cho biến soChanCuoi bằng cách vị trí của mảng bằng độ dài mảng trừ đi 1
 * - Output:
 */
function timSoChanCuoi() {
    // console.log(123)
    var soChanCuoi = 0;
    var arrChiaHet2 = [];
    var content = "";
    for (var i = 0; i < arrNumber.length; i++) {
        if (arrNumber[i] % 2 === 0) {
            arrChiaHet2.push(arrNumber[i]);
        }
    }
    // console.log(arrChiaHet2)
    soChanCuoi = arrChiaHet2[arrChiaHet2.length - 1];
    content = "Số Chẵn Nằm Cuối Mảng : " + soChanCuoi;
    document.getElementById("ketQua").innerHTML = content;
}

//6. Đổi vị Trí 2 giá Trị Trong Mảng cho người dùng nhập dữ liệu
//7. Sắp Xếp Tăng Dần Trong Mảng


//8. Số Nguyên Tố Đầu Tiên  Trong Mảng
/**
 * - Input: tạo mảng mới để nhận số nguyên tố
 * - Progress:
 * B1: tạo vòng lập for đầu tiên kiểm tra lấy giá trị (so) của mảng theo từng vị trí để xét điều kiện, tạo biến đếm để xét điều kiện kiểm tra số nguyên tố
 * B2: vòng lập for thứ 2 để kiểm số nguyên tố: nếu (so) chia hết cho 2 thì biến đếm + 1
 * B3: kiểm tra biến đếm: nếu biến đếm === 2 là số nguyên tố, nếu biến đếm > 2 thì không phải số nguyên tố.
 * B4: lấy số nguyên tố đầu tiên bằng cách: lấy vị trí [0] của mảng số nguyên tố mình vừa tạo là được
 * - Output: xuất thông tin.
 */
function soNguyenToDauTien() {
    // console.log(123)
    var content = "";
    var arrSoNguyenTo = [];
    for (var i = 0; i < arrNumber.length; i++) {
        var so = arrNumber[i];
        var dem = 0;
        for (var j = 1; j <= so; j++) {
            if (so % j === 0) {
                dem++;
            }
        }
        if (dem === 2) {
            arrSoNguyenTo.push(so);
        }
    }
    // console.log(arrSoNguyenTo);
    var soNguyenToDau = arrSoNguyenTo[0];
    content += "Các Số Nguyên Tố : " + arrSoNguyenTo + " <br> ";
    content += "Số Nguyên Tố Đầu Tiên : " + soNguyenToDau;
    document.getElementById("ketQua").innerHTML = content;
}


//9. Nhập Thêm 1 mảng Số Thực và Tìm xem có Tổng Bao Nhiêu Số NGuyên
//10. Tìm xem Số Dương hay Số Âm Nhiều Hơn