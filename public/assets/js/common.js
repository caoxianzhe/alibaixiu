$('#logout').on('click',function(){
    var isConfirm = confirm('您真的要退出吗')
    if(isConfirm) {
     //  alert('用户点击确认')
     $.ajax({
       type:'post',
       url:'/logout',
       success:function() {
         location.href = 'login.html'
       },
       error:function() {
         alert('退出失败')
       }
     })
    }
   });
 