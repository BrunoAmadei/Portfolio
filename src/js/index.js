class MobileNav {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu)
        this.navList = document.querySelector(navList)
        this.navLinks = document.querySelectorAll(navLinks)
        this.activeClass = "active"
        this.handleClick = this.handleClick.bind(this)
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`)
        })
    }
    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks()
    }

    ClickEvent() {
        this.mobileMenu.addEventListener('click', this.handleClick)
    }

    init() {
        if (this.mobileMenu) {
            this.ClickEvent()
        }
        return this
    }
}

const mobileNavbar = new MobileNav(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li"
)

mobileNavbar.init()

/*---------CARDS SLIDE------------*/
const prev = document.querySelector('.btn-prev')
const next = document.querySelector('.btn-next')
const cards = document.querySelectorAll('.card')


const maxCards = cards.length
let currentCard = 0

function indexCards() {
    if (currentCard >= maxCards) {
        currentCard = 0
    }

    if (currentCard < 0) {
        currentCard = maxCards - 1
    }
}

prev.addEventListener('click', () => {
    if (prev) {
        currentCard -= 1;
    }
    indexCards()

    cards.forEach(card => {
        card.classList.remove('active')
    })
    cards[currentCard].classList.add('active')
})

next.addEventListener('click', () => {
    if (next) {
        currentCard += 1
    }
    indexCards()

    cards.forEach(card => {
        card.classList.remove('active')
    })
    cards[currentCard].classList.add('active')
})


