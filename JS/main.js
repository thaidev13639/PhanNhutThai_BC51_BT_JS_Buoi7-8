

// Tạo Biến rổng nhập dữ liệu vào trong để tính toán
var arrNumber = [];

// Độ Dài Mảng bằng không thì Alert
function doDaiMangBang0() {
    if (arrNumber.length == 0) {
        alert("Vui Lòng Nhập Số");
    }
}

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
    doDaiMangBang0()
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
    doDaiMangBang0()
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
    doDaiMangBang0()
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
    doDaiMangBang0()
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

    if (arrChiaHet2.length > 0) {
        soChanCuoi = arrChiaHet2[arrChiaHet2.length - 1];
        content = "Số Chẵn Nằm Cuối Mảng : " + soChanCuoi;
    } else {
        content = "Số Chẵn Nằm Cuối Mảng Không Có (-1) "
    }
    // console.log(arrChiaHet2)
    // soChanCuoi = arrChiaHet2[arrChiaHet2.length - 1];
    // content = "Số Chẵn Nằm Cuối Mảng : " + soChanCuoi;
    doDaiMangBang0()
    document.getElementById("ketQua").innerHTML = content;
}

//6. Đổi vị Trí 2 giá Trị Trong Mảng cho người dùng nhập dữ liệu
/**
 * Input: lấy value 2 vị trí muốn đổi để so với mảng
 * Progress: 
 * B1: tạo biến cho lấy giá trị người nhập vị trí muốn đổi (viTri1 viTri2)
 * B2: tạo vòng lập để lấy vị trí cần đổi, sau đó xét điều kiện viTri1 = vs giá trị người nhập thì thực hiện vòng lập kế để lấy viTri2, khi lấy được viTri2 rồi thì đổi vị trí và break;
 * B3: xuất mảng sau khi đổi vị trí
 */
function onOffCau6 (){
    var onOffCau6 = document.getElementById("onOffCau6").value;
    var baiTap6 = document.getElementById("baiTap6");
    if (onOffCau6 == "on") {
        baiTap6.style.display = "block";
        document.getElementById("onOffCau6").value = "off";
    } else if (onOffCau6 == "off") {
        baiTap6.style.display = "none";
        document.getElementById("onOffCau6").value = "on";
    }
}
function doiViTri(){
    console.log(123)
    var content = "";
    var viTri1 = document.getElementById("inputNumberThu1"). value * 1;
    var viTri2 = document.getElementById("inputNumberThu2"). value * 1;
    for(var i = 0; i < arrNumber.length - 1 ; i++){
        if(viTri1 === i){
            for(var j = 0; j < arrNumber.length; j++){
                if(viTri2 === j){
                    var temp = arrNumber[i];
                    arrNumber[i] = arrNumber[j];
                    arrNumber[j] = temp;
                    break;
                }
            }
            break;
        }
    }
    document.getElementById("ketQuaDoiViTri").innerHTML = " Kết Quả : " + arrNumber ;
    console.log(arrNumber);
}
//7. Sắp Xếp Tăng Dần Trong Mảng
/**
 * - Input: lấy giá trị của mảng đi so sánh
 * - Progress: 
 * B1: vòng lập for đầu tiên lấy giá trị đầu xét tới giá trị kế cuối (vì chừa vị trí cuối cho số lớn nhất, nếu xét luôn thì khi xét sẽ ko còn số cuối để xét)
 * B2: vòng lập for thứ 2 xét từng vị trí tới cuối, lúc này xét để biết số nào nằm cuối và gán cho giá trị nằm đó
 * B3: lúc này xét điều kiện thì nếu vị trí [i] > [j] thì sẽ hoán đổi vị trí cho nhau bằng cách qua biến tạm var temp = ?
 * - Output: xuất thông tin. arr[] tìm được mảng được sắp xếp
 * 
 */
function sapXepTangDan() {
    // console.log(123)
    for (var i = 0; i < arrNumber.length - 1; i++) {
        for (var j = i + 1; j < arrNumber.length; j++) { // nếu chỗ này cho j = 1 được kg?
            if (arrNumber[i] > arrNumber[j]) {
                var temp = arrNumber[i];
                arrNumber[i] = arrNumber[j];
                arrNumber[j] = temp;
            }
        }
    }
    doDaiMangBang0()
    document.getElementById("ketQua").innerHTML = "Sắp Xếp Tăng Dần :" + arrNumber;
}

//8. Số Nguyên Tố Đầu Tiên  Trong Mảng
// - số nguyên tố là số chỉ chia hết cho 1 hoặc chính nó mới gọi là số nguyên tố
/**
 * - Input: tạo mảng mới để nhận số nguyên tố
 * - Progress:
 * B1: tạo vòng lập for đầu tiên kiểm tra lấy giá trị (so) của mảng theo từng vị trí để xét điều kiện, tạo biến đếm để xét điều kiện kiểm tra số nguyên tố
 * B2: vòng lập for thứ 2 để kiểm số nguyên tố: nếu (so) chia hết cho 2 thì biến đếm + 1
 * B3: kiểm tra biến đếm: nếu biến đếm === 2 là số nguyên tố, nếu biến đếm > 2 thì không phải số nguyên tố.
 * B4: lấy số nguyên tố đầu tiên bằng cách: lấy vị trí [0] của mảng số nguyên tố mình vừa tạo là được
 * - Output: xuất thông tin. arr[0] tìm dc số nguyên tố đầu tiên
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
        // else if(dem > 2 || dem === 1) {
        //     arrSoNguyenTo.push(-1);
        // }
    }
    // console.log(arrSoNguyenTo);
    if (arrSoNguyenTo.length === 0) {
        var soNguyenToDau = -1;
        content += "Các Số Nguyên Tố : " + arrSoNguyenTo + " <br> ";
        content += "Số Nguyên Tố Đầu Tiên : " + soNguyenToDau;
    } else {
        var soNguyenToDau = arrSoNguyenTo[0];
        content += "Các Số Nguyên Tố : " + arrSoNguyenTo + " <br> ";
        content += "Số Nguyên Tố Đầu Tiên : " + soNguyenToDau;
    }
    doDaiMangBang0()
    document.getElementById("ketQua").innerHTML = content;
}


//9. Nhập Thêm 1 mảng Số Thực và Tìm xem có Tổng Bao Nhiêu Số NGuyên
/**
 * Input: 
 * - tạo mảng mới arrNumber2 để nhận giá trị mới của người dùng
 * Progress:
 * - B1: tạo function để lấy giá trị và push vào mảng arr.push(number);
 * - B2: 
 * +tạo mảng tổng arrTong để nhận 2 giá trị từ arrNumber vs arrNumber2 arr.concat(arr)
 * +tạo function tim số nguyên, tạo mảng số nguyên tố để nhận giá trị tìm được từ arrTong
 * +tạo vòng lập 1 để xét mảng và lấy giá trị từ việc xét vị trí để lấy ra var so = number
 * +tạo vòng lập 2 để tìm ra số nguyên (số nguyên chỉ chia hết cho 1 vs chính nó, ngoài ra không phải), tạo biến đếm và xét điều kiện if, mỗi lần chia hết cho 1 số nào đó == 0 thì biến đếm dem++ (nếu dem > 2 thì ko phải số nguyên tố), khi có số nguyên tố rồi ta sẽ push vào arr nguyên tố vừa tạo
 * +Có mảng số nguyên rồi => tìm được có bao nhiêu số nguyên trong tổng 2 mảng
 * Output: 
 * - xuất thông tin: arr.length
 */
var arrNumber2 = [];
function onOff() {
    // console.log(123)
    var onOff = document.getElementById("onOff").value;
    var baiTap9 = document.getElementById("baiTap9");
    if (onOff == "on") {
        baiTap9.style.display = "block";
        document.getElementById("onOff").value = "off";
    } else if (onOff == "off") {
        baiTap9.style.display = "none";
        document.getElementById("onOff").value = "on";
    }
}
function themSoMoi() {
    // console.log(123)
    var themSoMoi = document.getElementById("inputNumberMoi").value * 1;
    if (themSoMoi === 0) {
        alert("vui lòng nhập số");
    } else {
        arrNumber2.push(themSoMoi);
    }
    // console.log(arrNumber)
    document.getElementById("xuatDuLieuMoi").innerHTML = arrNumber2;
}
function timSoNguyen2Day() {
    // console.log(123)
    var arrTong = [];
    var arrTongSoNguyen2Day = [];
    var content = "";
    arrTong = arrNumber.concat(arrNumber2);
    // console.log(arrTong);
    for (var i = 0; i < arrTong.length; i++) {
        var so = arrTong[i];
        var dem = 0;
        for (var j = 1; j <= so; j++) {
            if (so % j === 0) {
                dem++;
            }
        }
        if (dem === 2) {
            arrTongSoNguyen2Day.push(so);
        }
    }
    content += " Tìm Được Dãy Số Nguyên từ 2 dãy số vừa nhập vào :  " + arrTongSoNguyen2Day + "<br>";
    content += "Tổng Số Nguyên Của 2 Dãy Là : " + arrTongSoNguyen2Day.length + " SÓ";
    document.getElementById("ketQuaMoi").innerHTML = content;
}
//10. Tìm xem Số Dương hay Số Âm Nhiều Hơn
/**
 * Input: xét mảng đã nhập
 * Progress: 
 * B1: cho biến đếm Âm và DƯơng = 0
 * B2: ta kiểm tra biến đếm bên nào lớn hơn
 * Output: xuất Thông tin
 */
function soSanhDuongVaAm() {
    var demDuong = 0;
    var demAm = 0;
    var content = "";
    for (var i = 0; i < arrNumber.length; i++) {
        if (arrNumber[i] > 0) {
            demDuong++
        } else {
            demAm++
        }
    }
    if (demDuong > demAm) {
        content += "Có Tổng " + demDuong + " Số Dương >  " + demAm + " Số Âm";
    } else if(demDuong < demAm) {
        content += "Có Tổng " + demDuong + " Số Dương <  " + demAm + " Số Âm";
    } else{
        content += "Có Tổng " + demDuong + " Số Dương =  " + demAm + " Số Âm";
    }
    doDaiMangBang0()
    document.getElementById("ketQua").innerHTML = content;
}