async function fetchData() {
  try {
    let response = await fetch("https://api.github.com/users/jarvin-s/repos");
    const data = await response.json();

    const jsonDataElement = document.getElementById("json-data");

    const formattedData = data
      .map(
        (item) =>
          `<div class="p-4 mb-2 bg-gray-300/40 rounded-lg">
            <span class="font-bold">Naam:</span> 
            <a href="${item.html_url}" 
               target="_blank" 
               class="text-blue-600 hover:text-blue-800 hover:underline transition-colors">
              ${item.name}
            </a>
          </div>`
      )
      .join("");

    jsonDataElement.innerHTML = `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 max-w-5xl mx-auto">${formattedData}</div>`;
  } catch (error) {
    console.log(error);
  }
}

fetchData();
