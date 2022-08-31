export function setData(key, value) {
	localStorage.setItem(key, value);
}

export function getData(key) {
	localStorage.getItem(key);
}

export function removeData(key) {
	localStorage.removeItem(key);
}
