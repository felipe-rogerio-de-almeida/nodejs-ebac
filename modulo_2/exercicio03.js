const carros = [
    {
        modelo:"Sonata",
        ano : 2017,
        placa:"PRH7548",
    },

    {
        modelo:"GLA250",
        ano : 2023,
        placa:"VSR8420",
    },

    {
        modelo:"Focus",
        ano : 2019,
        placa:"POL4512",
    },

    {
        modelo:"Mustang",
        ano : 2021,
        placa:"FEL4842",
    },
];

carros.push({modelo:"t-cross",ano : 2022, placa:"DFC3R43"})

carros.sort((modelo1, modelo2)=>{
    let a = modelo1.modelo.toUpperCase(),
        b = modelo2.modelo.toUpperCase();

    return a == b ? 0 : a > b ? 1 : -1
});


console.log(carros);




