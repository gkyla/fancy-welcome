# fancy-welcome

Simply greeting people with various language

## Instalation
First you need animate.css package to make fancy-welcome work, simply just add it directly to your webpage using a CDN


```html
<head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
</head>
```


## How To use:


``` js
import fancy from 'fancy-welcome';
import 'fancy-welcome/style.css'

// Render a welcome page
document.addEventListener("DOMContentLoaded", () => {
  fancy.render({
    //  - Language
    language: "Japanese",
    includeNativeWord: false, // example -> for Japanese word the word of (こんにちは) will not be rendered

    //  - Animation
    animationName: "fadeIn", // see (https://animate.style/) for more
    animateDuration: "1.2s",
  });
});

```

If you want to render a multiple language you can pass an array with specified language props

``` js
import fancy from 'fancy-welcome';
import 'fancy-welcome/style.css'

// Render a welcome page
document.addEventListener("DOMContentLoaded", () => {
  fancy.render({
    //  - Language
    language: ["Japanese", "Indonesian", "Vietnamese" , "Russian"],

    //  - Animation
    animationName: "fadeIn", // see (https://animate.style/) for more
    animateDuration: "1.2s",
  });
});

```

if you want the list to be rendered on same order of your language list (default values are random), 
then simply just add exactOrderLanguage props set to true

``` js
exactOrderLanguage : true
```



if you want to eliminate the native word, like the word of (こんにちは) for Japanese or (नमस्कार) for Namaskāra.

add includeNativeWord: false to the fancy.render obj

```js
 includeNativeWord: false, // example -> for  the word of (こんにちは) will not be rendered, instead only render Konichiwa
```

If you want to render all of the language then just change the language props to "all", it will render 100+ language before fancy welcome element destroy

```js
language : "all" 
```

## Using fancy.greetings

if you only need the greetings data and want to modify the element by your self (not using fancy.render) you can get it by using fancy.greetings

```js
import fancy from 'fancy-welcome'

const data = fancy.greetings({
    language : "all", // "all" | ["Indonesia", "Japanese" , "..."] | "Indonesia"
    exactOrderLanguage: true, // true | false
    includeNativeWord: false // true | false
})

```

## List of the language

| language        | word                             |
|-----------------|----------------------------------|
| Afrikaans       | Hallo                            |
| Albanian        | Përshëndetje                     |
| Amharic         | Iwi selami newi (እው ሰላም ነው)      |
| Arabic          | Marhaba (مرحبًا)                 |
| Armenian        | Barev                            |
| Aymara          | Kamisaki                         |
| Azerbaijani     | Salam                            |
| Basque          | Kaixo                            |
| Belarusian      | Vitaju (Вітаю)                   |
| Bengali         | Hyālō (হ্যালো)                   |
| Bosnian         | Zdravo                           |
| Bulgarian       | Zdraveĭte (Здравейте)           |
| Burmese         | Haallo (ဟယ်လို)                  |
| Cantonese       | Nǐ hǎo (你好)                      |
| Catalan         | Hola                             |
| Cebuano         | Kamusta                          |
| Chichewa        | Moni                             |
| Corsican        | Bonghjornu                       |
| Croatian        | Zdravo                           |
| Czech           | Ahoj                             |
| Danish          | Hej                              |
| Dutch           | Hallo                            |
| English         | Hello                            |
| Estonian        | Tere                             |
| Ewe             | Hello                            |
| Farsi (Persian) | Salām (سلام)                     |
| Fijian          | Bula                             |
| Filipino        | Kumusta                          |
| Finnish         | Hei                              |
| French          | Bonjour                          |
| Gaelic (Irish)  | Dia dhuit                        |
| Galician        | Ola                              |
| Georgian        | Gamarjoba (გამარჯობა)            |
| German          | Guten tag                        |
| Greek           | Geia (γεια)                      |
| Guarani         | Mba'éichapa                      |
| Haitian Creole  | Bonjou                           |
| Hawaiian        | Aloha                            |
| Hebrew          | Shalom (שלום)                    |
| Hindi           | Namaste (नमस्ते)                 |
| Hmong           | Nyob zoo                         |
| Hungarian       | Szia                             |
| Icelandic       | Halló                            |
| Igbo            | Ndewo                            |
| Ilocano         | Hello                            |
| Indonesian      | Halo                             |
| Italian         | Ciao                             |
| Japanese        | Konichiwa (こんにちは)                |
| Kazakh          | Sälemetsiz be (Сәлеметсіз бе)    |
| Khmer           | Suostei (សួស្តី)                 |
| Kinyarwanda     | Mwaramutse                       |
| Korean          | Anyeong haseyo (안녕하세요)           |
| Kurdish         | Slav                             |
| Lao             | Sabaidi (ສະບາຍດີ)                |
| Latin           | Salve                            |
| Latvian         | Sveika (male) or Sveiks (female) |
| Lithuanian      | Sveiki                           |
| Luxembourgish   | Moien                            |
| Malagasy        | Salama                           |
| Maltese         | Bongu                            |
| Mandarin        | Nǐ hǎo (你好)                      |
| Maori           | Kia ora                          |
| Marathi         | Namaskāra (नमस्कार)              |
| Mongolian       | Sain uu (сайн уу)                |
| Nahuatl         | Niltze Tialli Pialli             |
| Navajo          | Ya’at’eeh                        |
| Nepali          | Namaskāra (नमस्कार)              |
| Norwegian       | Hei                              |
| Pashto          | Salam (سلام)                     |
| Polish          | Cześć                            |
| Portuguese      | Olá                              |
| Punjabi         | Sata srī akāla (ਸਤ ਸ੍ਰੀ ਅਕਾਲ)    |
| Oromo           | Akkam                            |
| Quechua         | Allianchu                        |
| Romanian        | Bunâ                             |
| Russian         | Privet (Привет)                  |
| Samoan          | Talofa                           |
| Sepedi          | Thobela                          |
| Serbian         | Zdravo (Здраво)                  |
| Sesotho         | Dumela                           |
| Slovak          | Ahoj                             |
| Slovenian       | Zdravo                           |
| Somali          | Hello                            |
| Spanish         | Hola                             |
| Swahili         | Jambo                            |
| Swedish         | Hallå                            |
| Tagalog         | Kamusta                          |
| Tahitian        | Ia Orana                         |
| Taiwanese       | Li-hó                            |
| Tamil           | Vanakkam (வணக்கம்)               |
| Thai            | S̄wạs̄dī (สวัสดี)                |
| Tibetan         | Tashi delek                      |
| Tongan          | Mālō e lelei                     |
| Tsonga          | Avuxeni                          |
| Turkish         | Merhaba                          |
| Ukrainian       | Privit (привіт)                  |
| Urdu            | Assalāmu Alaykum (السلام عليكم)  |
| Uzbek           | Salom                            |
| Vietnamese      | Xin chào                         |
| Welsh           | Helo                             |
| Xhosa           | Molo                             |
