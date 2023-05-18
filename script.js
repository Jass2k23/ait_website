function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    closeTab();

    document.getElementById(tabName).style.display = "flex";
    evt.currentTarget.classList.add("active");

}

function closeTab() {
    
    var tabcontent = document.getElementsByClassName("tabcontent");
    var tablinks = document.getElementsByClassName("tablinks");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
}

window.addEventListener("scroll", function () {
    
    var tabs = document.querySelector(".vertical-tabs");
    var sections = document.querySelectorAll(".section");

    sections.forEach(function (section) {
        var tabs = document.querySelector(".vertical-tabs");
        var tabsHeight = tabs.offsetHeight;

        var sectionTop = section.offsetTop - (window.innerHeight * 0.20);
        var sectionHeight = section.offsetHeight - tabsHeight;
        var sectionBottom = sectionTop + sectionHeight;

        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionBottom) {
            var tabId = section.getAttribute("data-tab");
            var tab = tabs.querySelector('[data-tab="' + tabId + '"]');
            openTab(event, tabId);
        } else if (window.pageYOffset >= sectionBottom || window.pageYOffset < sectionTop) {
            var tabId = section.getAttribute("data-tab");
            var tab = tabs.querySelector('[data-tab="' + tabId + '"]');
            closeTab();
        }
    });
});