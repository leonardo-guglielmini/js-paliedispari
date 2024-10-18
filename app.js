//Es.1 Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

function isPalindrome(text){
    
    //Soluzione 1 -  utilizzo un contatore per controllare che il numero di caratteri uguali corrispondano al numero totale di caratteri presenti nella parola,
    // confrontando le singole lettere a partire dagli estremi della parola inserita.

    let charCount=0;

    for(let i = 0; i < text.length; i++){
        if(text.charAt(text.length-i-1).toLowerCase()===text.charAt(i).toLowerCase()){
            charCount++;
        }
    }
    
    if(charCount===text.length){
        return true;
    }else{
        return false;
    }

    /*
    //Soluzione 2 - creo una nuova variabile in cui andrò ad inserire singolarmente le lettere della variabile text a partire dall'ultima. Confronto poi le due parole.

    text = text.toLowerCase();
    let reversedText="";

    for(let i = 0; i < text.length; i++){
        reversedText+=text.charAt(text.length-i-1);
    }
    //console.log(reversedText);
    if(reversedText===text){
        return true;
    }else{
        return false;
    }
    */

}

const userText = prompt("Inserisci una parola: ");
console.log(`${isPalindrome(userText) ? "La parola è palindroma." : "La parola non è palindroma."}`)


//Es.2 L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.