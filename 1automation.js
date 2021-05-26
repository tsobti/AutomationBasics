//****AUTOMATING SCREENSHOT OF THE PAGE */

//requiring puppeteer package and saving it in a variable called pup.
let pup=require("puppeteer");

let gPage;

//Using launch function of puppeteer to launch a browser(this function returns a promise),this function takes an
//object which takes some options. One of these is headless. By default the value of headless is true, you can override it
//and make the browser visible.

pup
    .launch({headless:false})
        .then(function(browser){
            return browser.newPage();
        })
            .then(function(page){
                gPage=page;
                return page.goto("https://www.google.co.in/");
            })
                .then(function(){
                    return gPage.screenshot({path:"ss1.png"});
                })
                .catch(function(err){
                    console.log(err);
                })