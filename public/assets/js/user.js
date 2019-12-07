//当表单发生提交行为的时候
$('#userFrom').on('submit',function(){
//    alert(123)
//获取到用户再表单中输入的内容并将内容格式化成参数字符串
    var formData = $(this).serialize()
    console.log(formData);


    //向服务器端发送添加用户的请求
    $.ajax({
        type:'post',
        url:'/users',
        data:formData,
        success: function () {
            //添加成功的话 刷新页面
            location.reload();
        },
        error:function() {
            alert('用户添加失败')
        }
    })
    
   //阻止表单的默认提交行为
    return false;
});
//当用户选择文件的时候



$('#avatar').on('change',function(){
    //用户选择到的文件
    //  console.log(this.files[0]);
    var formData = new FormData();
    formData.append('avatar', this.files[0]);
     
    $.ajax({
        type:'post',
        url:'/upload',
        data:formData,
        //告诉$.ajax方法不要解析请求参数
        processData:false,
        //告诉$.ajax方法不要设置请求参数的类型
        contentType:false,
        success:function(response) {
            console.log(response);
            //实现头像预览功能
            $('#prebiew').attr('src',response[0].avatar);
            $('#hiddenAvatar').val(response[0].avatar)//将图片放在隐藏域当中
        }
    })
});

//向服务器端发送请求 索要用户列表数据
$.ajax({
    type:'get',
    url:'/users',
    success:function(response) {
        console.log(response)

        //这里是使用模板引擎将数据和html字符串进行拼接
       var html = template('userTpl',{data: response});
      // console.log(html)
      //将拼接好的字符串显示在页面中
      $('#userBox').html(html);
    }
});

//通过事件委托的方式为编辑按钮添加点击事件
$('userBox').on('click','.edit',function(){

});


