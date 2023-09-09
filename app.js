let urunEkleBtn = document.querySelector(".urunEkleBtn");
let formKapsayici = document.querySelector("#formKapsayici");
let carpiBtn = document.querySelector(".carpiBtn");

let urunAdi = document.querySelector(".urunAdi");
let urunFiyati = document.querySelector(".urunFiyati");
let urunAciklama = document.querySelector(".urunAciklama");

let urunOlusturBtn = document.querySelector(".urunOlusturBtn");

let urunlerGelecekDiv = document.querySelector(".urunlerGelecekDiv");

let urunAdiGelecek = document.querySelector(".urunAdiGelecek");
let urunFiyatiGelecek = document.querySelector(".urunFiyatiGelecek");
let urunAciklamasiGelecek = document.querySelector(".urunAciklamasiGelecek");

urunEkleBtn.addEventListener("click", pencereAc);
carpiBtn.addEventListener("click", pencereKapat);

function pencereAc() {
  formKapsayici.classList.replace("hidden", "block");
}
function pencereKapat() {
  formKapsayici.classList.replace("block", "hidden");
}

let urunler = [
  {
    productName: "",
    price: 0,
    description: "",
  },
];
let urun = [];

urunAdi.addEventListener("keyup", (e) => {
  urunler.productName = urunAdi.value;
});
urunFiyati.addEventListener("keyup", (e) => {
  urunler.price = urunFiyati.value;
});
urunAciklama.addEventListener("keyup", (e) => {
  urunler.description = urunAciklama.value;
});
urun.push(urunler);

urunOlusturBtn.addEventListener("click", urunleriYerlestir);

let listItems = (productName, price, description) => {
  let kapsayiciDiv = document.createElement("div");
  let urunAdiG = document.createElement("h1");
  let urunFiyatiG = document.createElement("p");
  let urunAciklamaG = document.createElement("p");
  let aTag = document.createElement("a");

  urunAdiG.textContent = productName;
  urunFiyatiG.textContent = price + " ₺";
  urunAciklamaG.textContent = description;
  urunAciklamaG.className = "pAciklamaTag";
  aTag.setAttribute("href", "#");
  aTag.className = "aTag";
  aTag.textContent = "ÜRÜNÜ DÜZENLE";
  kapsayiciDiv.className = "kapsayiciDiv";

  kapsayiciDiv.appendChild(urunAdiG);
  kapsayiciDiv.appendChild(urunFiyatiG);
  kapsayiciDiv.appendChild(urunAciklamaG);
  kapsayiciDiv.appendChild(aTag);

  urunlerGelecekDiv.appendChild(kapsayiciDiv);
};

let count = 0;
let sayac = document.querySelector(".sayac");

function countClick() {
  count = count + 1;
  sayac.innerHTML = `[ ${count} ]`;
}

function urunleriYerlestir(e) {
  if (urunAdi.value == "") {
    // alert("LÜTFEN ÜRÜN ADI GİRİNİZ");
    return;
  } else if (urunFiyati.value == "") {
    // alert("LÜTFEN ÜRÜN FİYATI GİRİNİZ");
    return;
  } else if (urunAciklama.value == "") {
    // alert("LÜTFEN ÜRÜN AÇIKLAMASI GİRİNİZ");
    return;
  } else {
    urun.map((item) => {
      listItems(item.productName, item.price, item.description);
    });
  }
  countClick();
  urunAdi.value = "";
  urunFiyati.value = "";
  urunAciklama.value = "";

  e.preventDefault();
}
