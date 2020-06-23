// Pagination Project - Jairo Hernandez

// global variables
const studentList = document.querySelectorAll("li");
const itemsPerPage = 10;
const page = document.querySelector("div");

// functon shows a given set of 10 student list profiles depending on the page paramater
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

// function creates and appends pages with their respective student list
const appendPageLinks = (list) => {
	const numberOfPages = Math.ceil(list.length / itemsPerPage);
	const pageDiv = document.createElement("div");
	const pageList = document.createElement("ul");
	pageDiv.className = "pagination";
	page.appendChild(pageDiv);
	pageDiv.appendChild(pageList);
	for (i = 1; i <= numberOfPages; i++) {
		const li = document.createElement("li");
		const a = document.createElement("a");
		pageList.appendChild(li);
		li.appendChild(a);
		a.href = "#";
		a.textContent = i;
		a.addEventListener("click", (event) => {
			const eventTarget = event.target;
			const pagNumber = parseInt(eventTarget.textContent);
			showPage(list, pagNumber);
			document.querySelector(`.active`).classList.remove("active");
			eventTarget.classList.add("active");
		});
	};
};


showPage(studentList, 1);
appendPageLinks(studentList);
