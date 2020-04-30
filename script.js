function range(start, end, tam) {
	var list = [];
	for (var i = start; i <= end; i++) {
	   list.push(i)
	}
  return list
}
function sum(lista) {
	var total = 0;
	var start = lista[0];
	var end = lista.length;
	for (var i = start; i <= end; i++) {
	   total = total + i
	}
	return total
}

console.log(range(1, 10));
console.log(sum(range(1, 10)));