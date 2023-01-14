const date = new Date();
const current = date.toDateString();

const setDate = document.getElementById("date");
const txt = document.createTextNode(current);
setDate.appendChild(txt);

// MAIN AREA

const mockData = [
  {
    title: "Far right Israeli minister visits flashpoint site ",
    category: "Midde East",
    img: "/news/images/pic1.png",
    alt: "Far right Israeli minister visits flashpoint site",
  },
  {
    title: "Far right Israeli minister visits flashpoint site ",
    category: "Midde East",
    img: "/news/images/pic2.png",
    alt: "Far right Israeli minister visits flashpoint site",
  },
  {
    title: "Far right Israeli minister visits flashpoint site ",
    category: "Midde East",
    img: "/news/images/pic3.png",
    alt: "Far right Israeli minister visits flashpoint site",
  },
  {
    title: "Far right Israeli minister visits flashpoint site ",
    category: "Midde East",
    img: "/news/images/pic4.png",
    alt: "Far right Israeli minister visits flashpoint site",
  },
  {
    title: "Far right Israeli minister visits flashpoint site ",
    category: "Midde East",
    img: "/news/images/pic5.png",
    alt: "Far right Israeli minister visits flashpoint site",
  },
];

const mockData2 = [
  {
    title: "Far right Israeli minister visits flashpoint site ",
    category: "Midde East",
    img: "/news/images/pic1.png",
    alt: "Far right Israeli minister visits flashpoint site",
    desc: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti neque itaque fugit distinctio expedita doloremque reprehenderit repudiandae, voluptatum, ",
    country: "Almanya",
  },
  {
    title: "Far right Israeli minister visits flashpoint site ",
    category: "Midde East",
    img: "/news/images/pic2.png",
    alt: "Far right Israeli minister visits flashpoint site",
    desc: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti neque itaque fugit distinctio expedita doloremque reprehenderit repudiandae, voluptatum, ",
    country: "Almanya",
  },
  {
    title: "Far right Israeli minister visits flashpoint site ",
    category: "Midde East",
    img: "/news/images/pic3.png",
    alt: "Far right Israeli minister visits flashpoint site",
    desc: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti neque itaque fugit distinctio expedita doloremque reprehenderit repudiandae, voluptatum, ",
    country: "Almanya",
  },
];

const mainWrapper = document.getElementById("main-wrapper");

mockData.forEach((item, index) => {
  const newDiv = document.createElement("div");
  const img = document.createElement("img");
  const title = document.createElement("h3");
  const span = document.createElement("span");

  title.innerHTML = item.title;
  span.innerHTML = item.category;
  img.src = item.img;

  newDiv.appendChild(title);
  newDiv.appendChild(span);
  newDiv.appendChild(img);
  newDiv.className = `div${index + 1}`;
  mainWrapper.appendChild(newDiv);
});

const news = document.getElementById("news");

mockData2.forEach((item, index) => {
  const newDiv = document.createElement("div");
  const img = document.createElement("img");
  const title = document.createElement("h3");
  const desc = document.createElement("p");
  const country = document.createElement("span");

  newDiv.className = `new${index + 1}`;
  img.src = item.img;
  title.innerHTML = item.title;
  desc.innerHTML = item.desc;
  country.innerHTML = item.country;

  newDiv.appendChild(img);
  newDiv.appendChild(title);
  newDiv.appendChild(desc);
  newDiv.appendChild(country);
  news.appendChild(newDiv);
});

function clicks() {
  const mobileNavbar = document.getElementById("mobile-navbar");

  if (mobileNavbar.style.left === "-200px") {
    mobileNavbar.style.left = "0px";
  } else {
    mobileNavbar.style.left = "-200px";
  }
}
