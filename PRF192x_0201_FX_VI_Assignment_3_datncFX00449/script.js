$(document).ready(function () {
	$("#buttonNhap").click(function () {
		var countSTT = $("tbody  tr").length + 1;
		var yourName = $("#yourName").val();
		var diemToan = $("#diemToan").val();
		var diemLy = $("#diemLy").val();
		var diemHoa = $("#diemHoa").val();
		if (yourName != "" && diemToan != "" && diemLy != "" && diemHoa != "") {
			if (diemToan <= 10 && diemLy <= 10 && diemHoa <= 10 && diemToan >= 0 && diemLy >= 0 && diemHoa >= 0) {
				var insertTable = "<tr><td>" + countSTT + "</td><td>" + yourName + "</td><td>" + diemToan + "</td><td>" + diemLy + "</td><td>" + diemHoa + "</td><td></td></tr>";
				$("table tbody").append(insertTable);
			} else {
				alert("Nhập điểm số không hợp lệ");
			}
		} else {
			alert("Vui lòng nhập đầy đủ thông tin");
		}
	});

	$("#averagemark").click(function () {
		$("tbody tr").each(function () {
			var Toan = $(this).find("td").eq(2).html();
			var diemToan = +Toan;
			var Ly = $(this).find("td").eq(3).html();
			var diemLy = +Ly;
			var Hoa = $(this).find("td").eq(4).html();
			var diemHoa = +Hoa;
			var diemTB = ((diemToan + diemLy + diemHoa) / 3).toFixed(1);
			$(this).find("td").eq(5).html(diemTB);
		});

	});

	$("#classification").click(function () {
		$("tbody tr").each(function () {
			var TB = $(this).find("td").eq(5).html();
			var diemTB = +TB;
			if (diemTB >= 8) {
				$(this).find("td").addClass("hsGioi");
			};
		});
	});

});
