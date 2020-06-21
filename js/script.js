const studentList = document.querySelectorAll("li");
const itemsPerPage = 10;

const showPage = (list, page) => {
	const startIndex = (page * itemsPerPage) - itemsPerPage;
	const endIndex = (page * itemsPerPage) - 1;
	for (let i = 0; i < list.length; i++) {
		if (i >= startIndex && i <= endIndex) {
			list[i].style.display = "";
		} else {
			list[i].style.display = "none";
		}
	}
};

showPage(studentList, 1);
console.log(studentList, 1);
