import ready from 'Utils/documentReady.js';
// import getScrollSize from 'Utils/getScrollSize.js';

ready(function(){

    const appHeight = () => {
        const doc = document.documentElement;
        doc.style.setProperty('--app-height', `${window.innerHeight}px`)
    };
    window.addEventListener('resize', appHeight);
    appHeight();

    document.querySelector('.dashboard-header__menu-toggle').addEventListener('click', function(e){
        e.preventDefault();
        this.classList.toggle('dashboard-header__menu-toggle--active');
        if (this.classList.contains('dashboard-header__menu-toggle--active')){
            document.body.style.marginRight = '0px';
            document.querySelector('.page__body').classList.add('no-scroll');
            document.querySelector('.dashboard-header__menu').classList.add('dashboard-header__menu--active');
        }
        else {
            document.body.style.marginRight = 0;
            document.querySelector('.page__body').classList.remove('no-scroll');
            document.querySelector('.dashboard-header__menu').classList.remove('dashboard-header__menu--active');
        }
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 1024) {
            document.body.style.marginRight = 0;
            document.querySelector('.page__body').classList.remove('no-scroll');
            document.querySelector('.dashboard-header__menu').classList.remove('dashboard-header__menu--active');
            document.querySelector('.dashboard-header__menu-toggle').classList.remove('dashboard-header__menu-toggle--active');
        }
    });

    //Dropdown Menu
    let dropdownMenu = document.querySelector(".dropdown-menu");
    let dropdownNotify = document.querySelector(".dashboard-header__notify");

    const toggledropdownMenu = () => {
        dropdownMenu.classList.toggle('dropdown-menu--active');
    }

    const toggleNotifyMenu = () => {
        dropdownNotify.classList.toggle('dashboard-header__notify--active');
    }

    dropdownMenu.addEventListener("click", function(){
        this.classList.toggle('dropdown-menu--active');
        if (document.querySelector(".dashboard-header__notify--active")) {
            toggleNotifyMenu();
        }
    });

    dropdownNotify.addEventListener("click", function(){
        this.classList.toggle('dashboard-header__notify--active');
        if (document.querySelector(".dropdown-menu--active")) {
            toggledropdownMenu();
        }
    });

    document.addEventListener('click', e => {
        let target = e.target;
        let its_menu = target == dropdownMenu || dropdownMenu.contains(target);
        let its_notify = target == dropdownNotify || dropdownNotify.contains(target);
        let menu_is_active = dropdownMenu.classList.contains('dropdown-menu--active');
        let notify_is_active = dropdownNotify.classList.contains('dashboard-header__notify--active');

        if (!its_menu && !its_notify && menu_is_active) {
            toggledropdownMenu();
        }

        if (!its_menu && !its_notify && notify_is_active) {
            toggleNotifyMenu();
        }
      })

    //Dark mode
    const btnDarkMode = document.querySelector('.theme__button-input')
    const theme = document.querySelector('.theme')
    const currentTheme = localStorage.getItem('theme')

    function setTheme(name){
        theme.setAttribute('data-theme', name)
        localStorage.setItem('theme', name)
    }

    if (currentTheme) {
        theme.setAttribute('data-theme', currentTheme)
    } else {
        setTheme('light')
    }

    btnDarkMode.addEventListener('click', () => {
        if (theme.getAttribute('data-theme') === 'light') {
            setTheme('dark');
            document.querySelectorAll('.theme__button-input').forEach(element => {
                element.checked = true;
            });
        } else {
            setTheme('light');
            document.querySelectorAll('.theme__button-input').forEach(element => {
                element.checked = false;
            });
        }
    })

    if (theme.getAttribute('data-theme') === 'dark') {
        document.querySelectorAll('.theme__button-input').forEach(element => {
            element.checked = true;
        });
    }

    //Dashboard Header Menu Link Active
    // let  dashboardMenuLink = document.querySelectorAll(".dashboard-header__menu-link");

    // dashboardMenuLink.forEach(element => {
    //     element.addEventListener("click", function(){
    //         document.querySelector('.dashboard-header__menu-link--active').classList.remove('dashboard-header__menu-link--active');
    //         this.classList.add('dashboard-header__menu-link--active')
    //     });
    // });
});
