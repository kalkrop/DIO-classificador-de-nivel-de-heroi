hero_name = "Thor";
hero_experience = 6001;

// Achei interessante utilizar o Switch(true) Pattern
// para esse desafio

switch (true){
    case hero_experience <= 1000:
        hero_level = "Ferro";
        console.log("O Herói de nome " + hero_name + " está no nível de " + hero_level)
        break;
    case hero_experience > 1000 && hero_experience <= 2000:
        hero_level = "Bronze";
        console.log("O Herói de nome " + hero_name + " está no nível de " + hero_level)
        break;    
    case hero_experience > 2000 && hero_experience <= 5000:
        hero_level = "Prata";
        console.log("O Herói de nome " + hero_name + " está no nível de " + hero_level)
        break;
    case hero_experience > 6000 && hero_experience <= 7000:
        hero_level = "Ouro";
        console.log("O Herói de nome " + hero_name + " está no nível de " + hero_level)
        break;
    case hero_experience > 7000 && hero_experience <= 8000:
        hero_level = "Platina";
        console.log("O Herói de nome " + hero_name + " está no nível de " + hero_level)
        break;
    case hero_experience > 8000 && hero_experience <= 9000:
        hero_level = "Ascendente";
        console.log("O Herói de nome " + hero_name + " está no nível de " + hero_level)
        break;
    case hero_experience > 9000 && hero_experience <= 10000:
        hero_level = "Imortal";
        console.log("O Herói de nome " + hero_name + " está no nível de " + hero_level)
        break;
    case hero_experience >= 10001:
        hero_level = "Radiante";
        console.log("O Herói de nome " + hero_name + " está no nível de " + hero_level)
        break;

    default:
        console.log("Niveis de XP entre 5.000 e 6000 são inválidos.")
}