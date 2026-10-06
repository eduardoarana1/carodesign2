    document.querySelectorAll('.nav a').forEach(function (link) {
      link.addEventListener('click', function () {
        document.getElementById('menu-toggle').checked = false;
      });
    });



