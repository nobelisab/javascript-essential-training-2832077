/**
 * Create a Backpack object, populate some HTML to display its properties.
 */

// Single line comment

/* Multi-line comment
See! this line is also commented out! */

const updateInvestment = (update) => {
  let main = document.querySelector("main"); // main is an element
  main.innerHTML = markup(investment);
  console.info(update);
};

const investment = {
  name: "Apple",
  ticker:  "AAPL",
  price: "",
  portfolio:  "ETF";
};

const ETF = {
   stock1: "",
   stock2: "",
   bond1: "",
   bond2: "";
};

const client = {
   name: "",
   address: "",
   email: "",
   phone: "";
};

const risklevel = {
   riskscale number = "";
};

const advisor = {
   name: "Elisabeth Noble";
};

const markup = (investment) => {
  return `
  <div>
	<h3>${investment.name}</h3>
	<ul>
	  <li>Ticker: ${investment.ticker}</li>
	  <li>Price: ${investment.price}</li>
	  <li>Portfolio: ${investment.portfolio}</li>
	</ul>
  </div>
`;
};

const main = document.createElement("main");
main.innerHTML = markup(investment);
document.body.appendChild(main);
