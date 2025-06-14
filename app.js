//---MODÜLLER---//
const { Client, CommandInteractionOptionResolver } = require('discord.js-selfbot-v13');
const client = new Client({checkUpdate:false});
const fs = require("fs");

const {süre,  emoji, expire, token} = require("./cfg")
//---MODÜLLER---//

const status = fs.readFileSync("./statusFiles/statusText.txt", "utf-8").split("\r\n");//Textlerin Çekimi.

fs.writeFileSync("./statusFiles/statusNum.txt", "0"); // İlk Başlatmada 0 Değerine Alır.

client.on("ready", r => {//Bota Hazır Olduğunda Çalıştır.

    console.log(`${client.user.username} - Olarak Giriş Yapıldı.`);

    setInterval(() => { //Döngüye Sok.

        const num = fs.readFileSync("./statusFiles/statusNum.txt", "utf-8"); //Dosyadaki Numarayı Çek.

        client.settings.setCustomStatus({text: status[num],emoji: emoji,expires: expire}); //Durum Ayarlanması

        const newNum = parseInt(num) + 1 //Sıradaki Durum İçin Sayının Arttırılması.

        if(newNum > status.length-1) return fs.writeFileSync("./statusFiles/statusNum.txt", "0"); //Eğer Durumlar Bittiyse Başa Dön.

        fs.writeFileSync("./statusFiles/statusNum.txt", newNum.toString()); //Yeni Sayının Yazılması.

    },süre);

})

client.login(token).catch(err => {console.log("Tokeni Kontrol Et."); process.exit(1)})
