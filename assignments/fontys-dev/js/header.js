function getCurrentPath() {
  const path = window.location.pathname;
  return path;
}

function getBasePath() {
  const path = getCurrentPath();
  if (path.includes("/pages/")) {
    return "../";
  }
  return "";
}

function createHeader() {
  const headerContainer = document.querySelector("header");
  if (!headerContainer) return;

  const basePath = getBasePath();
  const isCoolbluePage = getCurrentPath().includes("/challenge.html");

  const nav = document.createElement("nav");

  if (isCoolbluePage) {
    nav.className = "flex justify-between items-center text-white";
    headerContainer.className = "bg-[#0090E3]";
    const containerDiv = document.createElement("div");
    containerDiv.className = "max-w-7xl mx-auto";
    headerContainer.appendChild(containerDiv);
    containerDiv.appendChild(nav);
  } else {
    nav.className = "flex justify-between items-center max-w-5xl mx-auto";
    headerContainer.appendChild(nav);
  }

  const logoLink = document.createElement("a");
  logoLink.href = "#";

  const logoImg = document.createElement("img");
  if (isCoolbluePage) {
    logoImg.src = `${basePath}images/coolblue.png`;
    logoImg.alt = "logo";
  } else {
    logoImg.src = `${basePath}images/logo.png`;
    logoImg.alt = "logo";
    logoImg.className = "w-36 h-36";
  }

  logoLink.appendChild(logoImg);
  nav.appendChild(logoLink);

  const navList = document.createElement("ul");

  if (isCoolbluePage) {
    navList.className = "flex space-x-4 font-bold";
  } else if (getCurrentPath().includes("/js.html")) {
    navList.className = "flex space-x-4 text-black";
  } else {
    navList.className = "flex space-x-4";
  }

  const navItems = [
    {
      text: "Home",
      href: `${basePath}index.html`,
      className: isCoolbluePage
        ? "hover:bg-[#199be5] px-2 py-2 ease-in-out"
        : "hover:bg-gray-200 rounded-md px-2 py-2 ease-in-out",
    },
    {
      text: "Coolblue",
      href: `${basePath}pages/challenge.html`,
      className: isCoolbluePage
        ? "hover:bg-[#199be5] px-2 py-2 ease-in-out"
        : "hover:bg-gray-200 rounded-md px-2 py-2 ease-in-out",
    },
    {
      text: "JavaScript",
      href: `${basePath}pages/js.html`,
      className: isCoolbluePage
        ? "hover:bg-[#199be5] px-2 py-2 ease-in-out"
        : "hover:bg-gray-200 hover:text-black rounded-md px-2 py-2 ease-in-out",
    },
  ];

  navItems.forEach((item) => {
    const linkElement = document.createElement("a");
    linkElement.href = item.href;

    const listItem = document.createElement("li");
    listItem.className = item.className;
    listItem.textContent = item.text;

    linkElement.appendChild(listItem);
    navList.appendChild(linkElement);
  });

  nav.appendChild(navList);
}

document.addEventListener("DOMContentLoaded", createHeader);
