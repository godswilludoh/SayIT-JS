// //Add a search function to the DOM
// function searchBlogsBySector() {
// 	const input = document.getElementById('search');
// 	const blogGridContainer = document.getElementById('blog_grid-container');
// 	console.log(blogGridContainer);

// 	const inputValue = input.value.toUpperCase();
// 	const blogList = blogGridContainer.querySelectorAll('.blog_box-wrapper'); //returns an array of the blog_box-wrapper class
// 	// console.log(blogList)
// 	//Looping through all the blogs and rendering the ones that matches the search input
// 	for (i = 0; i < blogList.length; i++) {
// 		const blogListDivTAg = blogList[i].querySelector('.blog_sector-category');
// 		const blogListDivTagValue = blogListDivTAg.innerText.toUpperCase();
// 		isMatch = blogListDivTagValue.indexOf(inputValue) > -1;
// 		if (isMatch) {
// 			blogList[i].style.display = 'block';
// 		} else {
// 			blogList[i].style.display = 'none';
// 		}
// 	}
// }

const searchInput = document.getElementById('search-input');
const rows = document.querySelectorAll('.row');
//console.log(rows);

/*adding event listener*/
searchInput.addEventListener('keyup', (e) => {
	const textDetails = e.target.value;
	//console.log(textDetails);

	/* Looping through the table rows */
	rows.forEach((row) => {
		row.querySelector('td').textContent.toLowerCase().startsWith(textDetails)
			? (row.style.display = 'table-row')
			: (row.style.display = 'none');
	});
});
