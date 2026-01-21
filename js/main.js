import { partnerLogos, productList, partnerLogoBasePath } from "./data.js"

$(function () {
    const container = document.getElementById('partner-logo-list');

    partnerLogos.forEach((logo) => {
        const img = document.createElement('img');
        img.src = partnerLogoBasePath + logo.fileName;
        img.alt = logo.alt;
        img.classList.add('logos-ticker-image');
        container.appendChild(img);
    })
})