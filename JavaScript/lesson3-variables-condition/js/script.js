// assignment operators
// =
// +=
// -=
// *=
// /=
// %=
// **=

// let a =5;
// let b = 10;
// b**=a; //b = b + a
// console.log(b);


// arithmetic operators 
// +
// -
// *
// /
// %
// **
// ++
// --

// let a = 5;
// a--;
// console.log(a);


// comparison operators
// ==
// ===
// !=
// !==
// < 
// <= 
// > 
// >= 

// if ("5" < 5) {
//     console.log(true);
// }else{
//     console.log(false);
// }

// logical operators
// && - AND
// || - OR
// !  - NOT

// if (!true || false || 5<5 ) {
//     console.log(true);
// }else{
//     console.log(false);
// }

// string operators
// +
// +=



// var infoOne = "Javascript";
// infoOne += " Hello";

// console.log(infoOne);


// --------------------------------------------------------------------------------------------------
// Other (Special) Operators (Xüsusi operatorlar) Start

// ,            (vergül)(kodları bir-birindən ayırmaq və sintaksis qanun uyğunluqları icra etmək üçündür )
// var a = 5,  b= 10
// console.log(a,b);


// \            (tərs slash)(Qaçındırma operatorudur)
// var info = 'JavaScript\'s Book';
// console.log(info); 

// typeof       (tip üçün)(datanın tipini təyin etmək üçündür)


// var a = "5";
// var b = typeof a;
// console.log(b);


// void         (dəyişkənin dəyərini undefined etmək üçündür)

// var a = 5;
// console.log(void(a));










// Other (Special) Operators (Xüsusi operatorlar) End
// --------------------------------------------------------------------------------------------------

// 1.Dəyişkən adları mənalı və anlaşıqlı olmalıdır.
// 2.Dəyişkən adlarını yazarkən İngilis əlifbasından başqa əlifadan istifadə etmək qadağandır.
// 3.Dəyişkən adları _ (alt xətt) ilə başlaya bilər.
// 4.Dəyişkən adları $(dollar) işarəsi ilə başlaya bilər.
// 5.Dəyişkən adları heç bir zaman rəqəm ilə başlaya bilməz.Amma ilk hərfdə sonra istifadə edə bilərik.
// 6.Dəyişkən adları böyük kiçik hərfləri anlayır.
// 7.Eyni dəyişkənə iki fərqli məlumat tanımlanan zaman sonuncu tanımlanan məlumatı göstərir.
// 8.JavaScript tərəfindən hazırlanmış rezerv kəlimələri dəyişkən adlarına vermək qadağandır.

// abstract 	    arguments	    await*	            boolean
// break	        byte	        case	            catch
// char	            class*	        const	            continue
// debugger	        default	        delete	            do
// double	        else	        enum*	            eval
// export*	        extends*	    false	            final
// finally	        float	        for	                function
// goto	            if	            implements	        import*
// in	            instanceof	    int	                interface
// let*	            long	        native	            new
// null	            package	        private	            protected
// public	        return	        short	            static
// super*	        switch	        synchronized	    this
// throw	        throws	        transient	        true
// try	            typeof	        var	                void
// volatile	        while	        with	            yield

// var      -> variable (global)
// const    -> constant (local)
// let      -> let      (local)




// // global3
// if (true) {
//     // local global2

//     if (true) {
//         //local global1

//         let info = 5;

//         if (true) {
//             // local0
//         }
//         console.log(info);
//     }
// }





// const infoOne  = 5;
// const infoTwo = 10;
// if (infoOne<infoTwo) {
//     console.log('this is true');
// }else{
//     console.log("this is false");
// }


// if eger
// else  deyilse
// else if  eger deyilse


// if (5>10) { //false
//     console.log("true zero");
// }else if(10<5){
//         console.log("true one");
// }else if(20==5){
//     console.log("true one");
// }
// else{
//     console.log(false);
// }


// const time = parseInt(window.prompt());


// if (time >= 5 && time < 12) {
//     console.log('good morning');
//     if (time === 7) {
//         console.log('get up');
//     } else if (time === 9) {
//         console.log('have a breakfast');
//     }
// } else if (time > 12 && time < 17) {
//     console.log('good afternoon');
// } else if (time > 17 && time < 21) {
//     console.log('good evening');
// } else if (time >= 21 && time < 23) {
//     console.log("good night");
// } else {
//     console.log("wrong time");
// }



// const info  = "hello";
// switch(info){
//     case 5:
//         console.log('this is five');
//     break;

//     case "hello":
//         console.log('this is hello');
//     break;

//     default:
//         console.log('this is default');
//     break;
// }