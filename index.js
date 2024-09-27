

let nomeHeroi = "thor";
let experiencia = 8500;
let nível;

if (experiencia < 1000) {
    nível = "ferro";
} else if (experiencia <= 2000) {
     nível = "bronze";
} else if (experiencia <= 5000) {
    nível = "prata";
} else if (experiencia <= 7000) {
    nível = "ouro";
} else if (experiencia <= 8000) {
    nível = "platina";
} else if (experiencia <= 9000) {
    nível = "ascendente";
} else if (experiencia <= 10000) {
    nível = "Imortal";
} else {
    nível = "Radiante";
}

console.log('O heroi de nome ${nomeHeroi} esta no nível de ${Nível}');
