/**
 * Created by Stefano on 31/03/14.
 */

/**
 * Class for managing a queue.
 * @constructor
 */
function Queue() {
	/**
	 * The list of the items in the queue.
	 * @type {Array<Object>}
	 */
	this.items = [];
}

/**
 * Add the item at the tail of the queue.
 * @param item The item to add.
 * @return {void}
 */
Queue.prototype.enqueue = function (item) {
	this.items.push(item);
};

//noinspection FunctionWithMultipleReturnPointsJS
/**
 * Remove the item at the head of the queue.
 * @return {Object|undefined} The item at the head of the queue. It's undefined if the queue is empty.
 */
Queue.prototype.dequeue = function () {
	if (!this.items.length)
		return undefined;
	return this.items.splice(0, 1)[0]; //remove the first item and return it
};

//noinspection FunctionWithMultipleReturnPointsJS
/**
 * Return the item at the position index.
 * @param index The position of the item.
 * @return {Object|undefined} The item at the position. It's undefined if index isn't in the queue bounds.
 */
Queue.prototype.getItem = function (index) {
	if (index < 0 || index > this.items.length - 1)
		return undefined;
	return this.items[index];
};

/**
 * Return the length of the queue.
 * @return {Number} The length of the queue.
 */
Queue.prototype.getLength = function () {
	return this.items.length;
};