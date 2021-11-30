// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal nel DOM

const bicycles = 
[
    {
        bicycleName: 'BMX',
        bicycleWeight: 15
    },
    {
        bicycleName: 'Rider 9000',
        bicycleWeight: 5 
    },
    {
        bicycleName: 'Street 283',
        bicycleWeight: 10
    }
];

// Imposto la bicicletta con il peso minimo di default:

let defaultLighterBicycle = bicycles[0];

// Analizzo ogni bicicletta
for( let i = 0; i < bicycles.length; i++ ) {

    if(bicycles[i].bicycleWeight < defaultLighterBicycle.bicycleWeight) {
        defaultLighterBicycle = bicycles[i];
    }
};

// console.log(defaultLighterBicycle);

const {bicycleName, bicycleWeight} = defaultLighterBicycle;

const itemTemplate = `
    <div class="item">
        <h2>Nome: ${bicycleName}</h2>
        <h3>Peso: ${bicycleWeight} Kg</h3>
    </div>
`;

const pageContainer = document.getElementById('container');

pageContainer.innerHTML = itemTemplate;