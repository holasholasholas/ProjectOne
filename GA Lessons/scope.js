// // let x = 2;
// // let y = 5;

// // const magic = () => {
// //   x = x + 10;
// //   y = y + 20;
// //   let z = x + y;
// //   console.log("inside", x, y, z); //? 12, 25, 37 || undefined x 3
// // };

// // console.log("before", x, y); //? 2, 5
// // const z = magic(10, 10);
// // console.log("after", x, y, z); //? 12, 25, 37 || 12, 25, undefined

// let x = [2];

// const magic = (x) => {
//   x[0] += 10;
//   let z = x;
//   console.log("inside", x, z); //? 12, 12
// };

// console.log("before", x); //? 2
// const z = magic(x);
// console.log("after", x, z); //? 2

const lady = {
    getPet: () => {
      const name = ["cat 1"];
      // const name = {
      //   name: "Cat 2",
      // };
      // const name = "cat 3";
      return name;
    },
  };
  console.log("answer[cat]:", lady.getPet().name); //? cat
  //! TypeError: Cannot read properties of undefined (reading '0')
  console.log("answer cat1:", lady.getPet());
//   console.log("answer cat3:", lady.getPet());
