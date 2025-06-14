/*
MADE BY AtaGalata
*/

module.exports = {
    token : "" || process.env.token, //Glitch e Yüklerseniz Burayı Boş Bırakın, .env Dosyasının İçine Yazın
    süre : 10 * 1000, //Ne Kadar Sürede Değişceği (min: 10 sn yoksa buga giriyor)

/*      1 sn = 1000
        5 sn = 5 * 1000
        1 dk = 1 * 60 * 1000
        1 sa = 1 * 60 * 60 * 1000
        1 gün = 1 * 24 * 60 * 60 * 1000  */

    emoji : null, // (null / Unicode / DiscordEmojis) - emoji : "💥"

    expire : null //Ne Kadar Süre Durcağı (null / [time]) - expire : 5 * 1000

}
