function toggleDarkMode() {
    const body = document.body;
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    const spotlight = document.querySelector('.spotlight');

    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = 'Light Mode';
        localStorage.setItem('mode', 'dark');

    } else {
        darkModeToggle.textContent = 'Dark Mode';
        localStorage.setItem('mode', 'light');

        spotlight.style.backgroundColor = 'rgba(100, 100, 100, 0.8)';
    }
}


function setDarkModeFromStorage() {
    const mode = localStorage.getItem('mode');
    if (mode === 'dark') {
        document.body.classList.add('dark-mode');
        document.querySelector('.dark-mode-toggle').textContent = 'Light Mode';
    } else {
        document.body.classList.remove('dark-mode');
        document.querySelector('.dark-mode-toggle').textContent = 'Dark Mode';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    setDarkModeFromStorage();
});

function navigate(direction) {
    let currentPage = window.location.href;
    let nextPage;

    if (direction === 'right') {
        if (currentPage.includes('index.html')) {
            nextPage = 'about.html';
        } else if (currentPage.includes('about.html')) {
            nextPage = 'education.html';
        } else if (currentPage.includes('education.html')) {
            nextPage = 'achievements.html';
        } else if (currentPage.includes('achievements.html')) {
            nextPage = 'skills.html';
        } else if (currentPage.includes('skills.html')) {
            nextPage = 'blog.html';
        } else if (currentPage.includes('blog.html')) {
            nextPage = 'index.html';
        }
    } else if (direction === 'left') {
        if (currentPage.includes('index.html')) {
            nextPage = 'blog.html';
        } else if (currentPage.includes('about.html')) {
            nextPage = 'index.html';
        } else if (currentPage.includes('education.html')) {
            nextPage = 'about.html';
        } else if (currentPage.includes('achievements.html')) {
            nextPage = 'education.html';
        } else if (currentPage.includes('skills.html')) {
            nextPage = 'achievements.html';
        } else if (currentPage.includes('blog.html')) {
            nextPage = 'skills.html';
        }
    }

    if (nextPage) {
        window.location.href = nextPage;
    }
}





function consoleText(words, id, colors) {
    if (colors === undefined) colors = ['#fff'];
    var visible = true;
    var con = document.getElementById('console');
    var letterCount = 1;
    var x = 1;
    var waiting = false;
    var target = document.getElementById(id)
    target.setAttribute('style', 'color:' + colors[0])
    window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}

