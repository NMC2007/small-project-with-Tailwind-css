import { partnerLogos, productList, partnerLogoBasePath } from "./data.js"

// NAV
$(function () {
    $(".navbar").hidescroll();

    // mobile menu

    const toggleBtn = $("#toggle_btn");
    const dropDownMenu = $(".dropdown-menu");

    toggleBtn.click(() => {
        dropDownMenu.toggleClass("open");
    })
})



// Partner Logos
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


// Product
$(function () {

    $("li:first").addClass("activeTab");

    $("li").on("click", function () {
        $("li").removeClass("activeTab");
        $("div[id='products-tabs'] ul .r-tabs-state-active").addClass("activeTab");
    })


    $('#products-tabs').responsiveTabs({
        animation: "slide"
    });
})