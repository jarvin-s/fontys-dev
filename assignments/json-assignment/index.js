async function fetchData() {
  try {
    let response = await fetch("https://api.github.com/users/jarvin-s/repos");
    const data = await response.json();

    const jsonDataElement = document.getElementById("json-data");
    const formattedData = data
      .map(
        (item) =>
          `<div class="card flex flex-col p-6 bg-zinc-800 text-white rounded-lg">
            <span class="text-2xl font-bold">Repository name:</span> 
            <a href="${item.html_url}" 
               target="_blank" 
               class="text-blue-600 text-xl hover:text-blue-800 hover:underline transition-colors">
              ${item.name}
            </a>
            <span class="text-lg mt-4">${item.description}</span>
            </div>`
      )
      .join("");

    jsonDataElement.innerHTML = `<div class="flex justify-center items-center mt-4 gap-4"><img class="w-16 h-16 rounded-full" src="${data[0].owner.avatar_url}"/><h1 class="text-2xl font-bold">Jarvin Siegers</h1></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 md:p-0 p-4 max-w-6xl mx-auto">${formattedData}</div>`;
  } catch (error) {
    console.log(error);
  }
}

fetchData();
