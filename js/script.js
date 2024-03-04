"use strict";{
    const open = document.querySelector(".header__sp-menubtn");
	const nav = document.querySelector(".header__navList");
	open.addEventListener("click", () => {
		open.classList.toggle("open");
		nav.classList.toggle("open");
	});
}