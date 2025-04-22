window.addEventListener('scroll', function () {
    var navigace = document.getElementById('nav');
    if (window.scrollY === 0) {
        navigace.classList.remove('visible');
    } else {
        navigace.classList.add('visible');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

function openModal() {
    document.getElementById("myModal").classList.add("active");
    document.getElementById("overlay").classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeModal() {
    document.getElementById("myModal").classList.remove("active");
    document.getElementById("overlay").classList.remove("active");
    document.body.style.overflow = "auto";
}

function playerPopupOpen() {
    if (document.querySelector('.playersOnlinePopup').innerHTML != "") {
        document.getElementById("playersOnlinePopup").classList.add("active");
    }
}

function playerPopupClose() {
    document.getElementById("playersOnlinePopup").classList.remove("active");
}

function showContent(sectionId) {
    // Skrýt všechny sekce
    var contentsA = document.querySelectorAll('.rulePage');
    contentsA.forEach(function (content) {
        content.classList.remove('active');
    });
    var contents = document.querySelectorAll('.ruleA');
    contents.forEach(function (content) {
        content.classList.remove('active');
    });

    // Zobrazit vybranou sekci
    var sections = document.querySelectorAll(sectionId);
    sections.forEach(function (section) {
        section.classList.add('active');
    });
}

document.addEventListener('DOMContentLoaded', function () {
    showContent('#generalRules');
});
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('discordBtn').addEventListener('click', function () {
        var link = document.createElement('a');
        link.href = 'https://discord.gg/FvHPnSXkS3';
        link.target = '_blank'
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });

    document.getElementById('downloadForge').addEventListener('click', function () {
        var link = document.createElement('a');
        link.href = 'download/ThizarForgeModpack.zip';
        link.download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });

    document.getElementById('downloadTL').addEventListener('click', function () {
        var link = document.createElement('a');
        link.href = 'download/ThizarMods.zip';
        link.download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});
