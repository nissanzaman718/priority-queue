/**
 * A priority queue stores a list of items but each can have a numeric priority value.
 * Items with a higher priority are dequeued before items with a lower priority.
 * Implemented as a hash of arrays where the hash keys are priority values.
 */
function PriorityQueue(size) {
	this.store = {};	// keys are priorities, values are arrays of elements
	this.count = 0;

	// adds an item
	// priority must be an integer (higher value has higher priority)
	this.add = function(value, priority) {
		if (this.store[priority] == undefined)
			this.store[priority] = [];
		//If there is No Braces for IF condition then it puts the key as undefined, No actual effect
		//If there Braces is present for IF condition then it clearing other add values parameter		
			this.store[priority].push(value);
			this.count++;
	};

	returns the oldest-added value with the highest priority
	this.Pop = function() {
		let maxKey = Math.max(Object.keys(this.store));
		// console.log(this.store);
		// console.log(maxKey) 
		this.count--;
		return this.store[maxKey].shift();
	};

	this.length = function() {
		return this.count;
	}
}

PriorityQueue.prototype.get_all_priorities = function() {
	return Object.keys(this.store);
}

// iterates through all the queue elements in priority-then-FIFO order
PriorityQueue.prototype.forEach = function(callback) {
	var keys = Object.keys(this.store).sort();

	for (var a = keys.length; a > 0; a--) {
		for (var b = 0; b < this.store[a].length; b++)
			callback(this.store[a][b]);
	}
}

PriorityQueue.prototype.changePriority = function(value, newPriority) {
	var foundItem = false;
	//console.log(this.store);

	this.store.forEach(function(bucket) {
		bucket.forEach(function(item, index) {
			if (item === value) {
				bucket.splice(index, 1);  // remove the item
				this.add(value, newPriority);
				foundItem = true;
				return false;  // early exit from forEach
			}
		});
		if (foundItem) return false;
	});
}

let pq  = new PriorityQueue();

let pop = pq.Pop();
//let length = pq.length();
let forEach = pq.forEach(pop);
let get_all_priorities = pq.get_all_priorities();

//pq.changePriority('mango', 30);

pq.add('mango',20);
pq.add('orange',15);
pq.add('Potato',20);
pq.add('apple',30);
pq.add('apple', 25);

console.log('Pop Down',pop);

console.log('length', length);
console.log('get_all_priorities', get_all_priorities);
// console.log('Changing Priority');
// console.log(get_all_priorities);