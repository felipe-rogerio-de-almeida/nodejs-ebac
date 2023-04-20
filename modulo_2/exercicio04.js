const veiculos = (dia)=>{
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
        {
            modelo:"t-cross",
            ano : 2022, 
            placa:"DFC3R43"
        }
    ];    
    

    const rodizio = [
        [1,2],
        [3,4],
        [5,6],
        [7,8],
        [9,0],
    ];

    const ultimoDigito = carros.filter((item) => {
        const placa = parseInt(item.placa[item.placa.length - 1])
        return rodizio[dia].includes(placa)
    })


    return ultimoDigito
}


console.log(veiculos)



