const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const totalDiv = document.createElement("div");
document.body.appendChild(totalDiv);

const getSum = () => {
  let abc = document.querySelectorAll('.prices');
  let sum = 0;

  for (let i = 0; i < abc.length; i++) {
    sum += Number(abc[i].textContent);
  }

  totalDiv.textContent = "Total: " + sum;
};

getSumBtn.addEventListener("click", getSum);

