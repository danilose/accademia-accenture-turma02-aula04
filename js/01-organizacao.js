console.log('Sentença 01');

{

  {
    console.log('Bloco 01');
  }
  {
    console.log('Bloco 02')
  }

}

function teste() {
  console.log('Resposta da função');
}

console.log('Sentença 02');

teste();

function transformaParaMaiuscula( parametro ) {
  console.log( parametro.toUpperCase() );
}

let userName = 'danilo elias';

transformaParaMaiuscula(userName);