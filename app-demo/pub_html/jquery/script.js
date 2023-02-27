function adduser(){
  $.ajax({
      method: 'post',
      url: '/users-api',
      data:'fname='+$('#fname').val()+'&lname='+$('#lname').val()+
            '&pid='+$('#pid').val(),
      success: printUsers
  })
}
