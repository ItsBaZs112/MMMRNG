

var weapons = ["F. Storm","Rolling C.","H.Bomb","I.Slasher","T.Beam","S.Arm","T.Slow","O.Slider","M.Blade","L.Shield"]
var maxNumbers = 5
var names = ["remastered","cut man","intro stage","level pack", "kaizo", "1-5", "protovania", "2023 revamped","roll","tutorial","wily stage","6","woman","man","mega man 12", "mega man 13", "mega man 10", "enker", "GB", "NES", "remake","challenge", "recreated", "recreation","demake","7","8","boss rush","crystal gate",Math.round(Math.random()),"kazoo","kiazo","fangame","yellow devil","nico evaluates","rockman and forte","the sequel","1_8_0","1_7_5","1_6_0","puzzle","neo cutman","contest","i wanna kill megaman","force beam","gimmick","contraption","illegal","factory","cutmna","hardman","concept", "mega man x","zero","mega man maker x","community maker","fortnite","joe biden","strike man","megaman","protoman","bass","roll","super hard","impossible","worlds hardest","easy","traditional","megaman 2","magnet","pluto","saturn","stardroid","battan","cossack","stage","airship","fire base","dark man","4","3","2","1","big pets","Ryu","sea",
"v2","v3","v4","passage","entrance","skull","castle","gun","nrs","vui","feeber",randomWeapon(),"example level","prontoman","mega man","rockman","electro guard","speedrun","tech","glitch","what","a","leafshield","bielles","mmmx","modded",randomWeapon(),randomWeapon(),randomWeapon(),"-","-","-","-","-","-","-","-","-","-","-","-","wow","hard","ez","meka snack","go fast","apology level","b.dash","vs","the level","- ultimate edition","deluxe edition","and bass","dark man 5","fortress","castle","cut","intro","stage","12","13","i","wanna","kill","guard","if it was good","improvement","halloween","christmas","walk","finish","line","death","temple","DWN","dead","man","e","ballade","punk","gate","spam","burner man","big fish","stage","pronto man","heat ladder","quint","sunstar","palace","megamix","bpss","cossack","wily","steam man","meme","dead","bals"]
var name = []
var mugs = ["bom","fir","ice","cut","met","qui","bub","wod","cra","gem","mag","har","top","spa","toa","rin","sku","pha","sto","cry","nap","cha","dark3","dark4","win","fla","yam","kni","pla","tor","conc","spl","pum","str","she","bom","fir","ice","cut","met","qui","bub","wod","cra","mag","har","top","spa","toa","rin","sku","pha","sto","cry","nap","cha","dark3","dark4","win","fla","yam","kni","pla","tor","conc","spl","pum","str","she","boo","dev","wil4","wil6","kam","pet","enk","plu","pun","boo","dev","wil4","wil6","kam","pet","enk","plu","pun","pir","bur","col","pir","bur","col","tim","tim","spr","sha","ast","gre","bla","bou","mult","na","spr","sha","ast","gre","bla","bou","mult","na"]
var curr = 0
var hasChoseHyphen = false
var hyphen = 0
var levelName = ""

function randomItem() {
    return names[Math.floor(Math.random()*names.length)];   
}

function randomWeapon() {
    return weapons[Math.floor(Math.random()*weapons.length)];
}
function randomMugshot() {
    return mugs[Math.floor(Math.random()*mugs.length)];  
}

const randomCycle = [
    randomWeapon, randomItem
]

function randomizeBase() {
    weaponUsed = false;
    if (hasChoseHyphen == false) {
        hyphen = Math.round(Math.random())
        hasChoseHyphen = true
    }
    
    max = document.getElementById("nums").value;
    levelName = "";
    document.getElementById("mugshot").src = "res/"+randomMugshot()+".png"

    for (var i = 0; i < max; i++){
        curr += 1
        if (weaponUsed == false) {
            levelName += randomCycle[Math.floor(Math.random() * randomCycle.length)]()+" ";
            
            weaponUsed = true;
        } else {
            if (curr == Math.round(((maxNumbers / 3) * 2)) && hyphen == 1) {
                levelName += randomItem()+" - ";
            }
            else {
            levelName += randomItem()+" ";
            }

        }
    }

    levelName = levelName.toUpperCase();

    document.getElementById("name").innerHTML = levelName;
}
