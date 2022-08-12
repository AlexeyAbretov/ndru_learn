// let transformTime = (start) => {
//     let minutes = Math.floor(start / 60);
//     let seconds = start % 60;

//     return `${('0' + minutes).slice(-2)}:${('0' + seconds).slice(-2)}`;
// };

// let mask = (tel) => {
//     let x = tel.target.value.replace(/\D/g, '')
//             .match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);

//         if (!x[0]) {
//             tel.target.value = '+';
//             return;
//         }

//         if (!x[1]) {
//             tel.target.value = `7`;
//             return;
//         }

//         tel.target.value = `+7 `
//             +`(${x[2]}`
//             + ( x[3] ? `) ${x[3]}` : '' )
//             + ( x[4] ? `-${x[4]}` : '' )
//             + ( x[5] ? `-${x[5]}` : '' );
// };