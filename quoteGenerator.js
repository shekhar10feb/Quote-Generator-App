const arr = ["Merciless criticism and independent thinking are the two necessary traits of revolutionary thinking.", " -- Martyr Bhagat Singh", 
"Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.", " -- Albert Einstein", 
 "You have to dream before your dreams can come true.", " -- APJ Abdul Kalam", 
 "Freedom is not given - it is taken.", " -- Netaji Subhas Chandra Bose", 
"Take up one idea. Make that one idea your life, think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body be full of that idea, and just leave every other idea alone. This is the way to success.", " -- Swami Vivekananda", 
"Will play holi with blood if the country is in trouble.", " -- Ashfaqullah Khan", 
 "All our dreams can come true if we have the courage to pursue them.", " -- Walt Disney", 
"So long as you do not achieve social liberty, whatever freedom is provided by the law is of now avail to you.", " -- BR Ambedkar", 
"There is no easy walk to freedom anywhere, and many of us will have to pass through the valley of the shadow of death again and again before we reach the mountaintop of our desires.", " -- Nelson Mandela", 
"Don't see others doing better than you beat your own records everyday, because success is a fight between you and yourself.", " -- Chandra Shekhar Azad",
"Live as if you were to die tomorrow. Learn as if you were to live forever.", " -- Mahatma Gandhi", 
"One individual may die for an idea, but that idea will, after his death, incarnate itself in a thousand lives.", " -- Netaji Subhas Chandra Bose"];

// JavaScript window.location object can be used

//     to get current page address (URL)
//     to redirect the browser to another page
//     to reload the same page

// window: in JavaScript represents an open window in a browser.

// location: in JavaScript holds information about current URL.

// The location object is like a fragment of the window object and is called up through the window.location property.

// location object has three methods:

//    1. assign(): used to load a new document
//    2. reload(): used to reload current document
//    3. replace(): used to replace current document with a new one

// So here we need to use reload(), because it can help us in reloading the same document.

// So use it like window.location.reload();.

// The parameter set to 'true' reloads a fresh copy from the server. Leaving it out will serve the page from cache.

document.querySelector("#refresh").addEventListener("click", function() { 
    	      window.location.reload(true);
 });

let x = Math.floor((Math.random() * 12) + 1);
    
function generatorFunction(x) {
  if(x % 2 == 0){
        // return `${x} + ${x + 1}`;
      return document.querySelector(".quote").innerHTML = `<q>${arr[x]}</q><b>${arr[x + 1]}</b>`;
    } else {
        // return `${x - 1} + ${x}`;
      return document.querySelector(".quote").innerHTML = `<q>${arr[x-1]}</q><b>${arr[x]}</b>`;
    }
}

generatorFunction(x);
