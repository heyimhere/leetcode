const ev = [
	"BUY googl 20",
	"BUY aapl 50",
	"CHANGE googl 6",
	"QUERY",
	"SELL aapl 10",
	"CHANGE aapl -2",
	"QUERY"
]

function getGrossProfit(events) {
	let result = [];
	let profit = 0;
	let stockHolding = new Map();
	let stockPrices = new Map();

	for(let i = 0; i < events.length; i++) {
		let [action, stockName, amount] = events[i].split(" ");
		amount = Number(amount);

		if(action === "BUY") {
			if(stockHolding.has(stockName)) {
				stockHolding.set(stockName, stockHolding.get(stockName) + amount);
			} else {
				stockHolding.set(stockName, amount);
			}
		} else if(action === "SELL") {
			stockHolding.set(stockName, stockHolding.get(stockName) - amount);
		} else if(action === "CHANGE") {
			if(stockHolding.has(stockName)) {
				let quantity = stockHolding.get(stockName);
				let previousPrice = stockPrices.get(stockName) || 0;
				let newPrice = previousPrice + amount;
				profit += quantity * (newPrice - previousPrice);
				stockPrices.set(stockName, newPrice);
			}
		} else if(action === "QUERY") {
			result.push(profit);
		}
	}
	return result;
}

// coding interview sample

// practice 1
function getGrossProfit(events) {
	let result = [];
	let profit = 0;
	let stockHolding = new Map();
	let stockPrices = new Map();

	for(let i = 0; i < events.length; i++) {
		let [action, stockName, amount] = events[i].split(" ");
		amount = Number(amount);

		if(action === "BUY") {
			if(stockHolding.has(stockName)) {
				stockHolding.set(stockName, stockHolding.get(stockName) + amount);
			} else {
				stockHolding.set(stockName, amount);
			}
		} else if(action === "SELL") {
			stockHolding.set(stockName, stockHolding.get(stockName) - amount);
		} else if(action === "CHANGE") {
			if(stockHolding.has(stockName)) {
				let quantity = stockHolding.get(stockName);
				let previousPrice = stockPrices.get(stockName) || 0;
				let newPrice = previousPrice + amount;
				profit += quantity * (newPrice - previousPrice);
				stockPrices.set(stockName, newPrice);
			}
		} else if(action === "QUERY") {
			result.push(profit);
		}
	}
	return result;
}

// practice 2
function getGrossProfit(events) {
	let result = [];
	let profit = 0;
	let stockHolding = new Map();
	let stockPrices = new Map();

	for(let i = 0; i < events.length; i++) {
		let [action, stockName, amount] = events[i].split(" ");
		amount = Number(amount);

		if(action === "BUY") {
			if(stockHolding.has(stockName)) {
				stockHolding.set(stockName, stockHolding.get(stockName) + amount);
			} else {
				stockHolding.set(stockName, amount);
			}
		} else if(action === "SELL") {
			stockHolding.set(stockName, stockHolding.get(stockName) - amount);
		} else if(action === "CHANGE") {
			if(stockHolding.has(stockName)) {
				let quantity = stockHolding.get(stockName);
				let previousPrice = stockPrices.get(stockName) || 0;
				let newPrice = previousPrice + amount;
				profit += quantity * (newPrice - previousPrice);
				stockPrices.set(stockName, newPrice);
			}
		} else if(action === "QUERY") {
			result.push(profit);
		}
	}
	return result;
}

// practice 3
function getGrossProfit(events) {
	let result = [];
	let profit = 0;
	let stockHolding = new Map();
	let stockPrices = new Map();

	for(let i = 0; i < events.length; i++) {
		let [action, stockName, amount] = events[i].split(" ");
		amount = Number(amount);

		if(action === "BUY") {
			if(stockHolding.has(stockName)) {
				stockHolding.set(stockName, stockHolding.get(stockName) + amount);
			} else {
				stockHolding.set(stockName, amount);
			}
		} else if(action === "SELL") {
			stockHolding.set(stockName, stockHolding.get(stockName) - amount);
		} else if(action === "CHANGE") {
			if(stockHolding.has(stockName)) {
				let quantity = stockHolding.get(stockName);
				let previousPrice = stockPrices.get(stockName) || 0;
				let newPrice = previousPrice + amount;
				profit += quantity * (newPrice - previousPrice);
				stockPrices.set(stockName, newPrice);
			}
		} else if(action === "QUERY") {
			result.push(profit);
		}
	}
	return result;
}

// practice 4
function getGrossProfit(events) {
	let result = [];
	let profit = 0;
	let stockHolding = new Map();
	let stockPrices = new Map();

	for(let i = 0; i < events.length; i++) {
		let [action, stockName, amount] = events[i].split(" ");
		amount = Number(amount);

		if(action === "BUY") {
			if(stockHolding.has(stockName)) {
				stockHolding.set(stockName, stockHolding.get(stockName) + amount);
			} else {
				stockHolding.set(stockName, amount);
			}
		} else if(action === "SELL") {
			stockHolding.set(stockName, stockHolding.get(stockName) - amount);
		} else if(action === "CHANGE") {
			if(stockHolding.has(stockName)) {
				let quantity = stockHolding.get(stockName);
				let previousPrice = stockPrices.get(stockName) || 0;
				let newPrice = previousPrice + amount;
				profit += quantity * (newPrice - previousPrice);
				stockPrices.set(stockName, newPrice);
			}
		} else if(action === "QUERY") {
			result.push(profit);
		}
	}
	return result;
}

// practice 5
function getGrossProfit(events) {
	let result = [];
	let profit = 0;
	let stockHolding = new Map();
	let stockPrices = new Map();

	for(let i = 0; i < events.length; i++) {
		let [action, stockName, amount] = events[i].split(" ");
		amount = Number(amount);

		if(action === "BUY") {
			if(stockHolding.has(stockName)) {
				stockHolding.set(stockName, stockHolding.get(stockName) + amount);
			} else {
				stockHolding.set(stockName, amount);
			}
		} else if(action === "SELL") {
			stockHolding.set(stockName, stockHolding.get(stockName) - amount);
		} else if(action === "CHANGE") {
			if(stockHolding.has(stockName)) {
				let quantity = stockHolding.get(stockName);
				let previousPrice = stockPrices.get(stockName) || 0;
				let newPrice = previousPrice + amount;
				profit += quantity * (newPrice - previousPrice);
				stockPrices.set(stockName, newPrice);
			}
		} else if(action === "QUERY") {
			result.push(profit);
		}
	}
	return result;
}

// practice 6
function getGrossProfit(events) {
	let result = [];
	let profit = 0;
	let stockHolding = new Map();
	let stockPrices = new Map();

	for(let i = 0; i < events.length; i++) {
		let [action, stockName, amount] = events[i].split(" ");
		amount = Number(amount);

		if(action === "BUY") {
			if(stockHolding.has(stockName)) {
				stockHolding.set(stockName, stockHolding.get(stockName) + amount);
			} else {
				stockHolding.set(stockName, amount);
			}
		} else if(action === "SELL") {
			stockHolding.set(stockName, stockHolding.get(stockName) - amount);
		} else if(action === "CHANGE") {
			if(stockHolding.has(stockName)) {
				let quantity = stockHolding.get(stockName);
				let previousPrice = stockPrices.get(stockName) || 0;
				let newPrice = previousPrice + amount;
				profit += quantity * (newPrice - previousPrice);
				stockPrices.set(stockName, newPrice);
			}
		} else if(action === "QUERY") {
			result.push(profit);
		}
	}
	return result;
}

// practice 7
function getGrossProfit(events) {
	let result = [];
	let profit = 0;
	let stockHolding = new Map();
	let stockPrices = new Map();

	for(let i = 0; i < events.length; i++) {
		let [action, stockName, amount] = events[i].split(" ");
		amount = Number(amount);

		if(action === "BUY") {
			if(stockHolding.has(stockName)) {
				stockHolding.set(stockName, stockHolding.get(stockName) + amount);
			} else {
				stockHolding.set(stockName, amount);
			}
		} else if(action === "SELL") {
			stockHolding.set(stockName, stockHolding.get(stockName) - amount);
		} else if(action === "CHANGE") {
			if(stockHolding.has(stockName)) {
				let quantity = stockHolding.get(stockName);
				let previousPrice = stockPrices.get(stockName) || 0;
				let newPrice = previousPrice + amount;
				profit += quantity * (newPrice - previousPrice);
				stockPrices.set(stockName, newPrice);
			}
		} else if(action === "QUERY") {
			result.push(profit);
		}
	}
	return result;
}

// practice 8
function getGrossProfit(events) {
	let result = [];
	let profit = 0;
	let stockHolding = new Map();
	let stockPrices = new Map();

	for(let i = 0; i < events.length; i++) {
		let [action, stockName, amount] = events[i].split(" ");
		amount = Number(amount);

		if(action === "BUY") {
			if(stockHolding.has(stockName)) {
				stockHolding.set(stockName, stockHolding.get(stockName) + amount);
			} else {
				stockHolding.set(stockName, amount);
			}
		} else if(action === "SELL") {
			stockHolding.set(stockName, stockHolding.get(stockName) - amount);
		} else if(action === "CHANGE") {
			if(stockHolding.has(stockName)) {
				let quantity = stockHolding.get(stockName);
				let previousPrice = stockPrices.get(stockName) || 0;
				let newPrice = previousPrice + amount;
				profit += quantity * (newPrice - previousPrice);
				stockPrices.set(stockName, newPrice);
			}
		} else if(action === "QUERY") {
			result.push(profit);
		}
	}
	return result;
}

// practice 9
function getGrossProfit(events) {
	let result = [];
	let profit = 0;
	let stockHolding = new Map();
	let stockPrices = new Map();

	for(let i = 0; i < events.length; i++) {
		let [action, stockName, amount] = events[i].spllit(" ");
		amount = Number(amount);

		if(action === "BUY") {
			if(stockHolding.has(stockName)) {
				stockHolding.set(stockName, stockHolding.get(stockName) + amount);
			} else {
				stockHolding.set(stockName, amount);
			}
		} else if(action === "SELL") {
			stockHolding.set(stockName, stockHolding.get(stockName) - amount);
		} else if(action === "CHANGE") {
			if(stockHolding.has(stockName)) {
				let quantity = stockHolding.get(stockName);
				let previousPrice = stockPrices.get(stockName) || 0;
				let newPrice = previousPrice + amount;
				profit += quantity * (newPrice - previousPrice);
				stockPrices.set(stockName, newPrice);
			}
		} else if(action === "QUERY") {
			result.push(profit);
		}
	}
	return result;
}

// practice 10
function getGrossProfit(events) {
	let result = [];
	let profit = 0;
	let stockHolding = new Map();
	let stockPrices = new Map();

	for(let i = 0; i < events.length; i++) {
		let [action, stockName, amount] = events[i].split(" ");
		amount = Number(amount);

		if(action === "BUY") {
			if(stockHolding.has(stockName)) {
				stockHolding.set(stockName, stockHolding.get(stockName) + amount);
			} else {
				stockHolding.set(stockName, amount);
			}
		} else if(action === "SELL") {
			stockHolding.set(stockName, stockHolding.get(stockName) - amount);
		} else if(action === "CHANGE") {
			if(stockHolding.has(stockName)) {
				let quantity = stockHolding.get(stockName);
				let previousPrice = stockPrices.get(stockName) || 0;
				let newPrice = previousPrice + amount;
				profit += quantity * (newPrice - previousPrice);
				stockPrices.set(stockName, newPrice);
			}
		} else if(action === "QUERY") {
			result.push(profit);
		}
	}
	return result;
}

// practice 11
function getGrossProfit(events) {
	let result = [];
	let profit = 0;
	let stockHolding = new Map();
	let stockPrices = new Map();

	for(let i = 0; i < events.length; i++) {
		let [action, stockName, amount] = events[i].split(" ");
		amount = Number(amount);

		if(action === "BUY") {
			if(stockHolding.has(stockName)) {
				stockHolding.set(stockName, stockHolding.get(stockName) + amount);
			} else {
				stockHolding.set(stockName, amount);
			}
		} else if(action === "SELL") {
			stockHolding.set(stockName, stockHolding.get(stockName) - amount);
		} else if(action === "CHANGE") {
			if(stockHolding.has(stockName)) {
				let quantity = stockHolding.get(stockName);
				let previousPrice = stockPrices.get(stockName) || 0;
				let newPrice = previousPrice + amount;
				profit += quantity * (newPrice - previousPrice);
				stockPrices.set(stockName, newPrice);
			}
		} else if(action === "QUERY") {
			result.push(profit);
		} 
	}
	return result;
}

// practice 12
function getGrossProfit(events) {
	let result = [];
	let profit = 0;
	let stockHolding = new Map();
	let stockPrices = new Map();

	for(let i = 0; i < events.length; i++) {
		let [action, stockName, amount] = events[i].split(" ");
		amount = Number(amount);

		if(action === "BUY") {
			if(stockHolding.has(stockName)) {
				stockHolding.set(stockName, stockHolding.get(stockName) + amount);
			} else {
				stockHolding.set(stockName, amount);
			}
		} else if(action === "SELL") {
			stockHolding.set(stockName, stockHolding.get(stockName) - amount);
		} else if(action === "CHANGE") {
			if(stockHolding.has(stockName)) {
				let quantity = stockHolding.get(stockName);
				let previousPrice = stockPrices.get(stockName) || 0;
				let newPrice = previousPrice + amount;
				profit += quantity * (newPrice - previousPrice);
				stockPrices.set(stockName, newPrice);
			}
		} else if(action === "QUERY") {
			result.push(profit);
		}
	}
	return result;
}

console.log('get gross profit', getGrossProfit(ev));
