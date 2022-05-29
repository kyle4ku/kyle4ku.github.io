const obj = [
	{
		id: 1,
		title: "buttermilk pancakes",
		img: "images/item-1.jpeg",
		category: "breakfast",
		price: 15,
		description:
			"a cripsy pancake topped with buttermilk at an affordable price",
	},
	{
		id: 2,
		title: "hamburgers and fries",
		img: "images/item-2.jpeg",
		category: "lunch",
		price: 30,
		description:
			"hamburger with fries as combo get it while it hot at an affordable price",
	},
	{
		id: 3,
		title: "milkshake",
		img: "images/item-3.jpeg",
		category: "shakes",
		price: 15,
		description:
			"a cripsy pancake topped with buttermilk at an affordable price",
	},
	{
		id: 4,
		title: "egg and toast",
		img: "images/item-4.jpeg",
		category: "lunch",
		price: 40,
		description:
			"a cripsy pancake topped with buttermilk at an affordable price",
	},
	{
		id: 5,
		title: "hamburger",
		category: "breakfast",
		img: "images/item-5.jpeg",
		price: 10,
		description:
			"a cripsy pancake topped with buttermilk at an affordable price",
	},
	{
		id: 6,
		title: "strawberry milkshake",
		img: "images/item-6.jpeg",
		category: "shakes",
		price: 20,
		description:
			"a cripsy pancake topped with buttermilk at an affordable price",
	},
	{
		id: 7,
		title: "incomplete hamburger",
		img: "images/item-7.jpeg",
		category: "breakfast",
		price: 15,
		description:
			"a cripsy pancake topped with buttermilk at an affordable price",
	},
	{
		id: 8,
		title: "just burger and fries",
		img: "images/item-8.jpeg",
		category: "breakfast",
		price: 20,
		description:
			"a cripsy pancake topped with buttermilk at an affordable price",
	},
	{
		id: 9,
		title: "delicious milkshake",
		img: "images/item-9.jpeg",
		category: "shakes",
		price: 15,
		description:
			"a cripsy pancake topped with buttermilk at an affordable price",
	},
	{
		id: 10,
		title: "steak with toppings",
		img: "images/item-10.jpeg",
		category: "Steak",
		price: 20,
		description:
			"a cripsy pancake topped with buttermilk at an affordable price",
	},
];

const section = document.querySelector(".content");
const button_container = document.querySelector(".btn-container");
// to add buttons dynamically
window.addEventListener("DOMContentLoaded", () => {
	displayMenu(obj);
	displayaddbtn();
});

let displayMenu = (menuItems) => {
	let obj_modified = menuItems.map((item) => {
		return ` <div class="element">
    <img src="${item.img}" alt="${item.title}" class="photo">
    <div class="description">
       <section class="desc"><h2>${item.title}</h2><h3>$${item.price}</h3></section>
       <p class="details">${item.description}                  
    </div>
</div>`;
	});
	obj_modified = obj_modified.join("");
	section.innerHTML = obj_modified;
};

// click and filter content
const displayaddbtn = () => {
	let reduceArray = obj.reduce(
		(initial, item) => {
			if (!initial.includes(item.category)) {
				initial.push(item.category);
			}
			return initial;
		},
		["all"]
	);

	let dynamicbtn = reduceArray.map((item) => {
		return `<button class="btn-element" data-id="${item}">${item}</button>`;
	});
	dynamicbtn = dynamicbtn.join("");
	button_container.innerHTML = dynamicbtn;

	let buttons = document.querySelectorAll(".btn-element");
	console.log(buttons);

	buttons.forEach((item) => {
		item.addEventListener("click", (e) => {
			console.log(e.currentTarget);
			const category = e.currentTarget.dataset.id;
			let filteredArray = obj.filter((x) => {
				return x.category === category;
			});
			if (category === "all") {
				displayMenu(obj);
			} else {
				displayMenu(filteredArray);
			}
		});
	});
};
