const promise1 =  new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve(Math.floor(Math.random()*3 + 1));
	},Math.floor(Math.random()*3 + 1));
});

const promise2 = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve(Math.floor(Math.random()*3 + 1));
	},Math.floor(Math.random()*3 + 1));
});

const promise3 = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve(Math.floor(Math.random()*3 + 1));
	},Math.floor(Math.random()*3 + 1));
});

let promises = [promise1,promise2,promise3];

Promise.all(promises).then((result)=>{
	const row1 = document.getElementById("row1");
	row1.children[1].textContent = result[0];

	const row2 = document.getElementById("row2");
	row2.children[1].textContent = result[1];

	const row3 = document.getElementById("row3");
	row3.children[1].textContent = result[2];

	const totalRow = document.querySelector("tbody tr:last-child");
	const totalTime = result.reduce((acc,curr)=> acc + curr,0);
	totalRow.children[1].textContent = totalTime;

	const loadingRow = document.querySelector("#loading");
    loadingRow.remove();
	
})