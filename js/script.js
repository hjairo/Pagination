// Pagination Project - Jairo Hernandez

// global variables
const studentList = document.querySelectorAll("li");
const itemsPerPage = 10;
const div = document.querySelector(".page");
const searchContainer = document.createElement("div");
searchContainer.className = "student-search";
const searchBar = document.createElement("input");
searchBar.placeholder = "Search for students...";
const searchButton = document.createElement("button");
searchButton.textContent = "Search";
searchContainer.appendChild(searchButton);
searchContainer.insertBefore(searchBar, searchButton);
const pageHeader = document.querySelector(".page-header");
pageHeader.appendChild(searchContainer);

// functon shows a given set of 10 student list profiles depending on the page paramater
const showPage = (list, page) => {
	const startIndex = (page * itemsPerPage) - itemsPerPage;
	const endIndex = page * itemsPerPage;
	for (let i = 0; i < list.length; i++) {
		if (i >= startIndex && i < endIndex) {
			list[i].style.display = "";
		} else {
			list[i].style.display = "none";
		}
	}
};

// function creates and appends pages with their respective student list
const appendPageLinks = (list) => {
	const appendPageDiv = document.createElement("div");
	appendPageDiv.className = "pagination";
	let numberOfPages = Math.ceil(list.length / itemsPerPage);
	const pageList = document.createElement("ul");
	div.appendChild(appendPageDiv);
	appendPageDiv.appendChild(pageList);
	for (i = 1; i <= numberOfPages; i++) {
		const li = document.createElement("li");
		const a = document.createElement("a");
		pageList.appendChild(li);
		li.appendChild(a);
		a.href = "#";
		a.textContent = i;
		if (a.textContent === "1") {
			a.className = "active";
		}
		a.addEventListener("click", (event) => {
			const eventTarget = event.target;
			const pagNumber = parseInt(eventTarget.textContent);
			document.querySelector(`.active`).classList.remove("active");
			eventTarget.classList.add("active");
			showPage(search(), pagNumber);
		});
	}
};

// search function searches through the studentList to find a match
const search = () => {
	const insertedText = searchBar.value;
	const result = [];
	for (let i = 0; i < studentList.length; i++) {
		studentList[i].style.display = "none";
		if (insertedText.length !== 0 && studentList[i].childNodes[1].textContent.toLowerCase().includes(insertedText.toLowerCase())) {
			studentList[i].style.display = "";
			result.push(studentList[i]);
		} else if (insertedText.length === 0) {
			result.push(studentList[i]);
		};
	};
	return result;
};

// function that receives text input from the searchBar and displays matching students with appropriate pagination
const searchResults = () => {
	const results = search();
	const note = document.getElementById("no-results");
	if (note) {
		div.removeChild(note);
	};
	if (results.length === 0) {
		const noResults = document.createElement("p");
		noResults.textContent = "No results found";
		noResults.id = "no-results";
		div.appendChild(noResults);
	};
	div.removeChild(document.querySelector(".pagination"));
	showPage(results, 1);
	appendPageLinks(results);
};

// eventListeners for the searchBar and searchButton
searchBar.addEventListener("keyup", searchResults);
searchButton.addEventListener("submit", searchResults);

//functions called to display list of students with pagination links
showPage(studentList, 1);
appendPageLinks(studentList);
