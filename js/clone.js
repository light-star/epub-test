// * 代码开发过程中有一个常见的技术需求，对简单的数据对象进行克隆
// * 那么你实际是怎么做的？

// * ---------------- 解决下文中缺少 clone 函数的问题……
// 在这里写代码……



//这明显是一个深拷贝的问题，并且看到对象中没有值为undefined，function等等数据，所以考虑简易版的深拷贝 
let clone=function(data){
  return JSON.parse(JSON.stringify(data));
}
//如果有值为undefined和function等值的数据我们可以采用递归的方法遍历对象，对对象中的数组和对象中的对象进行更近一步的处理



// * ---------------- 实现的效果：

{
  const data = {
    person: [
      {
        id: 114514,
        age: 24,
        type: 'student',
      },
    ],
  };

  const mirrorData = clone(data);

  mirrorData.person[0].age = 19;

  console.log(mirrorData.person[0].age === 19);
  console.log(data.person[0].age === 24);
}
