function hello(){
	document.querySelector('h1').innerHTML = 'Goodbye!';
}

document.addEventListener('DOMContentLoaded', () => {
	
	document.querySelector('button').onclick = count;

	document.querySelector('#red').onclick = () => {
		document.querySelector('#welcome').style.color = "red";
	};
	document.querySelector('#blue').onclick = () => {
		document.querySelector('#welcome').style.color = "blue";
	};
	document.querySelector('#green').onclick = ()  => {
		document.querySelector('#welcome').style.color = "green";
	};

	document.querySelector('#form').onsubmit = () => {
		const name = document.querySelector("#name").value;
		alert(`Hello ${name}`);
	};

	document.querySelectorAll('.color-change').forEach(button  => {
		button.onclick = () => {
			document.querySelector('#change').style.color = button.dataset.color;
		};
	});

	document.querySelector('#color').onchange = () => {
		document.querySelector('#new-change').style.color = this.value;
	};

	document.querySelector("#task-button").disabled = true;

	document.querySelector("#task").onkeyup = () => {
		document.querySelector("#task-button").disabled = false;
	};

	document.querySelector('#new-task').onsubmit = () => {
		const li = document.createElement("li");
		li.innerHTML = document.querySelector("#task").value;
		document.querySelector("#tasks").append(li);
		document.querySelector("#task").value = "";
		document.querySelector("#task-button").disabled = true;
		return false;
	};	
});

let counter = 0;
function count() {
	counter ++;
	document.querySelector('#counter').innerHTML = counter;
	if (counter % 10 === 0){
		alert(`Counter is at ${counter}`);
	}
}
