function hello() {
	document.querySelector('h1').innerHTML = 'Goodbye!';
}

if(!localStorage.getItem('counter'))
	localStorage.setItem('counter', 0);

document.addEventListener('DOMContentLoaded', () => {
	document.querySelector('button').onclick = count;
	document.querySelector('#form').onsubmit = () =>{
		const name = document.querySelector('#name').value;
		alert(`Hello ${name}!`)
	}
	document.querySelectorAll('.color-change').forEach(button => {
		 button.onclick= () => {
			document.querySelector('#hello').style.color = button.dataset.color;
		};
	});
	document.querySelector('#color-change').onchange = function () {
		document.querySelector('#hello').style.color = this.value;
	};
	document.querySelector('#counter').innerHTML =localStorage.getItem('counter');

	document.querySelector('button').onclick = () =>{
		let counter = localStorage.getItem('counter');
		counter++;

		document.querySelector('#counter').innerHTML = counter;
		localStorage.setItem('counter', counter);
	}
});

let counter = 0;

function count(){
	counter++;
	document.querySelector('#counter').innerHTML = counter;
	if(counter% 10 === 0){
		alert(`Counter is at ${counter}!`)
	}
}

