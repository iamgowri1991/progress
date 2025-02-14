import React from "react";

export default function Polyfill() {
  const array = [1, 2, 3, 4];

  function square(elem) {
    return elem * 2;
  }

  function mod(elem) {
    return elem % 2;
  }

  function customReduce() {
    const resultOfReduce = array.reduce((acc, curr) => {
      acc += curr;
      return acc;
    }, 0);

    console.log("BUILD IN REDUCE -------> ", resultOfReduce);


    const myrr = function myreduce(cb, initialValue) {
      let invokeableArray = this;
      let result = initialValue;
      for (let elem of invokeableArray) {
        result = cb(result, elem);
      }
      return result;
    };

    Array.prototype.myrr = myrr;

    const re123 = array.myrr((acc, curr) => {
      acc += curr;
      return acc;
    }, 0);

    console.log("BUILD IN REDUCE -------> ", re123);
  }

  const customFilter = () => {
    const filterResult = array.filter(mod);
    console.log("BUILD IN FILTER -------> ", filterResult);

    function myFilter(cb) {
      const resultantArray = [];
      const involvedArray = this;

      for (let elem of involvedArray) {
        if (cb(elem)) resultantArray.push(elem);
      }

      return resultantArray;
    }

    Array.prototype.myFilterInJs = myFilter;

    const janga = array.myFilterInJs(mod);

    console.log("MY FILTER-------> ", janga);
  };
  const customMap = () => {
    const result = array.map(square);

    console.log("BUILD IN MAP -------> ", result);

    function myMap(func) {
      const resultantArray = [];
      const callableObj = this;
      for (let elem of callableObj) {
        resultantArray.push(func(elem));
      }
      return resultantArray;
    }

    Array.prototype.myMapInJs = myMap;

    const gow = array.myMapInJs(square);

    console.log("MY MAP-------> ", gow);
  };

  const customCall = () => {
    const obj = {
      name: "John",
      age: 30,
    };


    function sayHello(place) {
      console.log(`Hello ${this.name} and i am  ${this.age} years old and am from ${place}`);
    }

    sayHello.call(obj, "bangalorw");

    const mycall = function (object, ...rest) {
      const invokerMethod = this;
      object.invokerMethod = invokerMethod;
      return object.invokerMethod(...rest);
    };

    Function.prototype.mycall = mycall;

    sayHello.mycall(obj, "bangalorw");

  };

  return (
    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", height: "100vh" }}>
      <button onClick={customMap}> DO for Map</button>

      <button onClick={customFilter}> DO for Filter</button>

      <button onClick={customReduce}> DO for Reduce</button>

      <button onClick={customCall}> DO for CALL</button>
    </div>
  );
}
