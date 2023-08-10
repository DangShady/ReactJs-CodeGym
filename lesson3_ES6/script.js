function giaiThua(item) {
    if (n === 0 || n === 1) {
        return 1;
      }
    
      let result = 1;
      for (let i = 2; i <= n; i++) {
        result *= i;
      }
    
      return result;
}





const ListSo = [7,10,15,20,5]

const ListSoMoi = ListSo.map(giaiThua)


const ListHocVien = [
    {id:1,name:"Thanh Loan",age:19,gender:"nữ"},
    {id:2,name:"Thiện",age:21,gender:"nam"},
    {id:3,name:"San San",age:20,gender:"nữ"},
]

const ListHocVienMoi = ListHocVien.map((item)=>{
    return {
        ...item,   
        class: "RJ2307R1"
    };
})
console.log(ListHocVienMoi)


const ListHocVienFilter = ListHocVien.filter((item)=>{
return item.age  > 20
})

console.log(ListHocVienFilter)

const ListHocVienSort = ListHocVien.sort((a,b)=>{
    return a.age - b.age
    })
    
    console.log(ListHocVienSort)
