class MobileNavBar {

    constructor(mobileMenu, navBar, navItem) {
        this.mobileMenu = document.querySelector(mobileMenu)
        this.navBar = document.querySelector(navBar)
        this.navItem = document.querySelectorAll(navItem)
        this.activeClass = "active"

        this.HandleClick = this.HandleClick.bind(this)
    }

    HandleClick() {
        this.navBar.classList.toggle(this.activeClass)
        this.mobileMenu.classList.toggle(this.activeClass)
        this.animateLink()
    }

    animateLink() {
        this.navItem.forEach((link, index) => {

            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navBarFade 0.5s ease forwards ${index / 7 + 0.3}s`
            }
        })
    }

    addClickEvent() {
        this.mobileMenu.addEventListener('click', this.HandleClick)
    }

    Init() {
        if (this.mobileMenu) {
            this.addClickEvent()
        }
        return this
    }

}

const mobileNavBar = new MobileNavBar(
    ".mobile-menu",
    ".nav-bar",
    ".nav-bar li"
)

mobileNavBar.Init()