const brands = ["almay", "alva", "anna sui", "annabelle", "benefit", "boosh", "burt's bees", "butter london", "c'est moi", "cargo cosmetics", "china glaze", "clinique", "coastal classic creation", "colourpop", "covergirl", "dalish", "deciem", "dior", "dr. hauschka", "e.l.f.", "essie", "fenty", "glossier", "green people", "iman", "l'oreal", "lotus cosmetics usa", "maia's mineral galaxy", "marcelle", "marienatie", "maybelline", "milani", "mineral fusion", "misa", "mistura", "moov", "nudus", "nyx", "orly", "pacifica", "penny lane organics", "physicians formula", "piggy paint", "pure anada", "rejuva minerals", "revlon", "sally b's skin yummies", "salon perfect", "sante", "sinful colours", "smashbox", "stila", "suncoat", "w3llpeople", "wet n wild", "zorah", "zorah biocosmetiques"]

const typeProducts = 
{
    blush: ['powder', 'cream'],
    bronzer: 'powder',
    eyebrow: 'pencil',
    eyeliner: ['liquid', 'pencil', 'gel', 'cream'],
    eyeshadow: ['palette', 'pencil', 'cream'],
    foundation: ['concealer', 'liquid', 'contour', 'bbcc', 'cream', 'mineral', 'powder', 'highlighter'],
    lipliner: 'pencil',
    lipstick: ['lipstick', 'lipgloss', 'liquid', 'lipstain'],
    mascara: '',
    nailpolish: ''
}

function getUrl() { return fetch('http://makeup-api.herokuapp.com/api/v1/products.json?type=lipstick') }


//NOTE Crear lógica para que me imprima por consola solo los datos que requiero
function getData() {
    getUrl()
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data)
        })
}
