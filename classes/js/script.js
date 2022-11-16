$(document).ready(function(){
      ///////////////Treballant amb classes --> https://lenguajejs.com/javascript/caracteristicas/clases-es6/
      var person1=new Person("Mari",23);//instancio la classe i fico uns valors
      console.log(person1.name);
      console.log(person1.loadingFullName());

      var person2=new Person();
      person2.age=28;//si trec el get estic accedint directament a l'atribut que és públic
      person2.name="Marta"; //accedeixo al set
      person2.surname="Garcia"; //--> no funcionarà ja que name és atribut d'àmbit privat
      console.log(person2.loadingFullName());
      //console.log(person1.#loadingMyName()); //--> dóna error ja que  loadingMyName és private, per tenir #

        
      //////////////////////////////////LocalStorage: https://es.javascript.info/localstorage

      //creació i lectura: MANERA 1 --> AMB SET I GET
       localStorage.setItem('test', 121);//creació
       console.log("localstorage test");
       console.log(localStorage.getItem('test') ); //lectura

       //creació i lectura: MANERA 2 --> COM SI FOS UN OBJECTE
       localStorage.data = "Pedrito";
       console.log("localstorage data");
       console.log( localStorage.data ); 


      //NOMÉS CADENES
      localStorage.user = {name: "John"};
      console.log("localstorage user, com a objecte");
      console.log(localStorage.user); // [object Object]

      //---> PER TANT:EL MILLOR ÉS
      //
       localStorage.user = JSON.stringify({name: "John"});
       console.log("localstorage user, com a JSON");
       console.log(localStorage.user);
 
       let user = JSON.parse( localStorage.user );
       console.log("user");
       console.log(user.name ); // John
      
       // borra una clave
      delete localStorage.data;
      alert( localStorage.data ); 

      //ITERANT tots els localstorage que tinguem emmagatzemats
      // for(let i=0; i<localStorage.length; i++) {
      //       let key = localStorage.key(i);
      //       alert(`${key}: ${localStorage.getItem(key)}`);
      // }
     
      //BON EXEMPLE: https://mdn.github.io/dom-examples/web-storage/index.html
      



})
