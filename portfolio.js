window.onload = function() {
  let categories = [];

  let projects = document.querySelectorAll('.grid-item');
  projects.forEach(function(project) {
    let project_categories = project.dataset.categories.split(', ');
    // project_categories.sort( );
    project_categories.reverse();

    project_categories.forEach(function(project_category) {
      let filter_btn = document.createElement('div');
      filter_btn.classList.add('pill');
      filter_btn.innerText = project_category;

      filter_btn.addEventListener('click', selectFilter);

      project.prepend(filter_btn);

      if (!categories.includes(project_category))
        categories.push(project_category);
    });
  });


  let menubar = document.querySelector('.menubar .menubar-item');
  let filter_btns = [];

  categories.sort();
  categories.reverse();

  categories.forEach(function(category) {
    let filter_btn = document.createElement('div');
    filter_btn.classList.add('pill_menu');
    filter_btn.innerText = category;

    filter_btn.addEventListener('click', toggleFilter);

    menubar.prepend(filter_btn);

    filter_btns.push(filter_btn);
  });

  function showFilteredProjectList(active_filter) {
    console.log('show: ' + active_filter);
    projects.forEach(function(project) {
      if (active_filter == -1) {
        project.style.display = 'block';
      } else {
        let project_categories = project.dataset.categories.split(', ');

        if (project_categories.includes(active_filter)) {
          project.style.display = 'block';
        } else {
          project.style.display = 'none';
        }
      }
    });
  }

  function selectFilter() {
    let filter_value = this.innerText;

    filter_btns.forEach(function(filter_btn) {
      if (filter_btn.innerText == filter_value) {
        filter_btn.classList.add('selected');
      } else {
        filter_btn.classList.remove('selected');
      }
    });

    showFilteredProjectList(filter_value);
  }

  function toggleFilter() {
    let filter_value = this.innerText;

    filter_btns.forEach(function(filter_btn) {
      if (filter_btn.innerText == filter_value) {
        filter_btn.classList.toggle('selected');

        if (filter_btn.classList.contains('selected')) {
          showFilteredProjectList(filter_value);
        } else {
          showFilteredProjectList(-1);
        }
      } else {
        filter_btn.classList.remove('selected');
      }
    });
  }

  let project_buttons = document.querySelectorAll('.grid-item > img, .grid-item > video');

}




if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  var lastScrollTop = 0;
  var header = document.getElementById("header");

  window.addEventListener("scroll", function() {
    var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop && currentScroll > header.clientHeight) {
      // Scroll down and ensure header is not fully visible
      header.style.top = "-" + header.clientHeight + "px";
    } else {
      // Scroll up or at the top of the page
      header.style.top = "0";
    }
    lastScrollTop = currentScroll;
  });
}





    function openNavTag() {
      document.getElementById("mySidenavTag").style.width = "98%";
      document.getElementById("mySidenavTag").style.left = "1%";
    }

    function closeNavTag() {
      document.getElementById("mySidenavTag").style.width = "0";
      document.getElementById("mySidenavTag").style.left = "-50vw";
    }



    function openNavAbout() {
      document.getElementById("mySidenavAbout").style.width = "98%";
      document.getElementById("mySidenavAbout").style.left = "1%";
    }

    function closeNavAbout() {
      document.getElementById("mySidenavAbout").style.width = "0";
      document.getElementById("mySidenavAbout").style.left = "-50vw";
    }








    function openNav1() {
      document.getElementById("mySidenav1").style.width = "98%";
      document.getElementById("mySidenav1").style.right = "1%";
    }

    function closeNav1() {
      document.getElementById("mySidenav1").style.width = "0";
      document.getElementById("mySidenav1").style.right = "-50vw";
    }



    function openNav2() {
      document.getElementById("mySidenav2").style.width = "98%";
      document.getElementById("mySidenav2").style.right = "1%";
    }

    function closeNav2() {
      document.getElementById("mySidenav2").style.width = "0";
      document.getElementById("mySidenav2").style.right = "-50vw";
    }



    function openNav3() {
      document.getElementById("mySidenav3").style.width = "98%";
      document.getElementById("mySidenav3").style.right = "1%";
    }

    function closeNav3() {
      document.getElementById("mySidenav3").style.width = "0";
      document.getElementById("mySidenav3").style.right = "-50vw";
    }



    function openNav4() {
      document.getElementById("mySidenav4").style.width = "98%";
      document.getElementById("mySidenav4").style.right = "1%";
    }

    function closeNav4() {
      document.getElementById("mySidenav4").style.width = "0";
      document.getElementById("mySidenav4").style.right = "-50vw";
    }



    function openNav5() {
      document.getElementById("mySidenav5").style.width = "98%";
      document.getElementById("mySidenav5").style.right = "1%";
    }

    function closeNav5() {
      document.getElementById("mySidenav5").style.width = "0";
      document.getElementById("mySidenav5").style.right = "-50vw";
    }



    function openNav6() {
      document.getElementById("mySidenav6").style.width = "98%";
      document.getElementById("mySidenav6").style.right = "1%";
    }

    function closeNav6() {
      document.getElementById("mySidenav6").style.width = "0";
      document.getElementById("mySidenav6").style.right = "-50vw";
    }



    function openNav7() {
      document.getElementById("mySidenav7").style.width = "98%";
      document.getElementById("mySidenav7").style.right = "1%";
    }

    function closeNav7() {
      document.getElementById("mySidenav7").style.width = "0";
      document.getElementById("mySidenav7").style.right = "-50vw";
    }



    function openNav8() {
      document.getElementById("mySidenav8").style.width = "98%";
      document.getElementById("mySidenav8").style.right = "1%";
    }

    function closeNav8() {
      document.getElementById("mySidenav8").style.width = "0";
      document.getElementById("mySidenav8").style.right = "-50vw";
    }



    function openNav9() {
      document.getElementById("mySidenav9").style.width = "98%";
      document.getElementById("mySidenav9").style.right = "1%";
    }

    function closeNav9() {
      document.getElementById("mySidenav9").style.width = "0";
      document.getElementById("mySidenav9").style.right = "-50vw";
    }



    function openNav10() {
      document.getElementById("mySidenav10").style.width = "98%";
      document.getElementById("mySidenav10").style.right = "1%";
    }

    function closeNav10() {
      document.getElementById("mySidenav10").style.width = "0";
      document.getElementById("mySidenav10").style.right = "-50vw";
    }



    function openNav11() {
      document.getElementById("mySidenav11").style.width = "98%";
      document.getElementById("mySidenav11").style.right = "1%";
    }

    function closeNav11() {
      document.getElementById("mySidenav11").style.width = "0";
      document.getElementById("mySidenav11").style.right = "-50vw";
    }



    function openNav12() {
      document.getElementById("mySidenav12").style.width = "98%";
      document.getElementById("mySidenav12").style.right = "1%";
    }

    function closeNav12() {
      document.getElementById("mySidenav12").style.width = "0";
      document.getElementById("mySidenav12").style.right = "-50vw";
    }



    function openNav13() {
      document.getElementById("mySidenav13").style.width = "98%";
      document.getElementById("mySidenav13").style.right = "1%";
    }

    function closeNav13() {
      document.getElementById("mySidenav13").style.width = "0";
      document.getElementById("mySidenav13").style.right = "-50vw";
    }



    function openNav14() {
      document.getElementById("mySidenav14").style.width = "98%";
      document.getElementById("mySidenav14").style.right = "1%";
    }

    function closeNav14() {
      document.getElementById("mySidenav14").style.width = "0";
      document.getElementById("mySidenav14").style.right = "-50vw";
    }



    function openNav15() {
      document.getElementById("mySidenav15").style.width = "98%";
      document.getElementById("mySidenav15").style.right = "1%";
    }

    function closeNav15() {
      document.getElementById("mySidenav15").style.width = "0";
      document.getElementById("mySidenav15").style.right = "-50vw";
    }



    function openNav16() {
      document.getElementById("mySidenav16").style.width = "98%";
      document.getElementById("mySidenav16").style.right = "1%";
    }

    function closeNav16() {
      document.getElementById("mySidenav16").style.width = "0";
      document.getElementById("mySidenav16").style.right = "-50vw";
    }



    function openNav17() {
      document.getElementById("mySidenav17").style.width = "98%";
      document.getElementById("mySidenav17").style.right = "1%";
    }

    function closeNav17() {
      document.getElementById("mySidenav17").style.width = "0";
      document.getElementById("mySidenav17").style.right = "-50vw";
    }



    function openNav18() {
      document.getElementById("mySidenav18").style.width = "98%";
      document.getElementById("mySidenav18").style.right = "1%";
    }

    function closeNav18() {
      document.getElementById("mySidenav18").style.width = "0";
      document.getElementById("mySidenav18").style.right = "-50vw";
    }



    function openNav19() {
      document.getElementById("mySidenav19").style.width = "98%";
      document.getElementById("mySidenav19").style.right = "1%";
    }

    function closeNav19() {
      document.getElementById("mySidenav19").style.width = "0";
      document.getElementById("mySidenav19").style.right = "-50vw";
    }



    function openNav20() {
      document.getElementById("mySidenav20").style.width = "98%";
      document.getElementById("mySidenav20").style.right = "1%";
    }

    function closeNav20() {
      document.getElementById("mySidenav20").style.width = "0";
      document.getElementById("mySidenav20").style.right = "-50vw";
    }



    function openNav21() {
      document.getElementById("mySidenav21").style.width = "98%";
      document.getElementById("mySidenav21").style.right = "1%";
    }

    function closeNav21() {
      document.getElementById("mySidenav21").style.width = "0";
      document.getElementById("mySidenav21").style.right = "-50vw";
    }



    function openNav22() {
      document.getElementById("mySidenav22").style.width = "98%";
      document.getElementById("mySidenav22").style.right = "1%";
    }

    function closeNav22() {
      document.getElementById("mySidenav22").style.width = "0";
      document.getElementById("mySidenav22").style.right = "-50vw";
    }



    function openNav23() {
      document.getElementById("mySidenav23").style.width = "98%";
      document.getElementById("mySidenav23").style.right = "1%";
    }

    function closeNav23() {
      document.getElementById("mySidenav23").style.width = "0";
      document.getElementById("mySidenav23").style.right = "-50vw";
    }



    function openNav24() {
      document.getElementById("mySidenav24").style.width = "98%";
      document.getElementById("mySidenav24").style.right = "1%";
    }

    function closeNav24() {
      document.getElementById("mySidenav24").style.width = "0";
      document.getElementById("mySidenav24").style.right = "-50vw";
    }



    function openNav25() {
      document.getElementById("mySidenav25").style.width = "98%";
      document.getElementById("mySidenav25").style.right = "1%";
    }

    function closeNav25() {
      document.getElementById("mySidenav25").style.width = "0";
      document.getElementById("mySidenav25").style.right = "-50vw";
    }



    function openNav26() {
      document.getElementById("mySidenav26").style.width = "98%";
      document.getElementById("mySidenav26").style.right = "1%";
    }

    function closeNav26() {
      document.getElementById("mySidenav26").style.width = "0";
      document.getElementById("mySidenav26").style.right = "-50vw";
    }



    function openNav27() {
      document.getElementById("mySidenav27").style.width = "98%";
      document.getElementById("mySidenav27").style.right = "1%";
    }

    function closeNav27() {
      document.getElementById("mySidenav27").style.width = "0";
      document.getElementById("mySidenav27").style.right = "-50vw";
    }



    function openNav28() {
      document.getElementById("mySidenav28").style.width = "98%";
      document.getElementById("mySidenav28").style.right = "1%";
    }

    function closeNav28() {
      document.getElementById("mySidenav28").style.width = "0";
      document.getElementById("mySidenav28").style.right = "-50vw";
    }

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  var gridItems = document.querySelectorAll('.grid-item');
  
  window.addEventListener('scroll', function() {
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    gridItems.forEach(function(gridItem) {
      var rect = gridItem.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= windowHeight) {
        gridItem.classList.add('hovered');
        var summary = gridItem.querySelector('.summary');
        if (summary) {
          summary.querySelector('.title').classList.add('hovered');
          summary.querySelector('.info').classList.add('hovered');
        }
      } else {
        gridItem.classList.remove('hovered');
        var summary = gridItem.querySelector('.summary');
        if (summary) {
          summary.querySelector('.title').classList.remove('hovered');
          summary.querySelector('.info').classList.remove('hovered');
        }
      }
    });
  });
}
