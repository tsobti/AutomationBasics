//****AUTOMATING SCREENSHOT OF THE PAGE.TYPE INSIDE THE PAGE */

let pup=require("puppeteer");

let gPage;

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
                    return gPage.type("input.gLFyf.gsfi","cats")
                })
                    .then(function(){
                        return gPage.screenshot({path:"2typedcats.png"});
                    })
                    .catch(function(err){
                        console.log(err);
                    })